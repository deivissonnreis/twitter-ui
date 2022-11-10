import React, { useState } from 'react';
import  {useNavigate}  from 'react-router-dom';

import { Container,
         Logo,
         LogInButton,
         Buttons,
         ForgotButton,
         SignUpButton,
         Link
        } from './style';

const LogInScreen: React.FC = () => {

   const navigate = useNavigate()

   const [email, setEmail] = useState('')

   const [password, setPassword] = useState('')


   function handleLogIn(){
      if(password === '1234' && email === 'j@gmail.com'){
         localStorage.setItem('email', email)
         navigate('/home');
         
      }

   }


  return (
    <Container>
            <Logo/>
             <form action="">
                <label htmlFor="login" >Log in to Twitter</label>
                <input type="email" id="login" placeholder='Phone number, email address' value={email} onChange={(event) => setEmail(event.target.value)} required/>
                <input type="password" placeholder='Password' value={password} onChange={(event) => setPassword(event.target.value)} required/>
               <LogInButton onClick={handleLogIn}>
                     Log In
               </LogInButton>
             </form>
             <Buttons>
                <ForgotButton outlined>Forgot password?</ForgotButton>
                <Link to='/signup'>
                  <SignUpButton outlined>Sign up to Twitter</SignUpButton>
                </Link>
             </Buttons>
    </Container>
    );
}

export default LogInScreen;