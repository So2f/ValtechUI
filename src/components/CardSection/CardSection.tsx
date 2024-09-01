import React from 'react';
import Link from 'next/link';
import { useContent } from '../../context/IndexContext';
import styled from 'styled-components';
import { HeadingMedium, TextSmall } from '../styles/TextStyles';

import cityImage from '@/assets/images/city.jpg';
type Card = {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundAsset?: {
    url: string;
    alt: string;
  };
  cta?: {
    url: string;
    text: string;
    ariaLabel: string;
    target: string;
  };
};

type CardGridContent = {
  type: string;
  title: string;
  cards: Card[];
};

type ContentContextType = {
  content: CardGridContent[];
};

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
`;

const CardItem = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #000;
  color: white;
  border-radius: 8px;
  overflow: hidden;
  height: 300px;
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0 8px 8px 0;
  backdrop-filter: blur(10px);
`;

const CardTitle = styled(HeadingMedium)`
  margin-bottom: var(--spacing-sm);
`;

const CardCTA = styled(TextSmall)`
  color: var(--color-accent);
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const CardSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(HeadingMedium)`
  margin-bottom: var(--spacing-md);
`;

const CardSection: React.FC = () => {
  const { content } = useContent() as ContentContextType;

  const cardGridContent = content.find(
    (section) => section.type === 'CARD_GRID'
  );

  if (!cardGridContent) return null;

  return (
    <CardSectionWrapper>
      <SectionTitle>{cardGridContent.title}</SectionTitle>
      <CardGrid>
        {cardGridContent.cards?.map((card, index) => (
          <CardItem key={index}>
            <ImageContainer>
              <StyledImage
                src={cityImage.src}
                alt={card.backgroundAsset?.alt || card.title}
              />
            </ImageContainer>
            <ContentContainer>
              <div>
                <CardTitle>{card.title}</CardTitle>
              </div>
              {card.cta && (
                <CardCTA>
                  <Link href={card.cta.url} aria-label={card.cta.ariaLabel}>
                    {card.cta.text} →
                  </Link>
                </CardCTA>
              )}
            </ContentContainer>
          </CardItem>
        ))}
      </CardGrid>
    </CardSectionWrapper>
  );
};

export default CardSection;
