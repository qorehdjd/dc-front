import GalleryBottomAllSection from '@/components/Gallery/GalleryBottomAllSection';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import LatelyVisitList from '@/components/Layout/LatelyVisitList';
import Nav from '@/components/Layout/Nav';
import { comparePassword, deletePost } from '@/reducers/post';
import { AppDispatch, RootState } from '@/store';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul {
    list-style: none;
  }
  ol {
    list-style: none;
  }
  html {
    font-size: 10px;
  }
`;

const ComparePasswordBox = styled.div`
  border: 3px solid #29367c;
  margin: 10rem 3rem;
  width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 50px;
  .title {
    font-size: 1.4rem;
    color: #29367c;
    font-weight: 600;
  }
  input {
    height: 35px;
    padding-left: 10px;
    background: #f3f3f3;
    border: 1px solid #cecdce;
  }
  button {
    height: 31px;
    width: 85px;
    cursor: pointer;
  }
  .cancel-btn {
    background: #666;
    color: #fff;
    border: none;
    margin-right: 7px;
  }
  .confirm-btn {
    background: #3b4890;
    color: #fff;
    border: none;
  }
`;

const ComparePasswordPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { path } = router.query;
  const didMount = useRef(false);
  const didMount2 = useRef(false);
  const countRef = useRef(0); // 요청 여러개 오는거 방지

  const postId = useSelector((state: RootState) => state.post.gallery.singlePost?._id);
  const { comparePasswordDone, comparePasswordError, deletePostDone, deletePostError } = useSelector(
    (state: RootState) => state.post,
  );

  const [password, setPassword] = useState('');

  useEffect(() => {
    if (didMount.current) {
      if (deletePostDone && path === 'delete') {
        alert('게시글 삭제 완료');
        router.push('/gallery');
        return;
      }

      if (comparePasswordDone && path === 'revise') {
        if (path === 'revise') {
          router.push('/revise');
          return;
        }
      }
      if (comparePasswordError) {
        alert('비밀번호가 일치하지 않습니다');
      }
    } else {
      didMount.current = true;
    }
  }, [path, router, comparePasswordDone, comparePasswordError, deletePostDone, postId]);

  useEffect(() => {
    if (comparePasswordDone || comparePasswordError) {
      countRef.current = 0;
    }
  }, [comparePasswordDone, comparePasswordError]);

  useEffect(() => {
    if (deletePostDone || deletePostError) {
      countRef.current = 0;
    }
  }, [deletePostDone, deletePostError]);

  useEffect(() => {
    if (didMount2.current) {
      if (deletePostError) {
        return alert(deletePostError);
      }
    } else {
      didMount2.current = true;
    }
  }, [deletePostError]);

  const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const onSubmit = useCallback(() => {
    if (countRef.current === 0) {
      countRef.current = 1;
      if (path === 'delete') {
        if (confirm('정말로 삭제하시겠습니까?')) {
          if (postId) {
            const data = {
              postId,
              password,
            };
            dispatch(deletePost(data));
          }
        } else {
          countRef.current = 0;
          alert('게시글 삭제를 취소하셨습니다');
        }
        return;
      }

      if (postId) {
        const data = {
          postId,
          password,
        };
        dispatch(comparePassword(data));
      }
    }
  }, [postId, password, dispatch, path]);

  const onCancel = useCallback(() => {
    router.push('/post');
  }, [router]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Nav />
      <LatelyVisitList />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ComparePasswordBox>
          <div className='title'>비밀번호를 입력하세요.</div>
          <input type='password' value={password} onChange={onChangePassword} />
          <div className='btn-box'>
            <button className='cancel-btn' onClick={onCancel}>
              취소
            </button>
            <button className='confirm-btn' onClick={onSubmit}>
              확인
            </button>
          </div>
        </ComparePasswordBox>
      </div>
      <GalleryBottomAllSection width='100%' />
      <Footer />
    </>
  );
};

export default ComparePasswordPage;
