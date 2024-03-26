import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback } from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoIosMoon } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { AppDispatch, RootState } from '@/store';
import { logout } from '@/reducers/user';

const HeaderLayout = styled.header`
  > ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 24rem;
    margin-top: 1.3rem;
    font-size: 1.1rem;
    a {
      cursor: pointer;
      text-decoration: none;
      color: #333;
      &:hover {
        text-decoration: underline;
        text-underline-offset: 2px;
      }
    }
    .login_btn {
      background-color: #3b4890;
      color: white;
      padding: 0.3rem;
      margin-right: 0.4rem;
      &::after {
        content: none;
      }
      a {
        color: white;
      }
    }
    .toggle-mode-btn {
      display: flex;
      align-items: center;
      svg {
        font-size: 1.5rem;
        margin-right: 0.2rem;
      }
      &::after {
        content: none;
      }
    }
    li::after {
      content: '|';
      color: #ccc;
      font-size: 10px;
      line-height: 10px;
      padding: 0 5px 0 4px;
      vertical-align: 1px;
    }
  }
  .logo_search_wrapper {
    display: flex;
    align-items: center;
    margin-left: 19rem;
    margin-top: 1rem;
    .search_wrapper {
      display: flex;
      align-items: center;
      background-color: #3b4890;
      margin-left: 6rem;
      input {
        width: 31rem;
        height: 3.5rem;
        margin: 4px;
        margin-right: 0;
        outline: none;
        border: none;
        padding: 0.5rem 1rem;
        font-size: 1.3rem;
        font-weight: 600;
        color: #333;
      }
      button {
        height: 100%;
        background-color: #3b4890;
        border: none;
        padding: 0.8rem;
        cursor: pointer;
        svg {
          font-size: 2.3rem;
          color: white;
        }
      }
    }
  }
`;

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { me } = useSelector((state: RootState) => state.user);

  const onClickLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <HeaderLayout>
      <ul>
        <li>
          <Link href='/'>마이너갤</Link>
        </li>
        <li>
          <Link href='/'>미니갤</Link>
        </li>
        <li>
          <Link href='/'>갤로그</Link>
        </li>
        <li>
          <Link href='/'>NFT</Link>
        </li>
        <li>
          <Link href='/'>디시뉴스</Link>
        </li>
        <li>
          <Link href='/'>디시픽</Link>
        </li>
        <li>
          <Link href='/'>디시게임</Link>
        </li>
        <li>
          <Link href='/'>이벤트</Link>
        </li>
        <li>
          <Link href='/'>디시콘</Link>
        </li>
        <li className='login_btn'>
          {me ? (
            <Link href='/login' onClick={onClickLogout}>
              로그아웃
            </Link>
          ) : (
            <Link href='/login'>로그인</Link>
          )}
        </li>
        <li className='toggle-mode-btn'>
          <IoIosMoon />
          야간모드
        </li>
      </ul>
      <div className='logo_search_wrapper'>
        <Link href='/'>
          <Image src='/img/dcin_logo.png' alt='갤러리' width={210} height={45} />
          <Image src='/img/tit_gallery.png' alt='갤러리' width={55} height={50} />
        </Link>
        <div className='search_wrapper'>
          <input placeholder='갤러리 & 통합검색' />
          <button>
            <FaSearch />
          </button>
        </div>
      </div>
    </HeaderLayout>
  );
};

export default Header;
