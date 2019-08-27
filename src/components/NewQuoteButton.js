import React from 'react'
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
    background-color: #E3E4E8;
    margin: 10px;
    padding: 3px 8px 6px 8px;
    border-radius: 8px;
  }
`;

function NewQuoteButton() {
  return (
    <StyledNewQuoteButton>  
      <button
        className='new-quote'
        id='new-quote'
      >
        &#43;
      </button>
    </StyledNewQuoteButton>
  )
}

export default NewQuoteButton