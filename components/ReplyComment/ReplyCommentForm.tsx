import React, { useCallback, useEffect, useRef, useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { addReplyComment } from '@/reducers/post';
import { AppDispatch, RootState } from '@/store';
import { CommentFormBox } from '../Comment/CommentForm';

const ReplyCommentFormBox = styled(CommentFormBox)`
  border: 1px solid #ddd;
  padding: 0 1rem;
  margin-left: 5rem;
  margin-top: 0;
  margin-bottom: 1rem;
  .comment_text_box {
    .btn_box {
      .register {
        margin-right: 0;
      }
    }
  }
`;

const ReplyCommentForm = ({ commentId }: { commentId: string }) => {
  const dispatch = useDispatch<AppDispatch>();
  const countRef = useRef(0); // 요청 여러개 오는거 방지

  const { addReplyCommentDone, addReplyCommentError } = useSelector((state: RootState) => state.post);
  const nickname = useSelector((state: RootState) => state.user.me?.nickname);

  const [password, setPassword] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (addReplyCommentDone) {
      setContent('');
    }
  }, [addReplyCommentDone]);

  useEffect(() => {
    if (addReplyCommentDone || addReplyCommentError) {
      countRef.current = 0;
    }
  }, [addReplyCommentDone, addReplyCommentError]);

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
    if (nickname) {
      if (countRef.current === 0) {
        countRef.current = 1;
        dispatch(addReplyComment({ content, password, commentId, nickname }));
      }
    }
  }, [content, password, dispatch, commentId, nickname]);

  return (
    <ReplyCommentFormBox>
      <div className='user_name_box'>
        <div className='user_name'>
          <span>{nickname}</span>
          <MdOutlineCancel />
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
    </ReplyCommentFormBox>
  );
};

export default ReplyCommentForm;
