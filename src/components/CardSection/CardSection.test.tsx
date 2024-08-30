import React from 'react';
import { render, screen } from '@testing-library/react';
import CardSection from './CardSection';
import indexData from '../../data/index.json';

describe('CardSection', () => {
  test('renders the section title and all card titles and subtitles', () => {
    render(<CardSection />);

    const cardGridContent = indexData.content.find(
      (section) => section.type === 'CARD_GRID'
    );

    if (!cardGridContent) {
      throw new Error('CARD_GRID section not found in index.json');
    }

    // Check if the section title "Valtech Offices" is rendered
    expect(screen.getByText(cardGridContent.title)).toBeInTheDocument();
  });

  test('Explore More button navigates to correct URL', () => {
    render(<CardSection />);

    const card = indexData.content.find(
      (section) => section.type === 'CARD_GRID'
    );

    const firstCard = card?.cards[0];

    const button = screen.getByLabelText(
      `Explore more about ${firstCard.title}`
    );

    // console.log('first card ==', firstCard);

    expect(button).toHaveAttribute('href', '/detail');
  });
});
