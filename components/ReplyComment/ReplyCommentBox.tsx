import React from 'react';

import ReplyComment from './ReplyComment';
import { ReplyComments } from '@/types/post';

const ReplyCommentBox = ({ replyComments }: { replyComments: ReplyComments[] }) => {
  if (replyComments.length === 0) {
    return null;
  }

  return (
    <div style={{ marginBottom: '1rem' }}>
      {replyComments.map((replyComment, i) => (
        <ReplyComment key={replyComment._id} replyComment={replyComment} index={i} />
      ))}
    </div>
  );
};

export default ReplyCommentBox;
