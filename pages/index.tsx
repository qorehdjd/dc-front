import React, { useCallback } from 'react';
import styled from 'styled-components';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';

import PostCard from '@/components/Post/PostCard';
import Layout from '@/components/Layout';
import HotGalleryLankingList from '@/components/HotGallery/HotGalleryLankingList';
import HotGalleryLankingHeader from '@/components/HotGallery/HotGalleryLankingHeader';
import HotGalleryLightCateList from '@/components/HotGallery/HotGalleryLightCateList';

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

const Home = () => {
  const onClickContentList = useCallback(() => {
    alert('흥한 갤러리의 리그오브레전드 갤러리를 이용해주세요');
  }, []);

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
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </PostBoxSection>
        <ContentTextList>
          <li>
            <span className='title'>[해갤]</span>
            <span className='content' onClick={onClickContentList}>
              손흥민 `우리도 거칠게 하자`ㅋㅋㅋㅋㅋ
            </span>
          </li>
          <li>
            <span className='title'>[나갤]</span>
            <span className='content' onClick={onClickContentList}>
              이거 제작진이 밑줄도 그어놨음ㅋㅋㅋㅋㅋ
            </span>
          </li>
          <li>
            <span className='title'>[해갤]</span>
            <span className='content' onClick={onClickContentList}>
              손흥민 `우리도 거칠게 하자`ㅋㅋㅋㅋㅋ
            </span>
          </li>
          <li>
            <span className='title'>[주갤]</span>
            <span className='content' onClick={onClickContentList}>
              이거 제작진이 밑줄도 그어놨음ㅋㅋㅋㅋㅋ
            </span>
          </li>
          <li>
            <span className='title'>[해갤]</span>
            <span className='content' onClick={onClickContentList}>
              손흥민 `우리도 거칠게 하자`ㅋㅋㅋㅋㅋ
            </span>
          </li>
          <li>
            <span className='title'>[나갤]</span>
            <span className='content' onClick={onClickContentList}>
              손흥민 `우리도 거칠게 하자`ㅋㅋㅋㅋㅋ
            </span>
          </li>
          <li>
            <span className='title'>[주갤]</span>
            <span className='content' onClick={onClickContentList}>
              손흥민 `우리도 거칠게 하자`ㅋㅋㅋㅋㅋ
            </span>
          </li>
          <li>
            <span className='title'>[키갤]</span>
            <span className='content' onClick={onClickContentList}>
              이거 제작진이 밑줄도 그어놨음ㅋㅋㅋㅋㅋ
            </span>
          </li>
          <li>
            <span className='title'>[국갤]</span>
            <span className='content' onClick={onClickContentList}>
              손흥민 우리도 거칠게 하자ㅋㅋㅋㅋㅋ
            </span>
          </li>
          <li>
            <span className='title'>[기음]</span>
            <span className='content' onClick={onClickContentList}>
              이거 제작진이 밑줄도 그어놨음ㅋㅋㅋㅋㅋ
            </span>
          </li>
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
