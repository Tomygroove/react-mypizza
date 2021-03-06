import React, { useState } from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

const Signin = ({submit}) => {
    const {t, i18n} = useTranslation()
    const [formState, setFormState] = useState({email: '', password: ''})
    const[errorMessage, setErrorMessage] = useState('')
    const history = useHistory()

    return (
      <Container>
        <LangContainer>
          <div>
            <button onClick={() => i18n.changeLanguage('fr')}>fr</button>
            <button onClick={() => i18n.changeLanguage('en')}>en</button>
          </div>
        </LangContainer>
      <Title>My Pizza</Title>
        <StyledForm onSubmit={(e) => submit(e, formState, setErrorMessage, history)}>
            <StyledSpan>{i18n.t('login.titre')}</StyledSpan>
            <SigninInput onChange={e => setFormState({ ...formState, email: e.target.value})} type='email' placeholder='Email'></SigninInput>
            <SigninInput onChange={e => setFormState({ ...formState, password: e.target.value})} type='password' placeholder={t('login.mdp')}></SigninInput>
            <StyledSpan>{errorMessage}</StyledSpan>
            <SigninSubmit type='Submit' value={t('login.submit')}></SigninSubmit>
        </StyledForm>
        </Container>
    );
};


const LangContainer = styled.div`
  display: flex;
  justify-content: flex-end;

`
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
  color: #d34836 ;
  margin-top: 30px;
  text-decoration: none;
  padding: 0 1rem;
  `

const StyledForm = styled.form`
  width: 300px;
  padding: 40px;
  border-radius:30px;
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
  border: 2px solid #d34836;
  padding: 14px 10px;
  width: 200px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
  &:focus{
  width: 250px;
  border-color: #d34836;
}
`
const SigninSubmit = styled.input`
border:0;
background: none;
display: block;
margin: 20px auto;
text-align: center;
border: 2px solid #d34836;
padding: 14px 40px;
outline: none;
color: white;
border-radius: 24px;
transition: 0.25s;
cursor: pointer;
&:hover{
    background: #d34836;
}
`

export default Signin