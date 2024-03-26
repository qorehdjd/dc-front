import React from 'react';
import styled from 'styled-components';
import { MdArrowDropDown } from 'react-icons/md';

const LatelyVisitListBox = styled.div`
  margin: 0 19rem;
  display: flex;
  border: 1px solid #d5d5d5;
  background: #f3f3f3;
  padding: 1.3rem;
  font-size: 1.2rem;
  .title {
    color: #29367c;
    font-weight: 600;
    margin-right: 0.8rem;
  }
  .newvisit_toggle_btn {
    position: relative;
    top: 1px;
    background-color: white;
    border: 1px solid #d5d5d5;
    width: 15px;
    height: 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      width: 30px;
      height: 20px;
    }
  }
  .newvisit_history_list {
    display: flex;
    margin-left: 1.3rem;
    li {
      margin-right: 1.8rem;
      span:hover {
        cursor: pointer;
        text-decoration: underline;
        text-underline-offset: 2px;
      }
      button {
        background: transparent;
        border: none;
        margin-left: 0.3rem;
        vertical-align: 1.5px;
        font-size: 1rem;
        margin-left: 1rem;
        cursor: pointer;
      }
    }
  }
`;

const LatelyVisitList = () => {
  return (
    <LatelyVisitListBox>
      <span className='title'>최근 방문</span>
      <button className='newvisit_toggle_btn'>
        <MdArrowDropDown preserveAspectRatio='none' />
      </button>
      <ul className='newvisit_history_list'>
        <li>
          <span>LG트윈스</span>
          <button>x</button>
        </li>
        <li>
          <span>리그 오브 레전드</span>
          <button>x</button>
        </li>
      </ul>
    </LatelyVisitListBox>
  );
};

export default LatelyVisitList;
