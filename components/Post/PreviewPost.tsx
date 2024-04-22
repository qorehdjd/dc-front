import React, { useCallback } from 'react';

export interface PreviewPost {
  key: number;
  post: {
    id: number;
    title: string;
    content: string;
  };
}

const PreviewPost = ({ post }: PreviewPost) => {
  const onClickContentList = useCallback(() => {
    alert('흥한 갤러리의 리그오브레전드 갤러리를 이용해주세요');
  }, []);
  return (
    <li>
      <span className='title'>{post.title}</span>
      <span className='content' onClick={onClickContentList}>
        {post.content}
      </span>
    </li>
  );
};

export default React.memo(PreviewPost);
