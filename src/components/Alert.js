import React from 'react';
import styled from 'styled-components';
import { GiSadCrab } from 'react-icons/gi';


const Alert = ({ content }) => {
  return (
    <SAlert>
        <p>
            No results for <span>"{content}"</span>
        </p>
        <GiSadCrab />
    </SAlert>
  )
}

const SAlert = styled.div`
    text-align: center;
    margin: 10rem;
    color: #494949;
    p{
        font-size: 2rem;
    }
    span{
        font-weight: 500;
        font-size: 2.5rem;
        display: block;
    }
    svg{
        font-size: 30rem;
    }

`
export default Alert