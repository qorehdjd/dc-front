import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const PostBox = styled.article`
  border-bottom: 1px #e4e4e4 solid;
  display: flex;
  .right_text_box {
    margin-left: 1.5rem;
    margin-top: 2rem;
    .title {
      margin-bottom: 0.3rem;
      font-weight: 600;
    }
  }
`;

const PostCard = () => {
  return (
    <PostBox>
      <div>
        <Image src='/img/postImg.jpg' width={115} height={67} alt='포스트 이미지' />
      </div>
      <div className='right_text_box'>
        <div className='title'>영수 인스타 스토리 업뎃 ㄷㄷㄷ</div>
        <div>블랙핑크 | 08:24</div>
      </div>
    </PostBox>
  );
};

export default PostCard;
