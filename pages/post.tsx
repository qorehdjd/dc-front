import React from 'react';
import styled from 'styled-components';

import Header from '@/components/Layout/Header';
import Nav from '@/components/Layout/Nav';
import LatelyVisitList from '@/components/Layout/LatelyVisitList';
import Aside from '@/components/Layout/Aside';
import Post from '@/components/Post/Post';
import PostHeader from '@/components/Post/PostHeader';
import Footer from '@/components/Layout/Footer';
import GalleryBottomAllSection from '@/components/Gallery/GalleryBottomAllSection';
import GalleryList from '@/components/Gallery/GalleryList';

const PostLayout = styled.div`
  margin: 0 21rem;
  @media (max-width: 1050px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const GalleryListBox = styled.article`
  display: flex;
`;

const PostPage = () => {
  return (
    <>
      <Header />
      <Nav />
      <LatelyVisitList />
      <PostLayout>
        <PostHeader />
        <Post />
        <GalleryListBox>
          <GalleryList />
          <Aside />
        </GalleryListBox>
        <GalleryBottomAllSection width='100%' />
        <Footer />
      </PostLayout>
    </>
  );
};

export default PostPage;
