import styled from 'styled-components';
import {ReactComponent as logo} from '../../assets/svgs/icon.svg'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    >h1{
        font-weight: bold;
        font-size: 50px;
        @media (max-width: 710px){
        font-size: 35px;
        
        }
        @media (max-width: 500px){
        font-size: 22px;

        }
    }
`;

export const Logo = styled(logo)`
    width: max(50vw, min(250px, 20vw));
    height: max(30vw, min(250px, 20vw));
    margin-top: 5%;
    margin-bottom: 50px;

`;
