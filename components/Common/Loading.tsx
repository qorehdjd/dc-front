import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Loding = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = () => {
  return (
    <Loding>
      <Image src='/img/loading.gif' alt='로딩이미지' width={150} height={150} />
    </Loding>
  );
};

export default Loading;
