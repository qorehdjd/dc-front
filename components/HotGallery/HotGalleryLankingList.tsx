import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import HotGalleryLankingItem from './HotGalleryLankingItem';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const HotGalleryLankingListLayout = styled.div`
  display: flex;
  padding: 2rem 1rem;
  ol {
    margin-right: 1.6rem;
    li {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      white-space: nowrap;
      cursor: pointer;
      color: #000000;
      text-decoration: none;
      &:hover .rank_text {
        text-decoration: underline;
        text-underline-offset: 2px;
      }
      .rank_num {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 12px;
        height: 12px;
        margin-right: 0.4rem;
        border: 1px solid #d31902;
        background: #f03c23;
        color: white;
        padding: 0.6rem;
      }
      .rank_text {
        font-size: 1.2rem;
      }
    }
  }
`;

const data = [
  '리그 오브 레전드',
  '국내야구',
  '만화',
  '남자 연예인',
  '인터넷방송',
  '해외축구',
  '기타 국내 드라마',
  '메이플스토리',
  '해외야구',
  '우울증',
  'LG 트윈스',
  '대출',
  '걸스플래닛 999',
  '로스트아크',
  '롯데자이언츠',
  '아이돌마스터',
  '자이언트',
  '토토',
  '한화 이글스',
  '역학',
];

const HotGalleryLankingList = () => {
  const router = useRouter();
  const didMount = useRef(false);

  const getGalleryDone = useSelector((state: RootState) => state.post.getGalleryDone);
  const getPostsDone = useSelector((state: RootState) => state.post.getPostsDone);

  useEffect(() => {
    if (didMount.current) {
      if (getGalleryDone && getPostsDone) {
        router.push('/gallery');
      }
    } else {
      didMount.current = true;
    }
  }, [getGalleryDone, getPostsDone]);

  return (
    <HotGalleryLankingListLayout>
      <ol>
        {data.slice(0, 5).map((title, index) => (
          <HotGalleryLankingItem key={title} title={title} index={index} />
        ))}
      </ol>
      <ol>
        {data.slice(5, 10).map((title, index) => (
          <HotGalleryLankingItem key={title} title={title} index={index + 5} />
        ))}
      </ol>
      <ol>
        {data.slice(10, 15).map((title, index) => (
          <HotGalleryLankingItem key={title} title={title} index={index + 10} />
        ))}
      </ol>
      <ol>
        {data.slice(15, 20).map((title, index) => (
          <HotGalleryLankingItem key={title} title={title} index={index + 15} />
        ))}
      </ol>
    </HotGalleryLankingListLayout>
  );
};

export default HotGalleryLankingList;
