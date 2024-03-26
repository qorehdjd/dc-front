import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import Header from '@/components/Layout/Header';
import Nav from '@/components/Layout/Nav';
import LatelyVisitList from '@/components/Layout/LatelyVisitList';
import Footer from '@/components/Layout/Footer';
import PostForm from '@/components/Post/PostForm';
import { RootState } from '@/store';

const Write = () => {
  const router = useRouter();
  const didMount = useRef(false);

  const addPostDone = useSelector((state: RootState) => state.post.addPostDone);

  useEffect(() => {
    if (didMount.current) {
      if (addPostDone) {
        alert('게시글 등록완료!');
        router.replace('/gallery');
      }
    } else {
      didMount.current = true;
    }
  }, [addPostDone, router]);

  return (
    <>
      <div>
        <Header />
        <Nav />
        <LatelyVisitList />
        <PostForm />
        <Footer />
      </div>
    </>
  );
};

export default Write;
