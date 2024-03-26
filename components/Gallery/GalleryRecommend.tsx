import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';

const GalleryRecommendLayout = styled.article``;

const GalleryRecommendList = styled.ul`
  display: flex;
  font-size: 1.2rem;
  margin-top: 1rem;
  border-bottom: 1px solid #d5d5d5;
  padding-bottom: 1.2rem;
  .left_recommend {
    flex: 1;
    margin-right: 2rem;
    li {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.7rem;
    }
    .title:hover {
      cursor: pointer;
      text-decoration: underline;
      text-underline-offset: 2px;
    }
    .title::before {
      content: '';
      display: inline-block;
      width: 8px;
      height: 12px;
      background: url(https://nstatic.dcinside.com/dc/w/images/sp/sp_img.png) no-repeat -298px -18px;
    }
  }
  .right_recommend {
    flex: 1;
    display: flex;
    .img_box {
      margin-right: 1.5rem;
      cursor: pointer;
    }
    .text_box {
      font-size: 1.2rem;
      .title {
        font-weight: 600;
        margin-bottom: 0.8rem;
        cursor: pointer;
      }
      .title:hover {
        text-decoration: underline;
        text-underline-offset: 2px;
      }
      .content {
        cursor: pointer;
      }
      .content:hover {
        text-decoration: underline;
        text-underline-offset: 2px;
      }
      .writer {
        margin-top: 0.8rem;
      }
    }
  }
`;

const PagenationBox = styled.div`
  .pagenation_btn_layout {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .page_num {
      font-size: 1.1rem;
    }
    .pagenation_btn_box {
      display: flex;
      margin-left: 0.8rem;
      button {
        background-color: #29367c;
        color: white;
        font-size: 2rem;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
      }
    }
  }
`;

const GalleryRecommend = () => {
  return (
    <GalleryRecommendLayout>
      <PagenationBox>
        <div className='pagenation_btn_layout'>
          <span className='page_num'>1/3</span>
          <div className='pagenation_btn_box'>
            <button>
              <IoMdArrowDropleft />
            </button>
            <button>
              <IoMdArrowDropright />
            </button>
          </div>
        </div>
      </PagenationBox>
      <GalleryRecommendList>
        <ul className='left_recommend'>
          <li>
            <span className='title'>???: 나는 팀 옮기는걸 별로 좋아하는 스타일이 아니다</span>
            <span className='writer'>ㅅㅁㅅ</span>
          </li>
          <li>
            <span className='title'>이쯤에서 존나 궁금한거...real</span>
            <span className='writer'>ㅇㅛㅇ</span>
          </li>
          <li>
            <span className='title'>롤갤문학{')'} `야....정지훈......`</span>
            <span className='writer'>ㅇㅂㅇ</span>
          </li>
          <li>
            <span className='title'>제우스 거품연봉 줄돈으로 바텀 챙기고 오너 보너스나</span>
            <span className='writer'>ㅇㅅㅇ</span>
          </li>
          <li>
            <span className='title'>경제학전공{')'} 티원애들 몸값 딱 정해준다 ㅇㅇ....txt</span>
            <span className='writer'>oo</span>
          </li>
        </ul>
        <div className='right_recommend'>
          <div className='img_box'>
            <Image src='/img/postImg.jpg' alt='이미지사진' width={154} height={115} />
          </div>
          <div className='text_box'>
            <div className='title'>충격{')'} 현 시점 스토브리그 원탑 티원 썰쟁이...</div>
            <div className='content'>
              그는 대체.... ?!??!?!?!??! !!!!!!! 윌즈에 이어 스토브 리그도 씹어먹는 신마유시
            </div>
            <div className='writer'>
              <b>작성자</b>: ㅇㅇ
            </div>
          </div>
        </div>
      </GalleryRecommendList>
    </GalleryRecommendLayout>
  );
};

export default GalleryRecommend;
