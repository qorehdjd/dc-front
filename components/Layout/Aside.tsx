import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaBell } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from '@/store';

const AsideBox = styled.aside`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 680px;
  margin-left: 2rem;
  .login_box {
    margin-bottom: 2rem;
    border: 1px solid #3b4890;
    .user_info {
      padding: 1rem 1.5rem;
      font-size: 1.4rem;
      font-weight: 600;
      a {
        text-decoration: none;
        color: #29367c;
      }
      span {
        color: #29367c;
      }
    }
    .user_options {
      display: flex;
      justify-content: center;
      padding: 1rem 2rem;
      background-color: #f3f3f3;
      .user_option {
        white-space: nowrap;
        span {
          font-size: 1.3rem;
          font-weight: 600;
          cursor: pointer;
        }
        span:hover {
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        &:first-child::before {
          content: none;
        }
        &:last-child {
          span {
            svg {
              margin-right: 0.5rem;
              vertical-align: -2px;
            }
          }
        }
        &::before {
          content: '|';
          font-size: 11px;
          color: #ccc;
          padding: 0 18px 0 13px;
          vertical-align: 1px;
        }
      }
    }
  }
  .ad_img_wrapper {
    flex: 1;
    cursor: pointer;
  }
  @media (max-width: 1250px) {
    display: none;
  }
`;

const Aside = () => {
  const me = useSelector((state: RootState) => state.user.me);
  return (
    <>
      {me ? (
        <AsideBox>
          <div className='login_box'>
            <div className='user_info'>
              <span>{me.nickname}님 환영합니다</span>
            </div>
            <div className='user_options'>
              <div className='user_option'>
                <span>MY갤로그</span>
              </div>
              <div className='user_option'>
                <span>즐겨찾기</span>
              </div>
              <div className='user_option'>
                {' '}
                <span>
                  <FaBell />
                  알림
                </span>
              </div>
            </div>
          </div>
          <div className='ad_img_wrapper'>
            <Image
              width={0}
              height={600}
              sizes='100vw'
              src='/img/adImg.gif'
              alt='광고이미지'
              style={{ width: '100%', minWidth: '180px' }}
            />
          </div>
        </AsideBox>
      ) : (
        <AsideBox>
          <div className='login_box'>
            <div className='user_info'>
              <span>
                <Link href='/login'>로그인 해주세요.</Link>
              </span>
            </div>
          </div>
          <div className='ad_img_wrapper'>
            <Image
              width={0}
              height={600}
              sizes='100vw'
              src='/img/adImg.gif'
              alt='광고이미지'
              style={{ width: '100%', minWidth: '180px' }}
            />
          </div>
        </AsideBox>
      )}
    </>
  );
};

export default Aside;
