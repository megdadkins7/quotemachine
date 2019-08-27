import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'

import NewQuoteButton from './NewQuoteButton'
import TweetButton from './TweetButton'
import Quotes from './Quotes'

const StyledQuoteBox = styled.div`
  .buttons {
    display: flex;
    justify-content: center;
  }

`;

//https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json

function QuoteBox() {
  return (
    <StyledQuoteBox>
      <div id='quote-wrapper'>
       <div id='quote-box'>
         <Quotes />
         <div className='buttons'>
           <TweetButton />
           <NewQuoteButton />
         </div>
       </div>
      </div>
    </StyledQuoteBox>
  )
}

export default QuoteBox