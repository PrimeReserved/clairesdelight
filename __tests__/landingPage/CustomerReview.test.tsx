import React from 'react';
import { render, waitFor } from '@testing-library/react';
import CustomerReview from './CustomerReview';

describe('CustomerReview', () => {
  it('renders the customer review title', () => {
    const { getByText } = render(<CustomerReview />);
    expect(getByText('Customer\'s Review')).toBeInTheDocument();
  });

  it('renders the customer review description', () => {
    const { getByText } = render(<CustomerReview />);
    expect(getByText('Explore our diverse spice collection sourced from around the globe, each ingredient carefully chosen for its exceptional quality and distinctive taste')).toBeInTheDocument();
  });

  it('renders the customer review name and description', async () => {
    const customerReviews = [
      {
        name: 'John Doe',
        description: 'This is a test review',
      },
    ];
    const { getByText } = render(<CustomerReview customerReviews={customerReviews} />);
    await waitFor(() => {
      expect(getByText('John Doe')).toBeInTheDocument();
      expect(getByText('This is a test review')).toBeInTheDocument();
    });
  });

  it('renders the next and previous buttons', () => {
    const { getAllByRole } = render(<CustomerReview />);
    const buttons = getAllByRole('button');
    expect(buttons.length).toBe(2);
  });

  it('calls the handleNext function when the next button is clicked', () => {
    const handleNextMock = jest.fn();
    const { getByRole } = render(<CustomerReview onNext={handleNextMock} />);
    const nextButton = getByRole('button', { name: 'Next' });
    fireEvent.click(nextButton);
    expect(handleNextMock).toHaveBeenCalledTimes(1);
  });

  it('calls the handlePrev function when the previous button is clicked', () => {
    const handlePrevMock = jest.fn();
    const { getByRole } = render(<CustomerReview onPrev={handlePrevMock} />);
    const prevButton = getByRole('button', { name: 'Previous' });
    fireEvent.click(prevButton);
    expect(handlePrevMock).toHaveBeenCalledTimes(1);
  });
});