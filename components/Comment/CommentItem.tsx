import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import moment from 'moment';

import ReplyCommentForm from '../ReplyComment/ReplyCommentForm';
import { RootState } from '@/store';
import ReplyCommentBox from '../ReplyComment/ReplyCommentBox';
import PasswordForm from '../Common/PasswordForm';
import { Comments } from '@/types/post';

export const CommentItemBox = styled.li<{
  replyCommentslength: number;
}>`
  display: flex;
  padding: 1rem 0;
  border-top: 1px solid #e6e6e6;
  border-bottom: ${(prop) => (prop.replyCommentslength > 0 ? 'none' : '1px solid #e6e6e6')};
  .writer {
    width: 130px;
    white-space: nowrap;
    color: #777;
    margin-right: 1rem;
    margin-left: 3px;
    font-weight: 600;
    span {
      cursor: pointer;
    }
  }
  .content {
    flex: 1;
    font-size: 1.3rem;
    margin-right: 1rem;
    cursor: pointer;
  }
  .right_box {
    position: relative;
    margin-right: 1rem;
    white-space: nowrap;

    .date {
      width: 100px;
      font-size: 1.3rem;
      color: #999;
    }
    .delete_btn {
      width: 13px;
      height: 13px;
      color: white;
      border: none;
      background-color: #808080;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin-left: 0.3rem;
      cursor: pointer;
      position: relative;
      top: -1px;
      z-index: 1000;
    }
  }
`;

const CommentItem = ({ comment }: { comment: Comments }) => {
  const addReplyCommentDone = useSelector((state: RootState) => state.post.addReplyCommentDone);
  const me = useSelector((state: RootState) => state.user.me);

  const [showReplyCommentForm, setShowReplyCommentForm] = useState(false);
  const [commentId, setCommentId] = useState('');
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  useEffect(() => {
    if (addReplyCommentDone) {
      setShowReplyCommentForm(false);
    }
  }, [addReplyCommentDone]);

  const onClickComment = useCallback(
    (commentId: string) => () => {
      if (!me) return;
      setShowReplyCommentForm((prev) => !prev);
      setCommentId(commentId);
    },
    [me],
  );

  const onShowPasswordForm = useCallback(() => {
    setShowPasswordForm(true);
  }, []);

  return (
    <>
      <CommentItemBox key={comment._id} replyCommentslength={comment.replyComments.length}>
        <span className='writer'>
          <span>{comment.nickname}</span>
        </span>
        <span className='content' onClick={onClickComment(comment._id)}>
          {comment.content}
        </span>
        <span className='right_box'>
          <span className='date'>{moment(comment.createDate).format('YYYY.MM.DD HH:mm:ss')}</span>
          <button className='delete_btn' onClick={onShowPasswordForm}>
            x
          </button>
          {showPasswordForm && <PasswordForm comment={comment} setShowPasswordForm={setShowPasswordForm} />}
        </span>
      </CommentItemBox>
      {showReplyCommentForm && <ReplyCommentForm commentId={commentId} />}
      <ReplyCommentBox replyComments={comment.replyComments} />
    </>
  );
};

export default CommentItem;
