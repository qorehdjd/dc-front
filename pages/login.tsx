import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import LoginHeader from '@/components/Layout/LoginHeader';
import Footer from '@/components/Layout/Footer';
import { login } from '@/reducers/user';
import { AppDispatch, RootState } from '@/store';
import Loading from '@/components/Common/Loading';

const LoginLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  main {
    flex: 1;
  }
`;

const LoginFormBox = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  border: 2px #29367c solid;
  border-radius: 4px;
  padding: 2rem 2rem 1rem 2rem;
  width: 100%;
  max-width: 500px;
  .id_password_box {
    border: 1px solid #dadada;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    .id_input_box,
    .password_input_box {
      display: flex;
      align-items: center;
      padding: 0 1rem;
      width: 100%;
      max-width: 500px;
      &.id_input_box {
        border-bottom: 1px solid #dadada;
      }
      .icon_id,
      .icon_password {
        background-image: url(https://ssl.pstatic.net/static/nid/login/m_sp_01_login_008d5216.png);
        background-repeat: no-repeat;
        width: 16px;
        height: 16px;
        background-size: 266px 225px;
        margin-right: 0.7rem;
      }
      .icon_id {
        background-position: -93px -203px;
      }
      .icon_password {
        background-position: -129px -203px;
      }
      input {
        flex: 1;
        height: 48px;
        border: none;
        outline: none;
        font-size: 1.4rem;
      }
    }
  }
  .error_message {
    color: #f20d0d;
    font-size: 1.2rem;
    margin-top: 0.5rem;
  }
  .login_keep {
    margin-top: 1rem;
    display: flex;
    input {
      margin-right: 0.5rem;
      cursor: pointer;
    }
  }
  .login_btn {
    margin-top: 4rem;
    margin-bottom: 1rem;
    background: #3b4890;
    color: #fff;
    height: 41px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  @media (max-width: 550px) {
    border: none;
  }
`;

const FindWrapList = styled.ul`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  li {
    position: relative;
    font-size: 1.4rem;
    color: #888;
    display: flex;
    align-items: center;
    span:hover {
      cursor: pointer;
      text-decoration: underline;
      text-underline-offset: 2px;
    }
    a {
      color: #888;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
        text-underline-offset: 2px;
      }
    }
  }
  li::after {
    content: '|';
    padding: 1rem;
    display: inline-block;
  }
  li:last-child::after {
    content: '';
  }
`;

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const countRef = useRef(0); // 요청 여러개 오는거 방지

  const { me, loginLoading, loginDone, loginError } = useSelector((state: RootState) => state.user);

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [showLoginError, setShowLoginError] = useState(false);

  useEffect(() => {
    if (me) {
      router.push('/');
    }
  }, [router, me]);

  useEffect(() => {
    if (loginDone || loginError) {
      countRef.current = 0;
    }
  }, [loginDone, loginError]);

  const onChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!id) {
        return alert('아이디를 입력해주세요');
      }
      if (!password) {
        return alert('비밀번호를 입력해주세요');
      }
      if (countRef.current === 0) {
        countRef.current = 1;
        const data = {
          id,
          password,
        };
        dispatch(login(data));
        setShowLoginError(true);
      }
    },
    [id, password, dispatch],
  );

  if (me) {
    return null;
  }

  return (
    <>
      <LoginLayout>
        <LoginHeader />
        <LoginFormBox>
          <LoginForm onSubmit={onSubmit}>
            <div className='id_password_box'>
              <div className='id_input_box'>
                <span className='icon_id'></span>
                <input type='text' placeholder='아이디' value={id} onChange={onChangeId} />
              </div>
              <div className='password_input_box'>
                <span className='icon_password'></span>
                <input type='password' placeholder='비밀번호' value={password} onChange={onChangePassword} />
              </div>
            </div>
            {showLoginError && (
              <div className='error_message'>
                <span>{loginError}</span>
              </div>
            )}
            <div className='login_keep'>
              <input type='checkbox' />
              <div>로그인 상태 유지</div>
            </div>
            <button className='login_btn'>로그인</button>
          </LoginForm>
          <FindWrapList>
            <li>
              <span>아이디 찾기</span>
            </li>
            <li>
              <span>비밀번호 찾기</span>
            </li>
            <li>
              <Link href='/signup'>회원가입</Link>
            </li>
          </FindWrapList>
        </LoginFormBox>
        {loginLoading && <Loading />}
        <Footer />
      </LoginLayout>
    </>
  );
};

// export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
//   const cookie = req ? req.headers.cookie : '';
//   axios.defaults.headers.Cookie = '';
//   if (req && cookie) {
//     axios.defaults.headers.Cookie = cookie;
//   }
//   await store.dispatch<any>(loadMyInfo());
//   return { props: {} };
// });

export default Login;
