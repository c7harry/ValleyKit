//button code from https://uiverse.io/menezes11/afraid-lizard-67

import React from 'react';
import styled from 'styled-components';
import { FiMail } from 'react-icons/fi';

const SendFeedbackButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <StyledWrapper>
      <button onClick={onClick}>
        <span />
        <span />
        <span />
        <span />
        <span style={{ display: 'inline-flex', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <FiMail style={{ marginRight: 6, verticalAlign: 'middle' }} />
          Send Feedback
        </span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
   position: relative;
   padding: 0.5em 1.1em;
   outline: none;
   border: 4px solid #1e558e;
   color: #000;
   text-transform: uppercase;
   letter-spacing: 1.2px;
   font-size: 13px;
   overflow: hidden;
   transition: 0.2s;
   border-radius: 12px;
   cursor: pointer;
   font-weight: bold;
  }

  button:hover {
   box-shadow: 0 0 10px #3b82f6, 0 0 25px #1e558e, 0 0 50px #3b82f6;
   transition-delay: 0.6s;
  }

  button span {
   position: absolute;
  }

  button span:nth-child(1) {
   top: 0;
   left: -100%;
   width: 100%;
   height: 2px;
   background: linear-gradient(90deg, transparent, #3b82f6);
  }

  button:hover span:nth-child(1) {
   left: 100%;
   transition: 0.7s;
  }

  button span:nth-child(3) {
   bottom: 0;
   right: -100%;
   width: 100%;
   height: 2px;
   background: linear-gradient(90deg, transparent, #1e558e);
  }

  button:hover span:nth-child(3) {
   right: 100%;
   transition: 0.7s;
   transition-delay: 0.35s;
  }

  button span:nth-child(2) {
   top: -100%;
   right: 0;
   width: 2px;
   height: 100%;
   background: linear-gradient(180deg, transparent, #3b82f6);
  }

  button:hover span:nth-child(2) {
   top: 100%;
   transition: 0.7s;
   transition-delay: 0.17s;
  }

  button span:nth-child(4) {
   bottom: -100%;
   left: 0;
   width: 2px;
   height: 100%;
   background: linear-gradient(360deg, transparent, #1e558e);
  }

  button:hover span:nth-child(4) {
   bottom: 100%;
   transition: 0.7s;
   transition-delay: 0.52s;
  }

  button:active {
   background: #3b82f6;
   background: linear-gradient(to top right, #1e558e, #3b82f6);
   color: #bfbfbf;
   box-shadow: 0 0 8px #3b82f6, 0 0 8px #1e558e, 0 0 8px #3b82f6;
   transition: 0.1s;
  }

  button:active span:nth-child(1),
  button:active span:nth-child(2),
  button:active span:nth-child(3),
  button:active span:nth-child(4) {
   transition: none;
   transition-delay: none;
  }
`;

export default SendFeedbackButton;
