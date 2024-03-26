import React, { useCallback, useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { MdArrowDropDown } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { getPosts } from '@/reducers/post';
import { AppDispatch, RootState } from '@/store';

const SearchInputBox = styled.div`
  display: flex;
  justify-content: center;
  .select_box {
    display: flex;
    flex-direction: column;
    width: 130px;
    height: 36px;
    border: 1px solid #29367c;
    padding: 0.3rem;
    background: #3b4890;
    .selected_option_box {
      display: flex;
      align-items: center;
      height: 100%;
      width: 100%;
      .option {
        flex: 1;
        background-color: white;
        font-size: 1.4rem;
        line-height: 3rem;
        padding-left: 1rem;
        height: 100%;
        span {
        }
      }
      button {
        width: 34px;
        height: 30px;
        background-color: #3b4890;
        border: none;
        cursor: pointer;
        svg {
          color: white;
          font-size: 3rem;
        }
      }
    }
    ul {
      background-color: #fff;
      z-index: 100;
      border: 2px solid #29367c;
      position: relative;
      top: 2px;
      width: 130px;
      right: 3px;
      li {
        cursor: pointer;
        padding: 0.7rem;
      }
      li:hover {
        text-decoration: underline;
        text-underline-offset: 2px;
      }
    }
  }
  .search {
    width: 300px;
    margin-left: 0.7rem;
    display: flex;
    border: 1px solid #29367c;
    background: #3b4890;
    input {
      flex: 1;
      margin: 0.35rem;
      outline: none;
      padding-left: 0.5rem;
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      background-color: #3b4890;
      color: white;
      font-size: 2.3rem;
      border: none;
      cursor: pointer;
    }
  }
`;

const SearchInput = ({
  setInputText,
  inputText,
  optionName,
  setOptionName,
}: {
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  inputText: string;
  optionName: string;
  setOptionName: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const galleryName = useSelector((state: RootState) => state.post.gallery.name);

  const [showOptions, setShowOptions] = useState(false);

  const onChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }, []);

  const onShowOptions = useCallback(() => {
    setShowOptions((prev) => !prev);
  }, []);

  const onClickOption = useCallback((e: React.MouseEvent<HTMLUListElement>) => {
    const eventTarget = e.target as HTMLUListElement;
    if (eventTarget.nodeName === 'LI') {
      eventTarget?.textContent && setOptionName(eventTarget.textContent);
      setShowOptions(false);
    }
  }, []);

  const onClickBtn = useCallback(() => {
    const data = {
      optionName,
      inputText,
      galleryName,
    };
    dispatch(getPosts(data));
  }, [optionName, inputText, dispatch, galleryName]);

  return (
    <SearchInputBox>
      <div className='select_box'>
        <div className='selected_option_box'>
          <div className='option'>
            <span>{optionName}</span>
          </div>
          <button onClick={onShowOptions}>
            <MdArrowDropDown />
          </button>
        </div>
        {showOptions && (
          <ul onClick={onClickOption}>
            <li>제목</li>
            <li>내용</li>
            <li>제목+내용</li>
            <li>글쓴이</li>
          </ul>
        )}
      </div>
      <div className='search'>
        <input value={inputText} onChange={onChangeInput} />
        <button onClick={onClickBtn}>
          <IoSearchOutline />
        </button>
      </div>
    </SearchInputBox>
  );
};

export default SearchInput;
