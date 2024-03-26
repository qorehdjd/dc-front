import React from 'react';

import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import LatelyVisitList from '@/components/Layout/LatelyVisitList';
import Nav from '@/components/Layout/Nav';
import RevisePostForm from '@/components/RevisePostForm';

const Revise = () => {
  return (
    <>
      <div>
        <Header />
        <Nav />
        <LatelyVisitList />
        <RevisePostForm />
        <Footer />
      </div>
    </>
  );
};

export default Revise;
