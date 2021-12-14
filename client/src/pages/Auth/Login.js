import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import Sidebar from '../../components/common/Navbar/SideNav';
import PropTypes from 'prop-types';
import { FormControlUnstyledContext } from '@mui/base';

export default function Login({ setToken }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const loginUser = async (credentials) => {
        return fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        }).then(data => data.json())
    }

    const submitForm = async (e) => {
        e.preventDefault();

        try {
            if (email.length === 0 || password.length < 8) toast.error("Password must be at least 8 characters")
            const token = await loginUser({ email, password })
            setToken(token)
        } catch (error) {
            console.log(error)
            setError(error.message)
        }

    }

    return (
        <PageContainer>
            {/* <Sidebar /> */}
            <Container>

                <FormContainer>
                    <h1>Welcome Back</h1>

                    <LoginForm onSubmit={submitForm} >
                        <InputContainer>
                            <InputField placeholder="Email \ email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                            <InputField placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />

                            <SubmitButton onClick={submitForm} >Login</SubmitButton>
                        </InputContainer>
                    </LoginForm>
                </FormContainer>
            </Container>
        </PageContainer>
    );
}


const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height:100vh;
    justify-content:space-between;
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height:100vh;
    justify-content:center;
    justify-items:center;
    align-content: center;
    align-items:center;
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    margin: 10px;
`

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
`

const LoginForm = styled.form`

`

const InputField = styled.input`
    margin:10px;
    width: 400px;
    border-radius: 10px;
    height: 50px;
    border: 1px solid grey;

    box-shadow: 1px 1px 5px 0px rgba(217,94,211,0.47);
-webkit-box-shadow: 1px 1px 5px 0px rgba(217,94,211,0.47);
-moz-box-shadow: 1px 1px 5px 0px rgba(217,94,211,0.47);

::placeholder,
::-webkit-input-placeholder {
  color: grey;
  margin-left: 30px;
  font-size: 1.5em;
  padding-left: 50px;

}
:-ms-input-placeholder {
   color: red;
   margin-left: 40px;
   padding-left: 50px;
}
`

const SubmitButton = styled.button`
    width: 400px;
    height: 50px;
    border-radius: 5px;
    border:none;
    color: white;
    font-size: 1.5em;
    background-color: purple;

    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.32);
-webkit-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.32);
-moz-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.32);


    &:hover {
box-shadow: 5px 5px 5px 0px rgba(217,94,211,0.47);
-webkit-box-shadow: 5px 5px 5px 0px rgba(217,94,211,0.47);
-moz-box-shadow: 5px 5px 5px 0px rgba(217,94,211,0.47);
    }
`




