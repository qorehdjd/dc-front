import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from '@/reducers/post';
import { AppDispatch, RootState } from '@/store';

const PageNationItem = ({ index, inputText, optionName }: { index: number; inputText: string; optionName: string }) => {
  const dispatch = useDispatch<AppDispatch>();
  const liRef = useRef<HTMLLIElement>(null);

  const gallery = useSelector((state: RootState) => state.post.gallery);

  useEffect(() => {
    if (index === 0) {
      liRef.current?.classList.add('active');
    }
  }, []);

  const onClickPage = useCallback(
    (e: React.MouseEvent<HTMLLIElement>) => {
      if (liRef.current?.parentNode) {
        Array.from(liRef.current.parentNode.children).map((node) => {
          if (node.nodeName === 'LI') {
            node.classList.remove('active');
          }
        });
      }
      if (e.currentTarget.textContent) {
        liRef.current?.classList.add('active');
        dispatch(
          getPosts({
            pageNumber: e.currentTarget.textContent,
            galleryName: gallery.name,
            optionName,
            inputText,
          }),
        );
      }
    },
    [dispatch, gallery, optionName, inputText],
  );
  return (
    <li ref={liRef} onClick={onClickPage}>
      {index + 1}
    </li>
  );
};

export default PageNationItem;
