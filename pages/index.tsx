import React, { useCallback } from 'react';
import styled from 'styled-components';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';

import PostCard from '@/components/Post/PostCard';
import Layout from '@/components/Layout';
import HotGalleryLankingList from '@/components/HotGallery/HotGalleryLankingList';
import HotGalleryLankingHeader from '@/components/HotGallery/HotGalleryLankingHeader';
import HotGalleryLightCateList from '@/components/HotGallery/HotGalleryLightCateList';
import PreviewPost from '@/components/Post/PreviewPost';

const PostBoxSection = styled.section`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 3px;
  column-gap: 3px;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const ContentTextList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 1rem 0;
  row-gap: 6px;
  font-size: 1.1rem;
  li {
    .title {
      margin-right: 0.3rem;
      font-weight: 600;
    }
  }
  li .content:hover {
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 2px;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    li {
    }
  }
`;

const HotGalleryRankingBox = styled.section`
  display: flex;
  margin-top: 2rem;
  .left_cate_box {
    margin-right: 2rem;
    flex: 2.5;
    border: 1px #d5d5d5 solid;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    .left_cate_box {
      width: 100%;
    }
  }
`;

const posts = [
  { id: 1, title: '해갤', content: '안녕하세요ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ' },
  { id: 2, title: '주갤', content: '가보즈아!!!!!!!!!!!!!!!!!!!' },
  { id: 3, title: '축구갤', content: '손흥민 골!!!!!!!!!!!!!!!!!!!!' },
  { id: 4, title: '해갤', content: '반가워요!!!~~~~~!!!!!!!!!!!!!' },
  { id: 5, title: '중갤', content: '게임하실분!!!!!!!!!!!!!' },
  { id: 6, title: '방갤', content: '좋은아침입니다!!!!!!!!!!!!1' },
  { id: 7, title: '주갤', content: '요즘 주식시장 어떤가요?!!!!!!!!!!1' },
  { id: 8, title: '구갤', content: '아 졸리다ㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜ' },
  { id: 9, title: '프로그래밍갤', content: '질문 있습니다!!!!!!!!!!!!!!1' },
  { id: 10, title: '주갤', content: '주식 엄청 떨어지네요ㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜ' },
];

const postCards = new Array(6).fill(undefined).map((_, index) => ({
  id: index,
  title: '영수 인스타 스토리 업뎃 ㄷㄷㄷ',
  writer: '블랙핑크',
  time: '08:24',
  src: '/img/postImg.jpg',
}));

const Home = () => {
  return (
    <Layout>
      <section>
        <div className='header_box'>
          <span className='title'>개념글</span>
          <div className='paging_box'>
            <span className='page_num'>1/3</span>
            <div className='btn_box'>
              <button>
                <IoMdArrowDropleft />
              </button>
              <button>
                <IoMdArrowDropright />
              </button>
            </div>
          </div>
        </div>
        <PostBoxSection>
          {postCards.map((postCard) => (
            <PostCard key={postCard.id} postCard={postCard} />
          ))}
        </PostBoxSection>
        <ContentTextList>
          {posts.map((post) => (
            <PreviewPost key={post.id} post={post} />
          ))}
        </ContentTextList>
        <HotGalleryRankingBox>
          <div className='left_cate_box'>
            <HotGalleryLankingHeader />
            <HotGalleryLankingList />
          </div>
          <HotGalleryLightCateList />
        </HotGalleryRankingBox>
      </section>
    </Layout>
  );
};

// export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
//   const cookie = req ? req.headers.cookie : '';
//   axios.defaults.headers.Cookie = '';
//   if (req && cookie) {
//     axios.defaults.headers.Cookie = cookie;
//   }
//   await store.dispatch<any>(loadMyInfo());
//   return { props: {} };
// });

export default Home;
