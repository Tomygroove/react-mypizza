import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const Logout = () => {
  const history = useHistory()
  const isToken = localStorage.getItem('token')

  const handleLogout = () => {
    localStorage.removeItem('token')
    history.push('/')
  }

  return (
    <Container>
      {isToken ? (
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      ) : (
        <Button onClick={handleLogout}>Login</Button>
      )}
    </Container>
  )
}

const LogoutButton = styled.button`
    color: white;
    background: none;
    border-radius:2px;
    border:1px solid #d34836 ;
    height: 3.5vh;
    cursor: pointer;
    &:hover{
      background: #d34836;
  }
`
const Button = styled.button`
color: white;
background: #d34836;
border-radius:2px;
border:1px solid #d34836 ;
height: 3.5vh;
cursor: pointer;
&:hover{
  background: none;
}
`

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
`

export default Logout