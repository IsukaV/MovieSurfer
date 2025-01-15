import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  BrowserRouter as Router,
  MemoryRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { createMemoryHistory } from 'history';
import AppRoutes from '../routes/AppRoutes';

beforeEach(() => {
  // Reinitialize the history object before each test to reset state

  history = createMemoryHistory({ initialEntries: ['/'] });
});

describe('Testing home components', () => {
  it('See if the components have loaded', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>
    );

    const movieBtn = await screen.findByTestId('browse-movie');
    const seriesBtn = await screen.findByText(/Browse TV Series/i);

    expect(movieBtn).toBeInTheDocument();
    expect(seriesBtn).toBeInTheDocument();
  });

  it('Browse movies button takes to movies search page', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>
    );

    const movieBtn = screen.getByTestId('browse-movie');
    const user = userEvent.setup();

    await user.click(movieBtn);

    // Make sure we navigate to the "/movies" page
    const text = screen.getByTestId('search-text');
    expect(text).toBeInTheDocument();
  });
  it('Browse TV Series button takes to movies search page', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>
    );

    const movieBtn = screen.getByTestId('browse-series');
    const user = userEvent.setup();

    await user.click(movieBtn);

    const text = screen.getByTestId('search-text');
    expect(text).toBeInTheDocument();
  });
});
