import styled from 'styled-components';
import back from '../../assets/imgs/back-twitter.png'
import {ReactComponent as logo} from '../../assets/svgs/icon.svg'
import {ReactComponent as google} from '../../assets/svgs/google.svg'
import {ReactComponent as apple} from '../../assets/svgs/apple.svg'
import button from '../../components/Buttons'



export const Container = styled.div`
    /* background-color: red; */
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;

export const Wrapper = styled.div`
    display: flex;

  
`;

export const Background = styled.img`
    background-image: url(${back});
    background-size: cover;
    width: 55vw;
    height: 100vh;
`;

export const SignUpContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 48px;
    width: 45vw;
    height: 100vh;

    >h1{
        font-size: 84px;
        font-weight: bold;
        margin-bottom: 32px;

    }

    >h2{
        font-size: 42px;
        font-weight: bold;
        margin-bottom: 32px;
    }
    
    >h3{
        margin-top: 20px;

        >button{
            background: none;
            border: none;
            color: var(--primaryblue);
            font-size: 16px;
            font-weight: normal;
            padding: 0;
            cursor: pointer;

        }
    }
`;

export const Logo = styled(logo)`
    width: 42px;
    height: 42px;
    margin-bottom: 52px
    
`;

export const SignUpGoogle = styled(button)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin-bottom: 16px;
    background-color: white;
    border: 1px solid var(--dark7); 
    color: black;

`;

export const SignUpApple = styled(button)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin-bottom: 16px;
    background-color: white;
    border: 1px solid var(--dark7); 
    color: black;

    
`;

export const SignUpEmail = styled(button)`
    width: 50%;
    margin-bottom: 16px;
    background-color: white;
    color: black;
    border: 1px solid var(--dark7);
    
`;


export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
`;

export const IconGoogle = styled(google)`
   width: 20px;
   height: 20px;
   margin-right: 6px;
`;
export const IconApple = styled(apple)`
   width: 26px;
   height: 26px;
   margin-right: 4px;
`;

export const Terms = styled.div`
    display: flex;
    justify-content: flex-start;
    font-size: 14px;
    width: 430px;
    text-align: left;
    line-height: 20px;
    >h1{

        >button{
            background: none;
            border: none;
            color: var(--primaryblue);
            font-size: 14px;
            font-weight: normal;
            padding: 0;
            cursor: pointer;


    
        }
    }
`;


export const Footer = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 55px;
    background-color: white;
    position: absolute;
    bottom: 0;


`;

export const ContentFooter = styled.div`
     display: flex;
     justify-content: space-between ;
     align-items: center;
     width: 100%;
     padding: 0px 200px;

    >h1{
        font-size: 14px;
    }
`;