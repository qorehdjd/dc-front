import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { signup } from '@/reducers/user';
import { AppDispatch, RootState } from '@/store';

type FormData = {
  id: string;
  password: string;
  passwordCheck: string;
  nickname: string;
};

type UserInfo = {
  id: string;
  password: string;
  nickname: string;
};

const SignupLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  header {
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    width: 100%;
    max-width: 500px;
    input {
      width: 100%;
      max-width: 500px;
      height: 50px;
      outline: none;
      padding: 0 1rem;
      font-size: 1.4rem;
      border: 1px solid #dfdfdf;
    }
    .signup_btn {
      width: 100%;
      max-width: 500px;
      height: 50px;
      background: #3b4890;
      border-color: #29367c;
      color: #fff;
      border: none;
      cursor: pointer;
    }
  }
`;

const ErrorMessage = styled.div`
  margin: 0.5rem 0;
  span {
    color: #f20d0d;
    font-size: 1.4rem;
  }
`;

const userId = {
  required: '필수 필드입니다.',
  pattern: {
    value: /^[가-힣A-za-z0-9]{2,6}$/,
    message: '한글(자음,모음 제외), 영문자, 숫자로 이루어진 2~6자를 입력해주세요',
  },
};

const userPassword = {
  required: '비밀번호를 입력해주세요',
  pattern: {
    value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
    message: '영문, 숫자, 특수문자 포함 8 ~ 20자로 입력해주세요',
  },
};

const userNickname = {
  required: '필수 필드입니다.',
  pattern: {
    value: /^[가-힣A-za-z0-9]{2,6}$/,
    message: '한글(자음,모음 제외), 영문자, 숫자로 이루어진 2~6자를 입력해주세요',
  },
};

const Signup = () => {
  const router = useRouter();
  const didMount = useRef(false);
  const didMount2 = useRef(false);
  const countRef = useRef(0); // 요청 여러개 오는거 방지
  const dispatch = useDispatch<AppDispatch>();

  const me = useSelector((state: RootState) => state.user.me);
  const { signupDone, signupError } = useSelector((state: RootState) => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm<FormData>({ mode: 'onChange' });

  useEffect(() => {
    if (me) {
      router.push('/');
    }
  }, [me, router]);

  useEffect(() => {
    if (didMount.current) {
      if (signupDone) {
        alert('회원가입 완료');
        router.push('/');
      }
    } else {
      didMount.current = true;
    }
  }, [signupDone, router]);

  useEffect(() => {
    if (didMount2.current) {
      if (signupError) {
        return alert(signupError);
      }
    } else {
      didMount2.current = true;
    }
  }, [signupError]);

  useEffect(() => {
    if (signupDone || signupError) {
      countRef.current = 0;
    }
  }, [signupDone, signupError]);

  const onSubmit = useCallback(
    ({ id, password, nickname }: UserInfo) => {
      if (countRef.current === 0) {
        countRef.current = 1;
        const data = {
          id,
          password,
          nickname,
        };
        dispatch(signup(data));
        reset();
      }
    },
    [dispatch, reset],
  );

  if (me) {
    return null;
  }

  return (
    <>
      <SignupLayout>
        <header>
          <Link href='/'>
            <Image width={170} height={50} src='/img/dcin_logo.png' alt='로고이미지' />
          </Link>
        </header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type='text' placeholder='아이디' {...register('id', userId)} />
          {errors?.id && (
            <ErrorMessage>
              <span>{errors.id.message}</span>
            </ErrorMessage>
          )}
          <input type='password' placeholder='비밀번호' {...register('password', userPassword)} />
          {errors?.password && (
            <ErrorMessage>
              <span>{errors.password.message}</span>
            </ErrorMessage>
          )}
          <input
            type='password'
            placeholder='비밀번호 재확인'
            {...register('passwordCheck', {
              required: '필수 필드입니다',
              validate: {
                matchPassword: (value) => {
                  const { password } = getValues();
                  return password === value || '비밀번호가 일치하지 않습니다';
                },
              },
            })}
          />
          {errors?.passwordCheck && (
            <ErrorMessage>
              <span>{errors.passwordCheck.message}</span>
            </ErrorMessage>
          )}
          <input type='text' placeholder='닉네임' {...register('nickname', userNickname)} />
          {errors?.nickname && (
            <ErrorMessage>
              <span>{errors.nickname.message}</span>
            </ErrorMessage>
          )}
          <button className='signup_btn' type='submit'>
            회원가입
          </button>
        </form>
      </SignupLayout>
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

export default Signup;
