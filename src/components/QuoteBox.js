import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'

import NewQuoteButton from './NewQuoteButton'
import TweetButton from './TweetButton'

const StyledQuoteBox = styled.div`
  .buttons {
    display: flex;
    justify-content: center;
  }

`;

//https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json
//quotes.quote and quotes.author
// {data.quotes.map((item, i) => (
//   <Quotes key={`${item.author}${i}`} {...item} />
// ))}

function QuoteBox() {
  const [data, setData] = useState({ quotes: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
      );
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <StyledQuoteBox>
      <div id='quote-wrapper'>
        <div id='quote-box'>
          <ul>
           {data.quotes.map((item, i) => (
             <li key={`${item.author}${i}`}>
               <p id='text'>{item.quote}</p>
               <span id='author'>{item.author}</span>
             </li>
           ))}
          </ul>
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