import React from 'react';


import { Container,
    Wrapper,
    Background,
    Footer,
    SignUpContent,
    Logo,
    IconGoogle,
    IconApple,
    SignUpGoogle,
    SignUpApple,
    SignUpEmail,
    Buttons,
    Terms,
    ContentFooter
   } from './style';

const SignUpScreen: React.FC = () => {
  return (
    <Container>
        <Wrapper>
            <Background />
            <SignUpContent>
                <Logo />
                <h1>Happening now</h1>
                <h2>Join Twitter today</h2>
                <Buttons>
                    <SignUpGoogle>
                        <IconGoogle />
                        <p>Sign up with Google</p>
                    </SignUpGoogle>

                    <SignUpApple >
                        <IconApple />
                        <p>Sign up with Apple</p>

                    </SignUpApple>

                    <SignUpEmail >
                        <p>Sign up with phone or email </p>
                    </SignUpEmail>
                </Buttons>
                <Terms>
                    <h1>By singing up you agree to
                         the <button>Terms of Service</button> and 
                         <button>Privacy 
                         Policy</button>, including <button>Cookie Use.</button>
                    </h1>
                </Terms>

                <h3>Already have an account? <button>Log in</button></h3>

            </SignUpContent>
        </Wrapper>
        <Footer>
            <ContentFooter>
                <h1> About</h1>
                <h1> Help Center</h1>
                <h1> Terms of service</h1>
                <h1> Privacy Policy</h1>
                <h1> Ads Info</h1>
                <h1> Blog</h1>
                <h1> Status</h1>
                <h1> Carres</h1>
                <h1> Brand resources</h1>
                <h1> Advertsing</h1>
                <h1> Marketing</h1>
                <h1> Twitter for bussines</h1>
                <h1> Developers</h1>
                <h1> Directory</h1>
                <h1> Settings</h1>
                <h1> &copy; Twitter, inc.</h1>
            </ContentFooter>
        </Footer>
</Container>
    );
}

export default SignUpScreen;