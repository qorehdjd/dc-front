import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { deleteComment, deleteReplycomment } from '@/reducers/post';
import { AppDispatch, RootState } from '@/store';
import { Comments, ReplyComments } from '@/types/post';
import { useSelector } from 'react-redux';

const PasswordFormBox = styled.div`
  position: absolute;
  border: 2px solid #29367c;
  display: flex;
  top: -11px;
  right: -5px;
  z-index: 10000;
  input {
    border: none;
    outline: none;
    padding-left: 5px;
  }
  button {
    width: 49px;
    height: 31px;
    background: #3b4890;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
  }
  .cancel {
    width: 30px;
    height: 31px;
    background: #29367c;
    color: #999;
    text-align: center;
    line-height: 27px;
    font-size: 2rem;
    outline: none;
    border: none;
    cursor: pointer;
  }
`;

const PasswordForm = ({
  comment,
  setShowPasswordForm,
  replyComment,
}: {
  comment?: Comments;
  setShowPasswordForm: React.Dispatch<React.SetStateAction<boolean>>;
  replyComment?: ReplyComments;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const countRef = useRef(0);

  const { deleteCommentDone, deleteCommentError, deleteReplyCommentDone, deleteReplyCommentError } = useSelector(
    (state: RootState) => state.post,
  );

  const [password, setPassword] = useState('');

  useEffect(() => {
    // deleteReplyComment랑 분리해야 오작동이 안일어남 ex) deleteReplyCommentError가 true일때 deleteComment가 실행되면 deleteReplyCommentError가 true이므로 실행이된다.
    if (deleteCommentDone || deleteCommentError) {
      countRef.current = 0;
    }
  }, [deleteCommentDone, deleteCommentError]);

  useEffect(() => {
    if (deleteReplyCommentDone || deleteReplyCommentError) {
      countRef.current = 0;
    }
  }, [deleteReplyCommentDone, deleteReplyCommentError]);

  const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const onSubmitPassword = useCallback(() => {
    if (password === '') {
      return alert('비밀번호를 입력해주세요');
    }
    if (countRef.current === 0) {
      countRef.current = 1;
      if (comment) {
        const data = {
          commentId: comment._id,
          password,
        };
        dispatch(deleteComment(data));
        return;
      }
      if (replyComment) {
        const data = {
          replyCommentId: replyComment._id,
          password,
        };
        dispatch(deleteReplycomment(data));
      }
    }
  }, [comment, dispatch, password, replyComment]);

  const onCancel = useCallback(() => {
    setShowPasswordForm(false);
  }, [setShowPasswordForm]);

  return (
    <PasswordFormBox>
      <input type='password' placeholder='비밀번호' value={password} onChange={onChangePassword} />
      <button onClick={onSubmitPassword}>확인</button>
      <button className='cancel' onClick={onCancel}>
        x
      </button>
    </PasswordFormBox>
  );
};

export default PasswordForm;
