import React from 'react';
import styled from 'styled-components';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';

const HotGalleryLankingHeaderLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f3f3f3;
  padding: 1.3rem 1rem;
  .title {
    font-size: 1.4rem;
    font-weight: 600;
  }
  .hot_img {
    display: inline-block;
    width: 23px;
    height: 8px;
    margin-right: 2px;
    vertical-align: 3px;
    background-position: -140px -226px;
    background-image: url(https://nstatic.dcinside.com/dc/w/images/sp/sp_img.png);
    background-repeat: no-repeat;
  }
  .right_box {
    display: flex;
    align-items: center;
    .overall_ranking {
      margin-right: 0.6rem;
      color: #3b4890;
      border: 1px solid #d5d5d5;
      border-radius: 50px;
      padding: 0.4rem 0.8rem;
      background-color: white;
      cursor: pointer;
    }
    button {
      display: flex;
      align-items: center;
      border: 1px solid #d5d5d5;
      background-color: white;
      color: #3b4890;
      font-size: 1.6rem;
      cursor: pointer;
    }
    button.left_btn {
      border-top-left-radius: 7px;
      border-bottom-left-radius: 7px;
    }
    button.right_btn {
      border-top-right-radius: 7px;
      border-bottom-right-radius: 7px;
    }
  }
`;

const HotGalleryLankingHeader = () => {
  return (
    <HotGalleryLankingHeaderLayout>
      <div>
        <span className='hot_img'></span> <span className='title'>흥한 갤러리</span>
      </div>
      <div className='right_box'>
        <span className='overall_ranking'>전체 순위</span>
        <button className='left_btn'>
          <IoMdArrowDropleft />
        </button>
        <button className='right_btn'>
          <IoMdArrowDropright />
        </button>
      </div>
    </HotGalleryLankingHeaderLayout>
  );
};

export default HotGalleryLankingHeader;
