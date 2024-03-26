import React from 'react';
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
`;

const ContentTextList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 1rem 0;
  row-gap: 6px;
  font-size: 1.1rem;
  span {
    margin-right: 0.3rem;
    font-weight: 600;
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
`;

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
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </PostBoxSection>
        <ContentTextList>
          <li>
            <span>[해갤]</span>손흥민 `우리도 거칠게 하자`ㅋㅋㅋㅋㅋ
          </li>
          <li>
            <span>[나갤]</span>이거 제작진이 밑줄도 그어놨음ㅋㅋㅋㅋㅋ
          </li>
          <li>
            <span>[해갤]</span>손흥민 `우리도 거칠게 하자`ㅋㅋㅋㅋㅋ
          </li>
          <li>
            <span>[주갤]</span>이거 제작진이 밑줄도 그어놨음ㅋㅋㅋㅋㅋ
          </li>
          <li>
            <span>[해갤]</span>손흥민 `우리도 거칠게 하자`ㅋㅋㅋㅋㅋ
          </li>
          <li>
            <span>[나갤]</span>이거 제작진이 밑줄도 그어놨음ㅋㅋㅋㅋㅋ
          </li>
          <li>
            <span>[주갤]</span>손흥민 `우리도 거칠게 하자`ㅋㅋㅋㅋㅋ
          </li>
          <li>
            <span>[키갤]</span>이거 제작진이 밑줄도 그어놨음ㅋㅋㅋㅋㅋ
          </li>
          <li>
            <span>[국갤]</span>손흥민 `리도 거칠게 하자`ㅋㅋㅋㅋㅋ
          </li>
          <li>
            <span>[기음]</span>이거 제작진이 밑줄도 그어놨음ㅋㅋㅋㅋㅋ
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
