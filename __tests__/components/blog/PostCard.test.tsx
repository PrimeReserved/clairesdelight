import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import PostCard from '../../../app/component/blog/PostCard';

describe('PostCard', () => {
  const post = {
    title: 'Test Post',
    featuredImage: 'https://catchfoods.com/wp-content/uploads/2021/07/menuu3.png',
    content: 'This is a test post',
    category: 'Test Category',
    createdAt: '2023-02-20T12:00:00.000Z',
    slug: 'test-post',
  };

  it('renders the post title', () => {
    const { getByText } = render(<PostCard post={post} />);
    expect(getByText(post.title)).toBeInTheDocument();
  });

  it('renders the post image', () => {
    const { getByAltText } = render(<PostCard post={post} />);
    expect(getByAltText(post.title)).toBeInTheDocument();
  });

  it('renders the post content', () => {
    const { getByText } = render(<PostCard post={post} />);
    expect(getByText(post.content)).toBeInTheDocument();
  });

  it('renders the post category', () => {
    const { getByText } = render(<PostCard post={post} />);
    expect(getByText(post.category)).toBeInTheDocument();
  });

  it('renders the post creation date', () => {
    const { getByText } = render(<PostCard post={post} />);
    expect(getByText(post.createdAt)).toBeInTheDocument();
  });

  it('renders the "Read more" button', () => {
    const { getByText } = render(<PostCard post={post} />);
    expect(getByText('Read more')).toBeInTheDocument();
  });

  it('links to the post detail page', () => {
    const { getByText } = render(<PostCard post={post} />);
    const link = getByText('Read more');
    expect(link.getAttribute('href')).toBe(`/blog/${post.slug}`);
  });

  it('renders the loading indicator while the image is loading', () => {
    const { getByText } = render(<PostCard post={post} />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('hides the loading indicator when the image is loaded', async () => {
    const { queryByText } = render(<PostCard post={post} />);
    await waitFor(() => {
      expect(queryByText('Loading...')).not.toBeInTheDocument();
    });
  });
});