import React from 'react'
import styled from 'styled-components'

const StyledQuotesBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  #author {
    font-size: 20px;
    color: #979797;
    font-style: italic;
    margin-top: -40px;
    margin-left: 70px;
  }
  #text {
    font-size: 40px;
    color: #525252;
    margin: 20px;
  }
`;

function QuotesBox({ quote, author }) {
  return (
    <StyledQuotesBox>
      <div id='text'><p>{quote}</p></div>
      <div id='author'><span>- {author}</span></div>
    </StyledQuotesBox>
  )
}

export default QuotesBox