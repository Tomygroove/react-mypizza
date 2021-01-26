import React, { useState } from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const Signin = ({submit}) => {
    const [formState, setFormState] = useState({email: '', password: ''})
    const[errorMessage, setErrorMessage] = useState('')
    const history = useHistory()

    return (
        <StyledForm onSubmit={(e) => submit(e, formState, setErrorMessage, history)}>
            <StyledSpan>Se Connecter</StyledSpan>
            <SigninInput onChange={e => setFormState({ ...formState, email: e.target.value})} type='email' placeholder='Email'></SigninInput>
            <SigninInput onChange={e => setFormState({ ...formState, password: e.target.value})} type='password' placeholder='Mot de passe'></SigninInput>
            <StyledSpan>{errorMessage}</StyledSpan>
            <SigninSubmit type='Submit' value='Connexion'></SigninSubmit>
        </StyledForm>
    );
};

const StyledForm = styled.form`
  width: 300px;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: #191919;
  text-align: center;
`

const StyledSpan = styled.span`
color: white;
  text-transform: uppercase;
  font-weight: 500;
`

const SigninInput = styled.input`
  border:0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #3498db;
  padding: 14px 10px;
  width: 200px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;

  &:focus{
  width: 250px;
  border-color: #2ecc71;
}
`
const SigninSubmit = styled.input`
border:0;
background: none;
display: block;
margin: 20px auto;
text-align: center;
border: 2px solid #2ecc71;
padding: 14px 40px;
outline: none;
color: white;
border-radius: 24px;
transition: 0.25s;
cursor: pointer;

&:hover{
    background: #2ecc71;
}

`

export default Signin