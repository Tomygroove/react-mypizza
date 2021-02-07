import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import {useTranslation} from 'react-i18next'

const Logout = () => {
  const {t, i18n} = useTranslation()
  const history = useHistory()
  const isToken = localStorage.getItem('token')

  const handleLogout = () => {
    localStorage.removeItem('token')
    history.push('/')
  }

  return (
    <Container>
      {isToken ? (
        <LogoutButton onClick={handleLogout}>{i18n.t('header.logout')}</LogoutButton>
      ) : (
        <Button onClick={handleLogout}>{i18n.t('header.login')}</Button>
      )}
    </Container>
  )
}

const LogoutButton = styled.button`
    border:none;
    padding:6px 5px 6px 5px;
    border-radius:2px;
    background:#d34836;
    color:#2A2F32;
`
const Button = styled.button`
  border:none;
  padding:6px 5px 6px 5px;
  border-radius:2px;
  background-color: #3498db;
  color:#15cdfc;
`

const Container = styled.div`
  // float: right;
  display: flex;
  align-items: center;
  padding: 0 1rem;
`

export default Logout