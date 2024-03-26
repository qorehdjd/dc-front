import React, { useCallback, useEffect, useRef, useState } from 'react';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { MdArrowDropDown } from 'react-icons/md';
import { IoWarningOutline } from 'react-icons/io5';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '@/store';
import { revisePost } from '@/reducers/post';

const RevisePostFormSection = styled.section`
  margin: 0 19rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0 1rem 0;
  h1 {
    font-size: 2.3rem;
    color: #29367c;
  }
  nav {
    display: flex;
    font-size: 1.2rem;
    div {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    div:hover span {
      text-decoration: underline;
      text-underline-offset: 2px;
    }
    .related_gallery {
      svg {
        display: inline;
        font-size: 28px;
        position: relative;
        top: 1px;
      }
    }
    .btn_box {
      button {
        display: flex;
        border: 1px solid #ccc;
        font-size: 20px;
        background-color: white;
        cursor: pointer;
      }
    }
    div::after {
      content: '|';
      margin: 0 10px;
      font-size: 14px;
      color: #ccc;
    }
    div.btn_box::after {
      content: none;
    }
  }
`;

const Article = styled.article`
  border: 2px solid #d5d5d5;
  border-top: 2px solid #29367c;
  padding: 7rem 5rem;
  display: flex;
  flex-direction: column;
  .user_name_box {
    display: flex;
    .user_name {
      border: 1px solid black;
      min-width: 100px;
      padding: 5px 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.2rem;
      color: #29367c;
      font-weight: 600;
      margin-right: 1rem;
      svg {
        font-size: 1.5rem;
        color: gray;
        cursor: pointer;
      }
    }
    > input {
      min-width: 200px;
      padding: 0.5rem 1rem;
    }
  }
  .title_input {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
  }
  .info_box {
    margin-top: 2rem;
    font-size: 1.2rem;
    color: #666;
    p {
      display: flex;
      align-items: center;
      margin-bottom: 0.4rem;
      svg {
        margin-right: 0.3rem;
      }
    }
    p:last-child {
      .layer_show:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
  textarea {
    resize: none;
    outline: none;
    padding: 1rem;
    margin-top: 1rem;
  }
  .write_type_box {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    cursor: pointer;
    .left_box {
      font-size: 1.1rem;
      .age {
        display: inline-block;
        color: #555;
        border: 1px solid #555;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        text-align: center;
        margin-right: 0.2rem;
      }
      .detail {
        display: inline-block;
        width: 16px;
        height: 16px;
        border: 1px solid #555;
        border-radius: 50%;
        text-align: center;
        margin-left: 0.2rem;
        background-color: #555;
        color: white;
      }
    }
    .right_box {
      font-size: 1.2rem;
      color: #555;
      cursor: pointer;
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.3rem;
        font-size: 2rem;
      }
      span {
        margin-right: 0.3rem;
        font-weight: 600;
      }
      b {
        text-decoration: underline;
        text-underline-offset: 2px;
      }
    }
  }
  .btn_box {
    display: flex;
    justify-content: flex-end;
    margin-top: 3rem;
    button {
      width: 80px;
      height: 30px;
      padding: 2rem 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      color: white;
      border-radius: 2px;
      cursor: pointer;
      font-weight: 600;
      font-size: 1.4rem;
    }
    button.cancle {
      background: #666;
      border-color: #444;
      margin-right: 1rem;
    }
    button.submit {
      background: #3b4890;
      border-color: #29367c;
    }
  }
`;

const RevisePostForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const didMount = useRef(false);
  const countRef = useRef(0); // 요청 여러개 오는거 방지

  const gallery = useSelector((state: RootState) => state.post.gallery);
  const post = useSelector((state: RootState) => state.post.gallery.singlePost);
  const me = useSelector((state: RootState) => state.user.me);
  const { revisePostDone, revisePostError } = useSelector((state: RootState) => state.post);

  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.content);

  useEffect(() => {
    if (didMount.current) {
      if (revisePostDone) {
        router.push('/post');
      }
    } else {
      didMount.current = true;
    }
  }, [revisePostDone, router]);

  useEffect(() => {
    if (revisePostDone || revisePostError) {
      countRef.current = 0;
    }
  }, [revisePostDone, revisePostError]);

  const onChangeTitle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const onChangeContent = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }, []);

  const onCancel = useCallback(() => {
    if (confirm('게시글 작성을 취소하시겠습니까?')) {
      router.push('/post');
    }
  }, [router]);

  const onSubmit = useCallback(() => {
    if (title && content && post?._id) {
      if (countRef.current === 0) {
        countRef.current = 1;
        const data = {
          title,
          content,
          postId: post?._id,
        };
        dispatch(revisePost(data));
      }
    }
  }, [title, content, dispatch, post?._id]);

  return (
    <RevisePostFormSection>
      <Header>
        <h1>{gallery.name}</h1>
        <nav>
          <div className='related_gallery'>
            <span>연관 갤러리(7/3)</span>
            <MdArrowDropDown />
          </div>
          <div>
            <span>갤주소 복사</span>
          </div>
          <div>
            <span>이용안내</span>
          </div>
          <div className='btn_box'>
            <button>
              <MdArrowDropDown />
            </button>
          </div>
        </nav>
      </Header>
      <Article>
        <div className='user_name_box'>
          <div className='user_name'>
            <span>아이디: {me?.nickname}</span>
          </div>
        </div>
        <input
          className='title_input'
          type='text'
          placeholder='제목을 입력해 주세요.'
          value={title}
          onChange={onChangeTitle}
        />
        <div className='info_box'>
          <p>
            <IoWarningOutline />
            <span>쉬운 비밀번호를 입력하면 타인의 수정, 삭제가 쉽습니다</span>
          </p>
          <p>
            <IoWarningOutline />
            <span>
              {' '}
              음란물, 차별, 비하, 혐오 및 초상권, 저작권 침해 게시물은 민, 형사의 책임을 질 수 있습니다. {''}
              <span className='layer_show'>[저작권법 안내]</span> <span className='layer_show'>[게시물 활용 안내]</span>
            </span>
          </p>
        </div>
        <textarea style={{ height: '400px' }} value={content} onChange={onChangeContent}></textarea>
        <div className='write_type_box'>
          <div className='left_box'>
            <span className='age'>19</span>
            <span>성인 게시물</span>
            <span className='detail'>?</span>
          </div>
          <div className='right_box'>
            <IoIosCheckmarkCircle />
            <span>NFT 간편 발행</span>
            <b>편집</b>
          </div>
        </div>
        <div className='btn_box'>
          <button className='cancle' onClick={onCancel}>
            취소
          </button>
          <button className='submit' onClick={onSubmit}>
            등록
          </button>
        </div>
      </Article>
    </RevisePostFormSection>
  );
};

export default RevisePostForm;
