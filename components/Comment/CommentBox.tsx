import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import { RootState } from '@/store';

const CommentLayout = styled.div`
  margin-top: 2rem;
  > header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.5rem;
    .comment_info {
      font-size: 1.3rem;
      font-weight: 600;
      white-space: nowrap;
      margin-right: 2rem;
      .count {
        margin-left: 0.6rem;
        color: #d31900;
        position: relative;
        top: 0.5px;
      }
      button {
        margin-left: 1rem;
        border: 1px solid #ccc;
        background-color: white;
        cursor: pointer;
        padding: 0.3rem 0.5rem;
        font-size: 1rem;
        display: inline-flex;
        align-items: center;
      }
      svg {
        margin-left: 0.3rem;
        font-size: 1.5rem;
      }
    }
    .comment_nav_btn_box {
      white-space: nowrap;
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
  }
`;

const CommentBox = () => {
  const comments = useSelector((state: RootState) => state.post.gallery.singlePost?.comments);
  const me = useSelector((state: RootState) => state.user.me);

  const [showCommentList, setShowCommentList] = useState(true);

  const commentLength = comments?.reduce((prev, current) => {
    return current.replyComments.length + prev;
  }, comments.length);

  const onScollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const onShowCommentList = useCallback(() => {
    setShowCommentList((prev) => !prev);
  }, []);

  return (
    <CommentLayout>
      <header>
        <div className='comment_info'>
          <span className='title'>전체 댓글</span>
          <span className='count'>{commentLength}</span>개
          <button>
            <span>등록순</span>
            <TiArrowSortedDown />
          </button>
        </div>
        <div className='comment_nav_btn_box'>
          <button>
            <span onClick={onScollTop}>본문 보기</span>
          </button>
          <button>
            {showCommentList ? (
              <span onClick={onShowCommentList}>댓글닫기</span>
            ) : (
              <span onClick={onShowCommentList}>댓글열기</span>
            )}
            <TiArrowSortedUp />
          </button>
          <button>
            <span>새로고침</span>
          </button>
        </div>
      </header>
      {showCommentList && <CommentList onShowCommentList={onShowCommentList}></CommentList>}
      {me && <CommentForm />}
    </CommentLayout>
  );
};

export default CommentBox;
