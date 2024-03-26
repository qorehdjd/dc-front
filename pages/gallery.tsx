import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '@/store';
import Header from '@/components/Layout/Header';
import Nav from '@/components/Layout/Nav';
import LatelyVisitList from '@/components/Layout/LatelyVisitList';
import Footer from '@/components/Layout/Footer';
import Aside from '@/components/Layout/Aside';
import { MainBox } from '@/components/Layout';
import GalleryBottomAllSection from '@/components/Gallery/GalleryBottomAllSection';
import GalleryList from '@/components/Gallery/GalleryList';

const GalleryPage = () => {
  const getPostsDone = useSelector((state: RootState) => state.post.getPostsDone);

  useEffect(() => {
    if (getPostsDone) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [getPostsDone]);

  return (
    <>
      <>
        <Header />
        <Nav />
        <LatelyVisitList />
        <MainBox>
          <GalleryList />
          <Aside />
        </MainBox>
        <GalleryBottomAllSection width='' />
        <Footer />
      </>
    </>
  );
};

// export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
//   const cookie = req ? req.headers.cookie : '';
//   axios.defaults.headers.Cookie = '';
//   if (req && cookie) {
//     axios.defaults.headers.Cookie = cookie;
//   }
//   let galleryName;
//   if (req.url) {
//     if (decodeURI(req.url).slice(0, 6) === '/_next') {
//       galleryName = decodeURI(req.url).slice(32, 39);
//     } else {
//       galleryName = decodeURI(req.url).slice(9, 16);
//     }
//   }

//   if (req.url && galleryName) {
//     await store.dispatch<any>(getGallery({ id: galleryName }));
//   }
//   await store.dispatch<any>(loadMyInfo());
//   if (galleryName) {
//     await store.dispatch<any>(getPosts({ galleryName }));
//   }
//   return { props: {} };
// });

export default GalleryPage;
