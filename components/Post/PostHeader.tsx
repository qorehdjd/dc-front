import { useSelector } from 'react-redux';
import styled from 'styled-components';
import React from 'react';

import { RootState } from '@/store';
import { IoMdArrowDropdown } from 'react-icons/io';

const HeaderBox = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #29367c;
  padding-bottom: 1.5rem;
  margin-top: 2rem;
  .title {
    color: #29367c;
    font-size: 2.2rem;
    font-weight: 600;
    white-space: nowrap;
  }
  > ul {
    display: flex;
    font-size: 1.2rem;
    align-self: flex-end;
    li {
      white-space: nowrap;
    }
    li > span:hover {
      cursor: pointer;
      text-decoration: underline;
      text-underline-offset: 2px;
    }
    li:first-child::before {
      content: none;
    }
    li::before {
      content: '|';
      color: #ccc;
      font-size: 12px;
      line-height: 12px;
      padding: 0 8px;
      vertical-align: 1px;
    }
  }
`;

const PostHeader = () => {
  const gallery = useSelector((state: RootState) => state.post.gallery);
  return (
    <HeaderBox>
      <span className='title'>{gallery.name}</span>
      <ul>
        <li>
          <span>갤러리 정보</span>
        </li>
        <li>
          <span>설정</span>
        </li>
        <li>
          <span>연관 갤러리(7/3)</span>
          <IoMdArrowDropdown />
        </li>
        <li>
          <span>갤주소 복사</span>
        </li>
        <li>
          <span>이용안내</span>
        </li>
      </ul>
    </HeaderBox>
  );
};

export default PostHeader;
