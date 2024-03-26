import React from 'react';
import styled from 'styled-components';
import { MdOutlineArrowRight, MdOutlineArrowLeft } from 'react-icons/md';

import PostHeader from '../Post/PostHeader';
import GalleryRecommend from './GalleryRecommend';
import GalleryList from './GalleryList';
import GalleryBottomAllSection from './GalleryBottomAllSection';

const SectionLayout = styled.section``;

const PagenationBox = styled.div`
  .pagenation_btn_layout {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .page_num {
      font-size: 1.1rem;
    }
    .pagenation_btn_box {
      display: flex;
      margin-left: 0.8rem;
      button {
        background-color: #29367c;
        color: white;
        font-size: 2rem;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
      }
    }
  }
`;

const Gallery = () => {
  return (
    <SectionLayout>
      <PostHeader />
      <PagenationBox>
        <div className='pagenation_btn_layout'>
          <span className='page_num'>1/3</span>
          <div className='pagenation_btn_box'>
            <button>
              <MdOutlineArrowLeft />
            </button>
            <button>
              <MdOutlineArrowRight />
            </button>
          </div>
        </div>
        <GalleryRecommend />
      </PagenationBox>
      <GalleryList />
      <GalleryBottomAllSection width='' />
    </SectionLayout>
  );
};

export default Gallery;
