import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Header from '@/components/Layout/Header';
import Nav from '@/components/Layout/Nav';
import Footer from '@/components/Layout/Footer';
import LatelyVisitList from '@/components/Layout/LatelyVisitList';
import Aside from '@/components/Layout/Aside';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul {
    list-style: none;
  }
  ol {
    list-style: none;
  }
  html {
    font-size: 10px;
  }
`;

const MainPageLayout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const MainBox = styled.main`
  display: flex;
  margin: 0 20rem;
  justify-content: center;
  margin-top: 2rem;
  > section {
    flex: 2.5;
    min-width: 600px;
    .header_box {
      display: flex;
      justify-content: space-between;
      border-bottom: 3px solid #3b4890;
      padding-bottom: 0.8rem;
      .title {
        color: #29367c;
        font-size: 1.4rem;
        font-weight: 600;
      }
      .paging_box {
        display: flex;
        margin-left: 2rem;
        align-items: center;
        .page_num {
          font-size: 1.2rem;
        }
        .btn_box {
          margin-left: 0.7rem;
          button {
            background-color: #3b4890;
            font-size: 1.8rem;
            color: white;
            border: none;
            line-height: 1rem;
            padding: 0.3rem;
            cursor: pointer;
          }
        }
      }
    }
  }
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <GlobalStyle />
      <MainPageLayout>
        <Header />
        <Nav />
        <LatelyVisitList />
        <MainBox>
          {children}
          <Aside />
        </MainBox>
        <Footer />
      </MainPageLayout>
    </>
  );
};

export default Layout;
