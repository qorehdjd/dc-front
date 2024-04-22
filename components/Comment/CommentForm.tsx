import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { addComment } from '@/reducers/post';
import { AppDispatch, RootState } from '@/store';

export const CommentFormBox = styled.div`
  border-top: 2px solid #3b4890;
  border-bottom: 2px solid #3b4890;
  display: flex;
  .user_name_box {
    margin-top: 1.2rem;
    .user_name {
      border: 1px solid #cecdce;
      width: 140px;
      height: 30px;
      margin-bottom: 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0.8rem;
      font-size: 1.2rem;
      span {
        color: #29367c;
      }
    }
    input {
      border: 1px solid #cecdce;
      width: 140px;
      height: 30px;
      font-size: 1.2rem;
      padding: 0 0.8rem;
      &::placeholder {
        color: #999;
      }
    }
  }
  .comment_text_box {
    flex: 1;
    margin-left: 1rem;
    margin-top: 1.2rem;
    textarea {
      height: 100px;
      width: 100%;
      border: 1px solid #cecdce;
      resize: none;
      padding: 1.5rem;
      font-size: 1.1rem;
      &::placeholder {
        color: #999;
      }
    }
    .btn_box {
      display: flex;
      justify-content: flex-end;
      margin: 0.6rem 0;
      .register {
        background: #3b4890;
        border-color: #29367c;
        color: #fff;
        width: 85px;
        height: 31px;
        border: none;
        cursor: pointer;
        border-radius: 2px;
        margin-right: 0.8rem;
      }
    }
  }
`;

const CommentForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const countRef = useRef(0); // 요청 여러개 오는거 방지

  const addCommentDone = useSelector((state: RootState) => state.post.addCommentDone);
  const addCommentError = useSelector((state: RootState) => state.post.addCommentError);
  const postId = useSelector((state: RootState) => state.post.gallery.singlePost?._id);
  const me = useSelector((state: RootState) => state.user.me);

  const [password, setPassword] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (addCommentDone) {
      setContent('');
    }
  }, [addCommentDone]);

  useEffect(() => {
    if (addCommentDone || addCommentError) {
      countRef.current = 0;
    }
  }, [addCommentDone, addCommentError]);

  const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const onChangeContent = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }, []);

  const onSubmit = useCallback(() => {
    if (!password) {
      return alert('비밀번호를 입력하세요');
    }
    if (password[0] === ' ' || password[password.length - 1] === ' ') {
      return alert('비밀번호 항목은 처음과 마지막에 공백을 사용할 수 없습니다');
    }
    if (content === '') {
      return alert('내용을 입력해주세요');
    }
    if (postId) {
      if (countRef.current === 0) {
        countRef.current = 1;
        dispatch(addComment({ content, password, postId }));
        setPassword('');
      }
    }
  }, [content, password, dispatch, postId]);

  return (
    <CommentFormBox>
      <div className='user_name_box'>
        <div className='user_name'>
          <span>{me?.nickname}</span>
        </div>
        <input type='password' placeholder='비밀번호' value={password} onChange={onChangePassword} />
      </div>
      <div className='comment_text_box'>
        <textarea
          rows={5}
          placeholder='타인의 권리를 침해하거나 명예를 훼손하는 댓글은 운영원칙 및 관련 법률에 제재를 받을 수 있습니다.'
          value={content}
          onChange={onChangeContent}
        ></textarea>
        <div className='btn_box'>
          <button className='register' onClick={onSubmit}>
            등록
          </button>
        </div>
      </div>
    </CommentFormBox>
  );
};

export default CommentForm;
