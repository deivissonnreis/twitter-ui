import styled from 'styled-components';
import {ReactComponent as logo} from '../../assets/svgs/icon.svg'
import button from '../../components/Buttons'
import {Link as link} from 'react-router-dom'

export const Link = styled(link)`
    text-decoration: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: white;
`;

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: max(22vw, min(480px, 80vw));
    height: 100vh;
    margin: 0 auto;
    flex-shrink: 0;

    >form{
        display: flex;
        flex-direction: column;
        width: 100%;
        >label{
            display: flex;
            font-size: 38px;
            font-weight: bold;
            margin-top: 20px;
            margin-bottom: 20px;
            flex-wrap: nowrap;
        }
        >input{
            box-sizing: border-box;
            width: 100%;
            height: 48px;
            margin-bottom: 16px;
            text-indent: 12px;
            border-radius: 6px ;
            background-color: white;
            outline: none;
            border: 1px solid var(--dark7);
            &:focus{
                outline: 2px solid var(--primaryblue);
                /* border: none; */
                /* border-color:2px solid var(--primaryblue); */
            }
        }
    }
`;
export const Logo = styled(logo)`
    align-self: flex-start;
    width: 42px;
    height: 42px;
   
`;
export const LogInButton = styled(button)`
    color: white;
    margin-bottom: 38px;
   
`;

export const Buttons = styled.div`
   display: flex;
   justify-content: space-between;
   width: 100%;
`;

export const ForgotButton = styled(button)`
    border: none;
    font-weight: normal;
`;

export const SignUpButton = styled(button)`
    border: none;
    font-weight: normal;

   
`;
