import { render, screen } from '@testing-library/react';
import Movies from '../components/Movie/Movies';

describe('Series Component', () => {
  test('renders SearchItem by default', () => {
    render(<Movies />);
    expect(screen.getByTestId('movie-search')).toBeInTheDocument();
    expect(screen.queryByText(/Search Results for:/i)).not.toBeInTheDocument();
  });
});
