import React from 'react'
import styled from 'styled-components'

const StyledTweetButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;
    color: #25427C;
    background-color: #E3E4E8;
    border-radius: 8px;
    padding: 2px 4px 2px 4px;
  }
`;

function TweetButton() {
  return (
    <StyledTweetButton>
      <a
        className='tweet-quote'
        id='tweet-quote'
        title='Tweet this quote!'
      >
        🐦
      </a>
    </StyledTweetButton>
  )
}

export default TweetButton