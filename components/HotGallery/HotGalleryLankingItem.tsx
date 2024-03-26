import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { AppDispatch, RootState } from '@/store';
import { getGallery, getPosts } from '@/reducers/post';
import { useSelector } from 'react-redux';

const HotGalleryLankingItem = ({ title, index }: { title: string; index: number }) => {
  const dispatch = useDispatch<AppDispatch>();
  const countRef = useRef(0); // 요청 여러개 오는거 방지

  const { getGalleryDone, getGalleryError } = useSelector((state: RootState) => state.post);

  useEffect(() => {
    if (getGalleryDone || getGalleryError) {
      countRef.current = 0;
    }
  }, [getGalleryDone, getGalleryError]);

  const onClickHotGallery = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const galleryName = e.currentTarget.lastChild?.textContent;
      if (galleryName !== '리그 오브 레전드') {
        return alert('리그오브레전드 갤러리를 이용해주세요');
      }
      if (galleryName) {
        if (countRef.current === 0) {
          countRef.current = 1;
          const data = {
            galleryName,
          };
          dispatch(getGallery({ id: galleryName }));
          dispatch(getPosts(data));
        }
      }
    },
    [dispatch],
  );

  return (
    <li onClick={onClickHotGallery}>
      <span className='rank_num'>{index + 1}</span>
      <span className='rank_text'>{title}</span>
    </li>
  );
};

export default HotGalleryLankingItem;
