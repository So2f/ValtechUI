'use client';

import React from 'react';
import logo from '../../assets/images/valtech.svg';
import Image from 'next/image';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  height: 100px;
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const Logo = styled(Image)`
  margin-left: 120px;

  @media (max-width: 1024px) {
    margin-left: 0;
    width: 150px !important;
  }

  @media (max-width: 768px) {
    width: 120px !important;
  }

  @media (max-width: 480px) {
    width: 100px !important;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Valtech logo" width={180} height={40} />
    </HeaderContainer>
  );
};

export default Header;
