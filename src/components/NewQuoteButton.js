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
  }
`;

function NewQuoteButton() {
  return (
    <StyledNewQuoteButton>  
      <button
        className='new-quote'
        id='new-quote'
      >
        <FaSyncAlt />
      </button>
    </StyledNewQuoteButton>
  )
}

export default NewQuoteButton