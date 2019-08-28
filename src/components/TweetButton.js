import React from 'react'
import { FaTwitter } from "react-icons/fa";
import styled from 'styled-components'

const StyledTweetButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    cursor: pointer;
    font-size: 23px;
    font-weight: 500;
    color: #25427C;
  }
`;

function TweetButton() {
  return (
    <StyledTweetButton>
      <a
        className='tweet-quote'
        id='tweet-quote'
        title='Tweet this quote!'
        href='http://google.com'
      >
        <FaTwitter />
      </a>
    </StyledTweetButton>
  )
}

export default TweetButton