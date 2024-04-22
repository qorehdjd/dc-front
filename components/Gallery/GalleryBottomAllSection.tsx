import React from 'react';
import styled from 'styled-components';
import { IoIosMoon } from 'react-icons/io';
import { PiArrowFatLinesUpFill } from 'react-icons/pi';

const AllGallerySection = styled.section<{ width: string }>`
  display: flex;
  width: ${(props) => (props.width ? props.width : '1123px')};
  border-top: 2px solid #29367c;
  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;
  margin-top: 3rem;
  z-index: 10;
  position: relative;
  > ul:first-child {
    border-left: none;
  }
  > ul {
    margin: 2rem 2rem 2rem 0;
    padding-left: 2rem;
    font-size: 1.1rem;
    border-left: 1px solid #f1f1f1;
    flex: 1;
    li {
      margin-bottom: 0.3rem;
      cursor: pointer;
      white-space: nowrap;
    }
    li:hover {
      text-decoration: underline;
      text-underline-offset: 2px;
    }
    .main_cate {
      font-weight: 600;
      text-decoration: underline;
      text-underline-offset: 2px;
      margin-bottom: 1rem;
      cursor: text;
    }
  }
  @media (max-width: 1050px) {
    display: none;
  }
`;

const NightModeAndPageUpBtnBox = styled.div<{ width: string }>`
  display: flex;
  width: ${(props) => (props.width ? props.width : '1123px')};
  justify-content: flex-end;
  padding: 1rem 2rem;
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #29367c;
  z-index: 10;
  position: relative;
  .night_mode_btn {
    margin-right: 1rem;
    cursor: pointer;
    svg {
      margin-right: 0.3rem;
    }
    &:hover span {
      text-decoration: underline;
      text-underline-offset: 2px;
    }
  }
  .page_up_btn {
    cursor: pointer;
    svg {
      margin-right: 0.3rem;
    }
    &:hover span {
      text-decoration: underline;
      text-underline-offset: 2px;
    }
  }
  @media (max-width: 1050px) {
    display: none;
  }
`;

const GalleryBottomAllSection = ({ width }: { width: string }) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <AllGallerySection width={width}>
          <ul>
            <li className='main_cate'>게임</li>
            <li>
              <span>리그 오브 레전드</span>
            </li>
            <li>
              <span>던전앤파이터</span>
            </li>
            <li>
              <span>아이돌마스터</span>
            </li>
            <li>
              <span>메이플스토리</span>
            </li>
            <li>
              <span>로스트아크</span>
            </li>
            <li>
              <span>마비노기</span>
            </li>
            <li>
              <span>FC온라인</span>
            </li>
            <li>
              <span>포켓몬스터</span>
            </li>
            <li>
              <span>사운드 볼텍스</span>
            </li>
            <li>
              <span>마작</span>
            </li>
          </ul>
          <ul>
            <li className='main_cate'>연예/방송</li>
            <li>
              <span>남자 연예인</span>
            </li>
            <li>
              <span>방탄소년단</span>
            </li>
            <li>
              <span>AKB48</span>
            </li>
            <li>
              <span>걸그룹 여자친구</span>
            </li>
            <li>
              <span>아이유</span>
            </li>
            <li>
              <span>고려 거란 전쟁</span>
            </li>
            <li>
              <span>기타 국내 드라마</span>
            </li>
            <li>
              <span>걸스플래닛999</span>
            </li>
            <li>
              <span>나는 솔로</span>
            </li>
            <li>
              <span>기타 미국드라마</span>
            </li>
          </ul>
          <ul>
            <li className='main_cate'>스포츠</li>
            <li>
              <span>국내야구</span>
            </li>
            <li>
              <span>LG 트윈스</span>
            </li>
            <li>
              <span>해외야구</span>
            </li>
            <li>
              <span>해외축구</span>
            </li>
            <li>
              <span>롯데 자이언츠</span>
            </li>
            <li>
              <span>한화 이글스</span>
            </li>
            <li>
              <span>농구</span>
            </li>
            <li>
              <span>키움 히어로즈</span>
            </li>
            <li>
              <span>두산 베어스</span>
            </li>
            <li>
              <span>KIA 타이거즈</span>
            </li>
          </ul>
          <ul>
            <li className='main_cate'>교육/금융/IT</li>
            <li>
              <span>비트코인</span>
            </li>
            <li>
              <span>부동산</span>
            </li>
            <li>
              <span>정치,사회</span>
            </li>
            <li>
              <span>컴퓨터 본체</span>
            </li>
            <li>
              <span>태블릿PC</span>
            </li>
            <li>
              <span>자격증</span>
            </li>
            <li>
              <span>토익</span>
            </li>
            <li>
              <span>학점은행제</span>
            </li>
            <li>
              <span>주식</span>
            </li>
            <li>
              <span>일어</span>
            </li>
          </ul>
          <ul>
            <li className='main_cate'>여행/음식/생물</li>
            <li>
              <span>도시</span>
            </li>
            <li>
              <span>여행-동남아</span>
            </li>
            <li>
              <span>편의점</span>
            </li>
            <li>
              <span>기타음식</span>
            </li>
            <li>
              <span>치킨</span>
            </li>
            <li>
              <span>주류</span>
            </li>
            <li>
              <span>야옹이</span>
            </li>
            <li>
              <span>식물</span>
            </li>
            <li>
              <span>파충류, 양서류</span>
            </li>
            <li>
              <span>멍멍이</span>
            </li>
          </ul>
          <ul>
            <li className='main_cate'>취미/생활</li>
            <li>
              <span>인터넷방송</span>
            </li>
            <li>
              <span>판타지</span>
            </li>
            <li>
              <span>토이</span>
            </li>
            <li>
              <span>대출</span>
            </li>
            <li>
              <span>역학</span>
            </li>
            <li>
              <span>미스터리</span>
            </li>
            <li>
              <span>카툰-연재</span>
            </li>
            <li>
              <span>만화</span>
            </li>
            <li>
              <span>상의</span>
            </li>
            <li>
              <span>향수, 화장품</span>
            </li>
          </ul>
        </AllGallerySection>
        <NightModeAndPageUpBtnBox width={width}>
          <div className='night_mode_btn'>
            <IoIosMoon />
            <span>야간모드</span>
          </div>
          <div className='page_up_btn'>
            <PiArrowFatLinesUpFill />
            <span>맨위로</span>
          </div>
        </NightModeAndPageUpBtnBox>
      </div>
    </>
  );
};

export default React.memo(GalleryBottomAllSection);
