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
    margin: 10px;
  }
`;

function TweetButton({ quote, author }) {
  return (
    <StyledTweetButton>
      <a
        className='link-social'
        id='tweet-quote'
        href='http://twitter.com'
        target='_blank' 
        rel="noopener noreferrer"
        title="Post this quote on twitter!"
        href={`https://twitter.com/intent/tweet?text=${quote} ${author}`}
      >
        <FaTwitter />
      </a>
    </StyledTweetButton>
  )
}

export default TweetButton