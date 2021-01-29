import React, { useState } from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const Signin = ({submit}) => {
    const [formState, setFormState] = useState({email: '', password: ''})
    const[errorMessage, setErrorMessage] = useState('')
    const history = useHistory()

    return (
      <Container>
      <Title>My Pizza</Title>
        <StyledForm onSubmit={(e) => submit(e, formState, setErrorMessage, history)}>
            <StyledSpan>Se Connecter</StyledSpan>
            <SigninInput onChange={e => setFormState({ ...formState, email: e.target.value})} type='email' placeholder='Email'></SigninInput>
            <SigninInput onChange={e => setFormState({ ...formState, password: e.target.value})} type='password' placeholder='Mot de passe'></SigninInput>
            <StyledSpan>{errorMessage}</StyledSpan>
            <SigninSubmit type='Submit' value='Connexion'></SigninSubmit>
        </StyledForm>
        </Container>
    );
};



const Container = styled.div`
    width:100%;
    height:100vh;
    margin:0px;
    overflow: auto;
    display:flex;
    padding-top:20px;
    flex-direction:column;
    background: #222222;
  `

  const Title = styled.h1`
  text-align: center;
  color :#fff;
  margin-top: 30px;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  font-family: 'Carter One', cursive;
  
  
  &:hover {
      color: white;
  }
  `

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
  font-family: 'Carter One', cursive;
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
  font-family: 'Carter One', cursive;

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
font-family: 'Carter One', cursive;

&:hover{
    background: #2ecc71;
}

`

export default Signin