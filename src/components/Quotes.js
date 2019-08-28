import React, {useState, useEffect, useCallback} from 'react'
import styled from 'styled-components'
import axios from 'axios'

import QuotesBox from './QuotesBox'
import NewQuoteButton from './NewQuoteButton'
import TweetButton from './TweetButton'

const StyledQuotes = styled.div`
  align-items: center;
  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function Quotes() {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')
  
  const getQuote = () => {
    const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
  
    axios.get(url).then(res => {
      const data = res.data.quotes;
      const quoteNum = Math.floor(Math.random() * data.length)
      const randomQuote = data[quoteNum]

      setQuote(randomQuote.quote)
      setAuthor(randomQuote.author)
    })
  }

  useEffect(() => {
    getQuote()
  }, [])
  
  const handleClick = useCallback(event => {
    getQuote()
  }, [])

  return (
    <StyledQuotes>
      <div id='quote-wrapper'>
        <div id='quote-box'>
           <QuotesBox quote={quote} author={author} />
          <div className='buttons'>
            <TweetButton quote={quote} author={author} />
            <NewQuoteButton onClick={handleClick} />
          </div>
        </div>
      </div>
    </StyledQuotes>
  )
}

export default Quotes