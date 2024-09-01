import React from 'react';
import styled from 'styled-components';
import { useArticleContent } from '@/context/ArticleContext';
import { HeadingMedium, TextLarge } from '../styles/TextStyles';
import rightImage from '@/assets/images/image3.png';

const BannerContainer = styled.div`
  position: relative;
  display: flex;
  max-width: 1196px;
  width: 100%;
  height: 480px;

  @media (max-width: 1024px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 140px;
  }
`;

const BackgroundImage = styled.div<{ backgroundImage: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 480px;
  transform: translate(-50%, -50%);
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  border-radius: 10px;
`;

const GlassEffectSide = styled.div`
  position: absolute;
  width: 466px;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 10px 0 0 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  z-index: 2;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 40px;
  max-width: 459px;
  transform: translateY(-50%);
  color: white;
  text-align: right;
  z-index: 3;

  @media (max-width: 1024px) {
    width: 300px;
  }

  @media (max-width: 480px) {
    width: 150px;
    right: 10px;
  }
`;

const Subtitle = styled(TextLarge)`
  margin-bottom: var(--spacing-sm);

  @media (max-width: 1024px) {
    font-size: var(--font-size-text-small);
  }

  @media (max-width: 480px) {
    margin-bottom: 10px;
    font-size: 6px;
  }
`;

const Title = styled(HeadingMedium)`
  @media (max-width: 1024px) {
    font-size: var(--font-size-heading-small);
  }

  @media (max-width: 480px) {
    font-size: 8px;
  }
`;

const DetailBanner: React.FC = () => {
  const articleContent = useArticleContent();

  const heroContent = articleContent?.content.find(
    (item) => item.type === 'HERO_ARTICLE'
  );

  if (!heroContent) return null;

  return (
    <BannerContainer>
      <BackgroundImage backgroundImage={rightImage.src} />
      <GlassEffectSide />
      <TextContainer>
        <Subtitle>{heroContent?.subtitle}</Subtitle>
        <Title>{heroContent?.title}</Title>
      </TextContainer>
    </BannerContainer>
  );
};

export default DetailBanner;
