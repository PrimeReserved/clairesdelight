import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import RecipeCard from '../../../app/component/recipe/RecipeCard';

describe('RecipeCard', () => {
  const recipe = {
    _id: '1',
    title: 'Test Recipe',
    image: 'https://catchfoods.com/wp-content/uploads/2021/07/menuu3.png',
    description: 'This is a test recipe',
    ingredients: ['Ingredient 1', 'Ingredient 2'],
    method: ['Step 1', 'Step 2'],
  };

  it('renders the recipe title', () => {
    const { getByText } = render(<RecipeCard recipe={recipe} />);
    expect(getByText(recipe.title)).toBeInTheDocument();
  });

  it('renders the recipe image', () => {
    const { getByAltText } = render(<RecipeCard recipe={recipe} />);
    expect(getByAltText(recipe.title)).toBeInTheDocument();
  });

  it('renders the recipe description', () => {
    const { getByText } = render(<RecipeCard recipe={recipe} />);
    expect(getByText(recipe.description)).toBeInTheDocument();
  });

  it('renders the ingredients list', () => {
    const { getAllByRole } = render(<RecipeCard recipe={recipe} />);
    const ingredients = getAllByRole('listitem');
    expect(ingredients.length).toBe(recipe.ingredients.length);
  });

  it('renders the method list', () => {
    const { getAllByRole } = render(<RecipeCard recipe={recipe} />);
    const method = getAllByRole('listitem');
    expect(method.length).toBe(recipe.method.length);
  });

  it('renders the "Read more" button', () => {
    const { getByText } = render(<RecipeCard recipe={recipe} />);
    expect(getByText('Read more')).toBeInTheDocument();
  });

  it('links to the recipe detail page', () => {
    const { getByText } = render(<RecipeCard recipe={recipe} />);
    const link = getByText('Read more');
    expect(link.href).toBe(`/recipes/${recipe._id}`);
  });
});