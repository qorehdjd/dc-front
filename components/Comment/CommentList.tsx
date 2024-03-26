import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { TiArrowSortedUp } from 'react-icons/ti';

import CommentItem from './CommentItmeBox';
import { RootState } from '@/store';

const CommentListBox = styled.ul`
  border-top: 2px solid #3b4890;
`;
const CommentPagenationBox = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 2rem;
  .page {
    flex: 1;
    text-align: center;
    font-size: 1.4rem;
    font-weight: 600;
    margin-left: 15rem;
    span {
      margin-right: 1rem;
    }
    .page_light {
      color: #d31900;
      text-decoration: underline;
      text-underline-offset: 2px;
    }
    span:hover {
      cursor: pointer;
      text-decoration: underline;
      text-underline-offset: 2px;
      color: #d31900;
    }
  }
  .comment_nav_btn_box {
    button {
      background-color: white;
      border: none;
      font-weight: 600;
      font-size: 1.3rem;
    }
    button::after {
      content: '';
      display: inline-block;
      width: 1px;
      height: 12px;
      margin: 0 10px 0 9px;
      background: #ccc;
      vertical-align: -1px;
    }
    button:last-child::after {
      content: none;
    }
    button span:hover {
      text-decoration: underline;
      text-underline-offset: 2px;
      cursor: pointer;
    }
  }
`;

const CommentList = ({ onShowCommentList }: { onShowCommentList: () => void }) => {
  const comments = useSelector((state: RootState) => state.post.gallery.singlePost?.comments);

  const [pageNum, setPageNum] = useState(1);

  const onClickPageNum = useCallback((e: React.MouseEvent<HTMLSpanElement>) => {
    if (e.currentTarget.parentNode?.children) {
      Array.from(e.currentTarget.parentNode?.children).map((span) => {
        span.classList.remove('page_light');
      });
    }
    e.currentTarget.classList.add('page_light');
    setPageNum(Number(e.currentTarget.textContent));
  }, []);

  const onScollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <CommentListBox>
      <CommentItem pageNum={pageNum} />
      <CommentPagenationBox>
        <div className='page'>
          <>
            {comments &&
              Array(Math.ceil(comments?.length / 3))
                .fill(undefined)
                .map((_, index) => (
                  <span className={index === 0 ? 'page_light' : ''} key={index} onClick={onClickPageNum}>
                    {index + 1}
                  </span>
                ))}
          </>
        </div>
        <div className='comment_nav_btn_box'>
          <button>
            <span onClick={onScollTop}>본문 보기</span>
          </button>
          <button>
            <span onClick={onShowCommentList}>댓글닫기</span>
            <TiArrowSortedUp />
          </button>
          <button>
            <span>새로고침</span>
          </button>
        </div>
      </CommentPagenationBox>
    </CommentListBox>
  );
};

export default CommentList;
