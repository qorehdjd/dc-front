import Image from 'next/image';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import CommentBox from '../Comment/CommentBox';
import { AppDispatch, RootState } from '@/store';
import { addDisLike, addLike } from '@/reducers/post';
import Button from '../Common/Button';

const PostSection = styled.section`
  > header {
    padding: 2rem 0 1rem 0;
    border-bottom: 1px solid #eee;
    .title {
      font-size: 1.5rem;
      font-weight: 600;
      word-wrap: break-word;
    }
    .post_info {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
      font-size: 1.3rem;
      .left_info {
        display: flex;
        .user_info {
          .writer {
            margin-right: 0.2rem;
          }
        }
        .user_info::after {
          content: '|';
          color: #ccc;
          font-size: 12px;
          line-height: 12px;
          padding: 0 8px;
          vertical-align: 1px;
        }
      }
      .right_info {
        display: flex;
        > div::after {
          content: '|';
          color: #ccc;
          font-size: 12px;
          line-height: 12px;
          padding: 0 8px;
          vertical-align: 1px;
        }
        .com_count {
          padding: 0 10px;
          background: #eee;
          border: 1px #ccc solid;
          border-radius: 10px;
          display: flex;
        }
      }
    }
  }
  .post_view_content {
    display: flex;
    justify-content: space-between;
    padding-top: 4rem;
    .writing_view_box {
      flex: 1;
      margin-right: 10rem;
      font-size: 1.4rem;
      word-wrap: break-word;
    }
    .con_banner {
      @media (max-width: 1050px) {
        display: none;
      }
    }
  }
  .rec_nft_btn_box {
    display: flex;
    justify-content: center;
    .inner_rec_box {
      border: 1px solid #c4c4c4;
      display: flex;
      flex-direction: column;
      border-radius: 2px;
      .top_btn_box {
        display: flex;
        border-bottom: 1px solid #c4c4c4;
        justify-content: center;
        padding: 2rem 5rem;
        .rec_up,
        .rec_down {
          display: flex;
          align-items: center;
          font-size: 1.4rem;
          font-weight: 600;
        }
        .rec_up {
          margin-right: 1rem;
          .count {
            color: #d31900;
            margin-right: 2rem;
          }
        }
        .rec_down {
          color: #555;
          .count {
            margin-left: 2rem;
          }
        }
        .up_img,
        .down_img {
          background-image: url(https://nstatic.dcinside.com/dc/w/images/sp/sp_img.png);
          background-repeat: no-repeat;
          display: inline-block;
          width: 56px;
          height: 56px;
        }
        .up_img {
          background-position: 0 -440px;
          cursor: pointer;
        }
        .down_img {
          background-position: 0 -377px;
          cursor: pointer;
        }
      }
      .bottom_btn_box {
        display: flex;
        width: 100%;
        button {
          flex: 1;
          border: none;
          border-right: 1px solid #c4c4c4;
          background-color: white;
          padding: 1rem 1.5rem;
          white-space: nowrap;
          cursor: pointer;
          .icon_img {
            display: inline-block;
            background-image: url(https://nstatic.dcinside.com/dc/w/images/sp/sp_img.png);
            background-repeat: no-repeat;
          }
          .rec_btn {
            width: 23px;
            height: 23px;
            background-position: -270px -983px;
            margin-right: 3px;
            margin-top: 2px;
            vertical-align: -8px;
          }
          .share_btn {
            width: 17px;
            height: 20px;
            background-position: -74px -262px;
            margin-right: 6px;
            vertical-align: -4px;
          }
          .report_btn {
            width: 18px;
            height: 20px;
            background-position: -74px -241px;
            margin-right: 6px;
            vertical-align: -4px;
          }
          .type {
            font-size: 1.2rem;
            color: #555;
          }
        }
        button:last-child {
          border-right: none;
        }
      }
    }

    @media (max-width: 1050px) {
      margin: 3rem 0;
    }
  }
`;

const CommentBtnBottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  margin-bottom: 3rem;
  Button {
    margin-right: 0.3rem;
  }
  Button:hover {
    border: 1px solid #3b4890;
  }
  .write_box {
    a {
      text-decoration: none;
      color: black;
    }
    .revise > a {
      color: white;
    }
  }
  @media (max-width: 1050px) {
    flex-direction: column;
    .left_btn_box,
    .write_box {
      display: flex;
      flex-direction: column;
      align-items: center;
      button {
        width: 100%;
        color: #000000;
        background-color: #fff;
      }
      button:hover {
        background-color: #3b4890;
        color: #fff;
      }
    }
  }
`;

const Post = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const singlePost = useSelector((state: RootState) => state.post.gallery.singlePost);
  const user = useSelector((state: RootState) => state.user.me);

  const onClickLike = useCallback(() => {
    if (singlePost?.writer.nickname === user?.nickname) {
      return alert('자신의 글에는 추천하실 수 없습니다');
    }
    if (!user) {
      return alert('로그인 한 유저만 이용하실 수 있습니다.');
    }
    const Isliker = singlePost?.liker.find((liker) => liker.nickname === user?.nickname);
    const IsDisLiker = singlePost?.disliker.find((disliker) => disliker.nickname === user?.nickname);
    if (Isliker) {
      alert('이미 추천하셨습니다.');
      return;
    }
    if (IsDisLiker) {
      alert('이미 비추천하셨습니다.');
      return;
    }
    if (singlePost?._id) {
      dispatch(addLike(singlePost?._id));
    }
  }, [dispatch, singlePost, user]);

  const onClickDislike = useCallback(() => {
    if (singlePost?.writer.nickname === user?.nickname) {
      return alert('자신의 글에는 비추천하실 수 없습니다');
    }
    if (!user) {
      return alert('로그인 한 유저만 이용하실 수 있습니다.');
    }
    const Isliker = singlePost?.liker.find((liker) => liker.nickname === user?.nickname);
    const IsDisLiker = singlePost?.disliker.find((disliker) => disliker.nickname === user?.nickname);
    if (Isliker) {
      alert('이미 추천하셨습니다.');
      return;
    }
    if (IsDisLiker) {
      alert('이미 비추천하셨습니다.');
      return;
    }
    if (singlePost?._id) {
      dispatch(addDisLike(singlePost?._id));
    }
  }, [dispatch, singlePost, user]);

  const onClickRevise = useCallback(() => {
    console.log(123456);
    if (!user) {
      return alert('로그인한 유저만 이용할 수 있습니다');
    }
    router.push('/comparePassword/revise');
  }, [router, user]);
  const onClickDelete = useCallback(() => {
    if (!user) {
      return alert('로그인한 유저만 이용할 수 있습니다');
    }
    router.push('/comparePassword/delete');
  }, [router, user]);
  const onClickWrite = useCallback(() => {
    if (!user) {
      return alert('로그인한 유저만 이용할 수 있습니다');
    }
    router.push('/write');
  }, [router, user]);

  const commentLength = singlePost?.comments?.reduce((prev, current) => {
    return current.replyComments.length + prev;
  }, singlePost?.comments.length);

  return (
    <PostSection>
      <header>
        <div className='title'>{singlePost?.title}</div>
        <div className='post_info'>
          <div className='left_info'>
            <div className='user_info'>
              <span className='writer'>{singlePost?.writer.nickname}</span>
            </div>
            <div className='wrtie_date'>
              {singlePost && moment(singlePost.createDate).format('YYYY.MM.DD HH:mm:ss')}
            </div>
          </div>
          <div className='right_info'>
            <div className='visitor'>조회 {singlePost?.visitor}</div>
            <div className='rec_count'>추천 {singlePost?.liker.length}</div>
            <button className='com_count'>댓글 {commentLength}</button>
          </div>
        </div>
      </header>
      <div className='post_view_content'>
        <div className='writing_view_box'>{singlePost?.content}</div>
        <aside className='con_banner'>
          <Image src='/img/adImg.gif' alt='광고 이미지' width={160} height={600} />
        </aside>
      </div>
      <div className='rec_nft_btn_box'>
        <div className='inner_rec_box'>
          <div className='top_btn_box'>
            <div className='rec_up'>
              <span className='count'>{singlePost?.liker.length}</span>
              <span className='up_img' onClick={onClickLike}></span>
            </div>
            <div className='rec_down'>
              <span className='down_img' onClick={onClickDislike}></span>
              <span className='count'>{singlePost?.disliker.length}</span>
            </div>
          </div>
          <div className='bottom_btn_box'>
            <button>
              <span className='icon_img rec_btn'></span>
              <span className='type'>실베추</span>
            </button>
            <button>
              <span className='icon_img share_btn'></span>
              <span className='type'>공유</span>
            </button>
            <button>
              <span className='icon_img report_btn'></span>
              <span className='type'>신고</span>
            </button>
          </div>
        </div>
      </div>
      <div className='ad'></div>
      <CommentBox />
      <CommentBtnBottomBox>
        <div className='left_btn_box'>
          <Button size='md' backgroundColor='#3b4890' color='#fff'>
            전체글
          </Button>
          <Button size='md'>개념글</Button>
        </div>
        <div className='write_box'>
          <Button size='md' backgroundColor='#3b4890' color='#fff' onClick={onClickRevise}>
            수정
          </Button>
          <Button size='md' onClick={onClickDelete}>
            삭제
          </Button>
          <Button size='md' onClick={onClickWrite}>
            글쓰기
          </Button>
        </div>
      </CommentBtnBottomBox>
    </PostSection>
  );
};

export default Post;
