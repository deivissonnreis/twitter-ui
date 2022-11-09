import styled from 'styled-components';
import button from '../Buttons'

export const Container = styled.div`
    background-color: var(--primaryblue);
    width: 99vw;
    height: 70px;
    position: sticky;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    @media (max-width: 570px){
        display: flex;
        align-items: center;
        justify-content: center;

    }
    

`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20%;

    >h1{
        font-size: 24px;
        font-weight: bold;
        color: white;
        margin-bottom: 6px;

    }
    h2{
        color: white;
        font-size: 16px;
    }
    @media(max-width: 730px){
        margin-left: 2%;
    }
    @media (max-width: 570px) {
        display: none;
    }

`;
export const Buttons = styled.div`
    display: flex;
    align-items: center;
    margin-right: 12px;
   
`;
export const LogIn = styled(button)`
    border: 1px solid white;
    margin-right: 12px;
    flex-shrink: 0;
`;
export const SignUP = styled(button)`
    border: 1px solid white;
    background-color: white;
    color: #000000 ;
    flex-shrink: 0;
    
`;
