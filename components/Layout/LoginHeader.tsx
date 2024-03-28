import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const LoginHeaderLayout = styled.header`
  background: #29367c;
  padding: 0 32.5rem;
  height: 8.2rem;
  display: flex;
  align-items: flex-end;
  padding-bottom: 1rem;
  div {
    display: flex;
    align-items: center;
  }
  a {
    color: white;
    font-size: 1.5rem;
    text-decoration: none;
    position: relative;
    top: 2px;
  }
  @media (max-width: 700px) {
    padding: 0;
    justify-content: center;
    align-items: center;
  }
`;

const LoginHeader = () => {
  return (
    <LoginHeaderLayout>
      <div>
        <Link href='/'>
          <Image src='/img/dcin_logo2.png' width={210} height={45} alt='로고이미지' />
        </Link>
        <Link href='/login'>
          <Image src='/img/tit_login.png' width={45} height={45} alt='로그인 이미지' />
        </Link>
      </div>
    </LoginHeaderLayout>
  );
};

export default LoginHeader;
