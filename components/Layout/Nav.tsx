import React from 'react';
import styled from 'styled-components';
import { MdArrowDropDown } from 'react-icons/md';

const NavBox = styled.nav`
  background-color: #3b4890;
  margin-top: 2rem;
  > ul {
    display: flex;
    align-items: center;
    margin: 0 19rem;
    padding: 0.6rem 0;
    .dropdown svg {
      font-size: 3rem;
      cursor: pointer;
    }
    li {
      font-size: 1.4rem;
      font-weight: 600;
      margin-right: 2rem;
      color: white;
      cursor: pointer;
      white-space: nowrap;
      &:first-child {
        color: #ffed44;
      }
      .icon_beta {
        display: inline-block;
        width: 27px;
        height: 13px;
        margin-left: 2px;
        vertical-align: 2px;
        background: url(https://nstatic.dcinside.com/dc/w/images/beta_img.png) no-repeat center center/100%;
      }
    }
    a {
      font-size: 1.4rem;
      border-radius: 4px;
      border: none;
      padding: 0.5rem;
      cursor: pointer;
      color: #1a0000;
      text-decoration: none;
      background-color: #ffed44;
      font-weight: 600;
    }
  }
`;

const Nav = () => {
  return (
    <NavBox>
      <ul>
        <li>갤러리</li>
        <li>마이너갤</li>
        <li>미니갤</li>
        <li>갤로그</li>
        <li>디시뉴스</li>
        <li>NFT</li>
        <li>
          디시픽 <span className='icon_beta'></span>
        </li>
        <li className='dropdown'>
          <MdArrowDropDown />
        </li>
      </ul>
    </NavBox>
  );
};

export default Nav;
