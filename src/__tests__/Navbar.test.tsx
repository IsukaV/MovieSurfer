import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import userEvent from '@testing-library/user-event';

describe('Testing the Navbar Component', () => {
  const renderNavbar = () =>
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

  test('renders the navbar logo', () => {
    renderNavbar();
    expect(screen.getByTestId('navbar-logo')).toBeInTheDocument();
    expect(screen.getByTestId('navbar-logo')).toHaveTextContent('Movie Surfer');
  });

  test('renders all navigation links', () => {
    renderNavbar();
    expect(screen.getByTestId('link-home')).toBeInTheDocument();
    expect(screen.getByTestId('link-home')).toHaveTextContent('Home');

    expect(screen.getByTestId('link-movies')).toBeInTheDocument();
    expect(screen.getByTestId('link-movies')).toHaveTextContent('Movies');

    expect(screen.getByTestId('link-tvseries')).toBeInTheDocument();
    expect(screen.getByTestId('link-tvseries')).toHaveTextContent('TV Series');
  });

  test("navigates to 'Home' when Home link is clicked", async () => {
    renderNavbar();

    const user = userEvent.setup();
    const homeLink = screen.getByText(/home/i);
    await user.click(homeLink);

    expect(homeLink).toHaveClass('active-link');
  });

  test("navigates to '/movie' when Movie link is clicked", async () => {
    renderNavbar();

    const user = userEvent.setup();
    const movieLink = screen.getByText(/movies/i);
    await user.click(movieLink);

    expect(movieLink).toHaveClass('active-link');
  });

  test("navigates to '/tvseries' when Tv Series link is clicked", async () => {
    renderNavbar();

    const user = userEvent.setup();
    const tvSeriesLink = screen.getByText(/movies/i);
    await user.click(tvSeriesLink);

    expect(tvSeriesLink).toHaveClass('active-link');
  });
});
