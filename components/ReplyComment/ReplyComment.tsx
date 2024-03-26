import React, { ReactNode, useCallback, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { CommentItemBox } from '../Comment/CommentItem';
import PasswordForm from '../Common/PasswordForm';
import { ReplyComments } from '@/types/post';

const ReplyCommentItemContainer = styled(
  (props: { children: ReactNode; index: number; replyCommentslength: number }) => <CommentItemBox {...props} />,
)`
  border-right: 1px solid #e6e6e6;
  border-left: 1px solid #e6e6e6;
  &&& {
    //우선 순위 !important 느낌
    border-top: ${(props) => (props.index === 0 ? '1px solid #e6e6e6' : 'none')};
  }
  margin-left: 3rem;
`;

const ReplyComment = ({ replyComment, index }: { replyComment: ReplyComments; index: number }) => {
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const onShowPasswordForm = useCallback(() => {
    setShowPasswordForm(true);
  }, []);

  return (
    <>
      <ReplyCommentItemContainer replyCommentslength={0} key={replyComment._id} index={index}>
        <span className='writer'>
          <span>{replyComment.nickname}</span>
        </span>
        <span className='content'>{replyComment.content}</span>
        <span className='right_box'>
          <span className='date'>{moment(replyComment.createDate).format('YYYY.MM.DD HH:mm:ss')}</span>
          <button className='delete_btn' onClick={onShowPasswordForm}>
            x
          </button>
          {showPasswordForm && <PasswordForm replyComment={replyComment} setShowPasswordForm={setShowPasswordForm} />}
        </span>
      </ReplyCommentItemContainer>
    </>
  );
};

export default ReplyComment;
