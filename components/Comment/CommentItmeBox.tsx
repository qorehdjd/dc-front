import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';
import CommentItem from './CommentItem';
import { Comments } from '@/types/post';

const CommentItemBox = ({ pageNum }: { pageNum: number }) => {
  const didMount = useRef(false);
  const didMount2 = useRef(false);

  const comments = useSelector((state: RootState) => state.post.gallery.singlePost?.comments);
  const deleteCommentError = useSelector((state: RootState) => state.post.deleteCommentError);
  const deleteReplyCommentError = useSelector((state: RootState) => state.post.deleteReplyCommentError);

  useEffect(() => {
    if (didMount.current) {
      if (deleteCommentError) {
        alert(deleteCommentError);
      }
    } else {
      didMount.current = true;
    }
  }, [deleteCommentError]);

  useEffect(() => {
    if (didMount2.current) {
      if (deleteReplyCommentError) {
        return alert(deleteReplyCommentError);
      }
    } else {
      didMount2.current = true;
    }
  }, [deleteReplyCommentError]);

  return (
    <>
      {comments?.slice((pageNum - 1) * 3, pageNum * 3).map((comment: Comments) => (
        <CommentItem key={comment._id} comment={comment} />
      ))}
    </>
  );
};

export default CommentItemBox;
