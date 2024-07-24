import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null);

    // Fetch incomes and expenses on component mount
    useEffect(() => {
        getIncomes();
        getExpenses();
    }, []);

    // Add income
    const addIncome = async (income) => {
        try {
            await axios.post(`${BASE_URL}/add-income`, income, { withCredentials: true });
            await getIncomes(); // Refresh incomes after adding
        } catch (err) {
            setError(err.response?.data?.message || err.message);
        }
    };

    // Get incomes
    const getIncomes = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/get-incomes`, { withCredentials: true });
            setIncomes(response.data);
            console.log(response.data);
        } catch (err) {
            setError(err.response?.data?.message || err.message);
        }
    };

    // Delete income
    const deleteIncome = async (id) => {
        try {
            await axios.delete(`${BASE_URL}/delete-income/${id}`, { withCredentials: true });
            await getIncomes(); // Refresh incomes after deletion
        } catch (err) {
            setError(err.response?.data?.message || err.message);
        }
    };

    // Total income
    const totalIncome = () => {
        return incomes.reduce((total, income) => total + income.amount, 0);
    };

    // Add expense
    const addExpense = async (expense) => {
        try {
            await axios.post(`${BASE_URL}/add-expense`, expense, { withCredentials: true });
            await getExpenses(); // Refresh expenses after adding
        } catch (err) {
            setError(err.response?.data?.message || err.message);
        }
    };

    // Get expenses
    const getExpenses = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/get-expenses`, { withCredentials: true });
            setExpenses(response.data);
            console.log(response.data);
        } catch (err) {
            setError(err.response?.data?.message || err.message);
        }
    };

    // Delete expense
    const deleteExpense = async (id) => {
        try {
            await axios.delete(`${BASE_URL}/delete-expense/${id}`, { withCredentials: true });
            await getExpenses(); // Refresh expenses after deletion
        } catch (err) {
            setError(err.response?.data?.message || err.message);
        }
    };

    // Total expenses
    const totalExpenses = () => {
        return expenses.reduce((total, expense) => total + expense.amount, 0);
    };

    // Total balance
    const totalBalance = () => {
        return totalIncome() - totalExpenses();
    };

    // Transaction history
    const transactionHistory = () => {
        const history = [...incomes, ...expenses];
        history.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        return history.slice(0, 3);
    };

    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            expenses,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpenses,
            totalBalance,
            transactionHistory,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};