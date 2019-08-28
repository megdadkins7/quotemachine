import React from 'react'
import { FaSyncAlt } from "react-icons/fa";
import styled from 'styled-components'

const StyledNewQuoteButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  button {
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;
    color: #25427C;
    margin: 10px;
  }
`;

function NewQuoteButton({ onClick }) {
  return (
    <StyledNewQuoteButton>  
      <button
        className='button'
        id='new-quote'
        onClick={onClick}
      >
        <FaSyncAlt />
      </button>
    </StyledNewQuoteButton>
  )
}

export default NewQuoteButton