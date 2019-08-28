import React from 'react'
import styled from 'styled-components'

const StyledQuotesBox = styled.div``;

function QuotesBox({ quote, author }) {
  return (
    <StyledQuotesBox>
      <div id='text'><p>{quote}</p></div>
      <div id='author'><span>{author}</span></div>
    </StyledQuotesBox>
  )
}

export default QuotesBox