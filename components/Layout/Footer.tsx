import React from 'react';
import styled from 'styled-components';

const FooterBox = styled.footer`
  text-align: center;
  padding: 2.5rem 2rem;
  font-size: 1.3rem;
  > ul {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    li {
      white-space: nowrap;
      span {
        cursor: pointer;
      }
      &.bold {
        font-weight: 600;
      }
      &:hover {
        text-decoration: underline;
        text-underline-offset: 2px;
      }
      &:last-child::after {
        content: none;
      }
      &::after {
        content: '|';
        color: #ccc;
        font-size: 10px;
        line-height: 10px;
        margin: 0 1rem;
        vertical-align: 1px;
      }
    }
  }
  @media (max-width: 700px) {
    > ul {
      flex-direction: column;
      li::after {
        content: none;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterBox>
      <ul>
        <li>
          <span>회사소개</span>
        </li>
        <li>
          <span>제휴안내</span>
        </li>
        <li>
          <span>광고안내</span>
        </li>
        <li>
          <span>이용약관</span>
        </li>
        <li className='bold'>
          <span>개인정보처리방침</span>
        </li>
        <li>
          <span>청소년보호정책</span>
        </li>
        <li>
          <span>디시 NFT 이용약관</span>
        </li>
      </ul>
      <div className='copyright'>Copyright ⓒ 1999-2023 dsinside. All rights reserved.</div>
    </FooterBox>
  );
};

export default React.memo(Footer);
