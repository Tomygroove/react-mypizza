import React from 'react';
import styled from 'styled-components'

const Pagination = ({ listPerPage, totalPage, paginate }) => {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPage / listPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <NavStyled>
             {pageNumbers.map(number => (
            <UlStyled key={number}>
               
                    <LiStyled onClick={() => paginate(number)} href='#' key={number}>
                        <NumStyled >
                            {number}
                        </NumStyled>
                    </LiStyled>
                
                
            </UlStyled>
            ))}
        </NavStyled>
    );
};

const NavStyled = styled.div `
display: flex;
justify-content: center;
`

const UlStyled = styled.ul `
list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  column-gap: 2px;
`

const LiStyled = styled.li `
margin: 0 1px;
border: 1px solid #8F8989;
width: 25px;
cursor: pointer;
text-align: center;
margin-right: 10px;
color: #4a8cd6;
`

const NumStyled = styled.a `

`

export default Pagination;