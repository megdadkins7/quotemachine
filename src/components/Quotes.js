import React from 'react'
import styled from 'styled-components'

const StyledQuotes = styled.div``;

function Quotes(props) {
  return (
    <StyledQuotes>
      <div className='quote-text'>
        <p id='text'>
         {/* {quote} */}
        </p>
      </div>
      <div className='quote-author'>
        <span id='author'>
          {/* {author} */}
        </span>
      </div>
    </StyledQuotes>
  )
}

export default Quotes