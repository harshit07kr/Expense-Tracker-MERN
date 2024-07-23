import axios from "axios";
import { create } from "zustand";

const baseURL = process.env.REACT_APP_API_BASE_URL;

const useAuthStore = create((set) => ({
  loggedIn: null,
  useremail: localStorage.getItem('useremail') || null,  // Load from localStorage

  Loginform: {
    email: "",
    password: "",
  },
  Signupform: {
    email: "",
    password: "",
  },
  
  updateloginform: (e) => {
    const { name, value } = e.target;
    set((state) => ({
      Loginform: {
        ...state.Loginform,
        [name]: value,
      },
    }));
  },
  updatesignupform: (e) => {
    const { name, value } = e.target;
    set((state) => ({
      Signupform: {
        ...state.Signupform,
        [name]: value,
      },
    }));
  },

  login: async () => {
    try {
      const { Loginform } = useAuthStore.getState();
      const res = await axios.post(`${baseURL}/login`, Loginform, {
        withCredentials: true,
      });
      set({ loggedIn: true });
      set({ useremail: Loginform.email });
      localStorage.setItem('useremail', Loginform.email);  // Save to localStorage
      set({
        Loginform: {
          email: "",
          password: "",
        },
      });
      console.log(res);
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message);
    }
  },

  checkAuth: async () => {
    try {
      await axios.get(`${baseURL}/check-auth`, { withCredentials: true });
      set({ loggedIn: true });
    } catch (err) {
      console.error('Auth check failed:', err.response ? err.response.data : err.message);
      set({ loggedIn: false });
    }
  },

  signup: async () => {
    try {
      const { Signupform } = useAuthStore.getState();
      const res = await axios.post(`${baseURL}/signup`, Signupform, {
        withCredentials: true,
      });

      set({
        Signupform: {
          email: "",
          password: "",
        },
      });
      console.log(res);
    } catch (error) {
      console.error('Signup failed:', error.response ? error.response.data : error.message);
    }
  },

  logout: async () => {
    try {
      await axios.get(`${baseURL}/logout`, { withCredentials: true });
      set({ loggedIn: false });
      set({ useremail: null });
      localStorage.removeItem('useremail');  // Remove from localStorage
    } catch (err) {
      console.error('Logout failed:', err.response ? err.response.data : err.message);
    }
  }
}));

export default useAuthStore;
