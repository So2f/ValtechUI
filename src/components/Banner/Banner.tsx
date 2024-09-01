import React from 'react';
import { useContent } from '../../context/IndexContext';
import styled from 'styled-components';
import bg from '@/assets/images/image3.png';

const BannerWrapper = styled.div`
  margin-top: var(--spacing-xl);
  color: var(--color-primary);
`;

const BannerContainer = styled.div`
  position: relative;
  max-width: 1196px;
  height: 560px;
  margin: 0 auto;
`;

const BackgroundImage = styled.div<{ backgroundImage: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 480px;
  transform: translate(-50%, -50%);
  background-image: url(${bg.src});
  background-size: cover;
  border-radius: 10px;
`;

const TextContent = styled.div`
  position: absolute;
  bottom: 40px;
  right: 40px;
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);

  h1 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
  }
`;

const ForegroundImageContainer = styled.div`
  position: absolute;
  top: 50%;
  left: var(--spacing-xl);
  width: 345px;
  height: 560px;
  transform: translateY(-50%);
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
`;

const Banner = () => {
  const { content } = useContent();

  const heroContent = content.find((section) => section.type === 'HERO');

  if (!heroContent) return null;

  return (
    <BannerWrapper>
      <BannerContainer>
        <BackgroundImage>
          <TextContent>
            <h1 className="heading-large">{heroContent.title}</h1>
            <p className="text-large">{heroContent.subtitle}</p>
            <p className="text-large">{heroContent.description}</p>
          </TextContent>
        </BackgroundImage>

        {heroContent.foregroundAsset?.url && <ForegroundImageContainer />}
      </BannerContainer>
    </BannerWrapper>
  );
};

export default Banner;
