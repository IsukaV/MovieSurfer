import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SearchBar from '../components/Common/SearchBar';
import { vi } from 'vitest';

describe('Testing the searchbar component', () => {
  const mockSearched = vi.fn();
  const renderSearchBar = () =>
    render(
      <BrowserRouter>
        <SearchBar searched={mockSearched} type="movie" />
      </BrowserRouter>
    );
  test('Test render search word', () => {
    renderSearchBar();
    expect(screen.getByTestId('search-text')).toHaveTextContent(
      /search & discover/i
    );
  });

  test('Test render search word', () => {
    renderSearchBar();
    expect(screen.getByTestId('search-Icon')).toBeInTheDocument();
  });

  test('Testing render the input field', () => {
    renderSearchBar();
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
  });
});
