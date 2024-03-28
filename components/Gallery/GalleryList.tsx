import React, { useCallback, useEffect, useRef, useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { AiOutlineMessage } from 'react-icons/ai';
import { BiArrowToRight, BiRightArrowAlt } from 'react-icons/bi';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { FaPen } from 'react-icons/fa';

import { getPost } from '@/reducers/post';
import { AppDispatch, RootState } from '@/store';
import PageNationItem from '../PageNationItem';
import SearchInput from '../SearchInput';
import Button from '../Common/Button';

const GalleryListBox = styled.div`
  flex: 2.5;
  .header_title {
    font-size: 2rem;
    font-weight: 600;
    color: #29367c;
  }
  > header {
    display: flex;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 1rem 0;
    border-bottom: 1px solid #29367c;
    > div {
      white-space: nowrap;
    }
    .num {
      flex: 1;
    }
    .title {
      width: 424px;
      height: 16px;
    }
    .writer {
      flex: 3;
    }
    .write_date {
      flex: 1;
    }
    .visit_num {
      flex: 1;
    }
    .rec {
      flex: 1;
    }
  }
`;

const GalleryBtnListTopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #3b4890;
  padding: 1.8rem 0 0.4rem 0;
  .left_btn_box {
    Button {
      margin-right: 0.3rem;
    }
    Button:hover {
      border: 1px solid #3b4890;
    }
  }
  .right_btn_box {
    display: flex;
    align-items: center;
    align-self: flex-end;
    .select_box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 1px solid #ccc;
      width: 50px;
      height: 20px;
      padding: 0 0.6rem;
      cursor: pointer;
    }
    .select_box:hover .page_num {
      text-decoration: underline;
      text-underline-offset: 2px;
    }
    .write_box {
      margin-left: 0.2rem;
      button {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #29367c;
        background-color: white;
        padding: 0 4px;
        svg {
          margin-right: 0.3rem;
        }
      }
    }
  }
`;

const GalleryListWrapper = styled.ul`
  text-align: center;
  font-size: 1.2rem;
  border-bottom: 1px solid #29367c;
  > li {
    display: flex;
    padding: 0.6rem 0;
    border-bottom: 1px solid #eee;
    &:hover {
      background-color: #eee;
    }
    .title {
      text-align: start;
      width: 413px;
      height: 16px;
      cursor: pointer;
      white-space: nowrap;
      margin-left: 1rem;
      overflow: hidden;
      text-overflow: ellipsis;
      svg {
        margin-right: 0.4rem;
      }
    }
    .title:hover span {
      text-decoration: underline;
      text-underline-offset: 2px;
    }
    .writer {
      flex: 3;
      white-space: nowrap;
    }
    .num {
      flex: 1;
    }
    .write_date {
      flex: 1;
    }
    .visit_num {
      flex: 1;
    }
    .rec {
      flex: 1;
    }
  }
`;

const GalleryBtnListBottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  button {
    margin-right: 0.3rem;
  }
`;

const PagenationBottomBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.7rem 0;
  > ul {
    display: flex;
    justify-content: center;
    flex: 1;
    margin-left: 14rem;
    li {
      margin-right: 1rem;
      font-size: 1.3rem;
      font-weight: 600;
    }
    li:hover {
      cursor: pointer;
      text-decoration: underline;
      text-underline-offset: 2px;
    }
    .active {
      color: #ff3333;
      text-decoration: underline;
      text-underline-offset: 2px;
    }
    .paging_btn_box {
      display: flex;
      button {
        display: flex;
        align-items: center;
        border: none;
        background-color: white;
        font-size: 2rem;
        cursor: pointer;
        color: #a6a6a6;
      }
    }
  }
  .page_move_box {
    width: 115px;
    height: 26px;
    background: #f3f3f3;
    border: 1px #e8e8e8 solid;
    border-radius: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    cursor: pointer;
    svg {
      margin-left: 0.5rem;
    }
  }
`;

const GalleryList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const didMount = useRef(false);

  const lastPage = useSelector((state: RootState) => state.post.gallery.lastPage);
  const posts = useSelector((state: RootState) => state.post.gallery.posts);
  const getPostDone = useSelector((state: RootState) => state.post.getPostDone);
  const me = useSelector((state: RootState) => state.user.me);
  const galleryName = useSelector((state: RootState) => state.post.gallery.name);

  const [inputText, setInputText] = useState('');
  const [optionName, setOptionName] = useState('제목');

  useEffect(() => {
    if (didMount.current) {
      if (getPostDone) router.push('/post');
    } else {
      didMount.current = true;
    }
  }, [getPostDone]);

  const onClickPost = useCallback(
    (postId: string) => () => {
      dispatch(getPost(postId));
    },
    [dispatch],
  );

  const onClickWriteBox = useCallback(() => {
    if (!me) {
      return alert('로그인이 필요합니다');
    }
    router.push('/write');
  }, [me, router]);

  return (
    <GalleryListBox>
      <div className='header_title'>{galleryName}</div>
      <GalleryBtnListTopBox>
        <div className='left_btn_box'>
          <Button size='md' backgroundColor='#3b4890' color='#fff'>
            전체글
          </Button>
          <Button size='md' backgroundColor='#fff'>
            개념글
          </Button>
          <Button size='md' backgroundColor='#fff'>
            공지
          </Button>
        </div>
        <div className='right_btn_box'>
          <div className='select_box'>
            <span className='page_num'>50개</span>
            <IoMdArrowDropdown />
          </div>
          <div className='write_box' onClick={onClickWriteBox}>
            <button>
              <FaPen />
              <span>글쓰기</span>
            </button>
          </div>
        </div>
      </GalleryBtnListTopBox>
      <header>
        <div className='num'>번호</div>
        <div className='title'>제목</div>
        <div className='writer'>글쓴이</div>
        <div className='write_date'>작성일</div>
        <div className='visit_num'>조회</div>
        <div className='rec'>추천</div>
      </header>
      <GalleryListWrapper>
        {posts.map((post) => (
          <li key={post._id}>
            <div className='num'>{post.id}</div>
            <div className='title' onClick={onClickPost(post._id)}>
              <AiOutlineMessage />
              <span>{post.title}</span>
            </div>
            <div className='writer'>{post.writer.nickname}</div>
            <div className='write_date'>{moment(post.createDate).format('HH:mm')}</div>
            <div className='visit_num'>{post.visitor}</div>
            <div className='rec'>{post.liker.length}</div>
          </li>
        ))}
      </GalleryListWrapper>
      <GalleryBtnListBottomBox>
        <div className='left_btn_box'>
          <Button size='md' backgroundColor='#3b4890' color='#fff'>
            전체글
          </Button>
          <Button size='md'>개념글</Button>
        </div>
        <div className='write_box' onClick={onClickWriteBox}>
          <Button size='md' border='1px solid #29367c' backgroundColor='#3b4890' color='#fff'>
            글쓰기
          </Button>
        </div>
      </GalleryBtnListBottomBox>
      <PagenationBottomBox>
        <ul>
          {Array(lastPage)
            .fill('')
            .map((_, index) => (
              <PageNationItem key={index} index={index} inputText={inputText} optionName={optionName} />
            ))}
          <div className='paging_btn_box'>
            <button>
              <BiRightArrowAlt />
            </button>
            <button>
              <BiArrowToRight />
            </button>
          </div>
        </ul>
        <div className='page_move_box'>
          <span>페이지 이동</span>
          <BsArrowRightCircleFill />
        </div>
      </PagenationBottomBox>
      <SearchInput
        inputText={inputText}
        setInputText={setInputText}
        optionName={optionName}
        setOptionName={setOptionName}
      />
    </GalleryListBox>
  );
};

export default GalleryList;
