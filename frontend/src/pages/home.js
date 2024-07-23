import { useState } from "react";
import { useGlobalContext } from "../context/globalContext";
import Dashboard from "../components/Dashboard/Dashboard";
import Income from "../components/Income/Income";
import Expenses from "../components/Expenses/Expenses";
import { MainLayout } from "../styles/Layouts";
import Navigation from "../components/Navigation/Navigation";
import styled from "styled-components";
import bg from '../img/bg.png';

export default function Home() { // Changed 'home' to 'Home'
    const [active, setActive] = useState(1);

    const global = useGlobalContext();
    console.log(global);

    const displayData = () => {
        switch (active) {
            case 1:
                return <Dashboard />;
            case 2:
                return <Dashboard />;
            case 3:
                return <Income />;
            case 4:
                return <Expenses />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <HomeStyled bg={bg} className="App">
        <MainLayout>
            <Navigation active={active} setActive={setActive} />
            <main>
                {displayData()}
            </main>
        </MainLayout>
        </HomeStyled>
    );
}

const HomeStyled = styled.div`
    height: 100vh;
    background-image: url(${props => props.bg});
    position: relative;
    main {
        flex: 1;
        background: rgba(252, 246, 249, 0.78);
        border: 3px solid #FFFFFF;
        backdrop-filter: blur(4.5px);
        border-radius: 32px;
        overflow-x: hidden;
        &::-webkit-scrollbar {
            width: 0;
        }
    }
`;

