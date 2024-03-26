import React from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import styled from 'styled-components';

const HotGalleryLightCateListLayout = styled.div`
  flex: 1;
  border: 1px #d5d5d5 solid;
  .top_box {
    border-bottom: 1px #d5d5d5 solid;
    .header_wrapper {
      background-color: #f3f3f3;
      display: flex;
      justify-content: space-between;
      padding: 0.6rem 1rem;
      white-space: nowrap;
      .cate_title_wrapper {
        display: flex;
        align-items: center;
        .num {
          color: #999;
          font-size: 1.1rem;
        }
      }
      .title {
        color: #29367c;
        font-size: 1.2rem;
        font-weight: 600;
        margin-right: 0.5rem;
      }
      button {
        display: flex;
        align-items: center;
        background-color: white;
        border: 1px #d5d5d5 solid;
        font-size: 1.7rem;
        cursor: pointer;
      }
    }
    ul {
      padding: 1rem 1.5rem;
      li {
        margin-bottom: 0.5rem;
        font-size: 1.1rem;
        span:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }
  .bottom_box {
    .cate_title_wrapper {
      background-color: #f3f3f3;
      padding: 0.6rem 1rem;
      display: flex;
      align-items: center;
      white-space: nowrap;
      .new_img {
        display: inline-block;
        width: 26px;
        height: 10px;
        background-position: -230px -961px;
        margin: 0 1px 0 0px;
        vertical-align: 1px;
        background-image: url(https://nstatic.dcinside.com/dc/w/images/sp/sp_img.png);
        background-repeat: no-repeat;
      }
      .title {
        color: #29367c;
        font-size: 1.2rem;
        font-weight: 600;
        margin-right: 0.5rem;
      }
      .num {
        color: #999;
        font-size: 1.1rem;
      }
    }
    ul {
      padding: 1rem 1.5rem;
      li {
        white-space: nowrap;
        margin-bottom: 0.5rem;
        font-size: 1.1rem;
        span:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }
`;

const HotGalleryLightCateList = () => {
  return (
    <HotGalleryLightCateListLayout>
      <div className='top_box'>
        <div className='header_wrapper'>
          <div className='cate_title_wrapper'>
            <span className='title'>게시판/강좌</span>
            <span className='num'>(10)</span>
          </div>
          <button>
            <MdArrowDropDown />
          </button>
        </div>
        <ul>
          <li>
            <span>게시물 신고</span>
          </li>
          <li>
            <span>공지사항</span>
          </li>
        </ul>
      </div>
      <div className='bottom_box'>
        <div className='cate_title_wrapper'>
          <span className='new_img'></span>
          <span className='title'>신설 갤러리</span> <span className='num'>(1)</span>
        </div>
        <ul>
          <li>
            <span>고려 거란 전쟁</span>
          </li>
        </ul>
      </div>
    </HotGalleryLightCateListLayout>
  );
};

export default HotGalleryLightCateList;
