import ItemDetails from '../components/ItemDetails';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { it, describe } from 'vitest';
import { movieDetails, seriesDetails } from './Models/fetchItemdata';
import { fetchItemInfo } from '../services/apiServices';

const closeFunction = vi.fn();

vi.mock('../services/apiServices');

describe('Item details component should work as intended for movies', () => {
  beforeAll(() => {
    vi.mocked(fetchItemInfo).mockResolvedValue(movieDetails);
  });

  afterEach(() => {
    vi.clearAllMocks();
    console.log('Ended the afterAll()');
  });

  it('Component should display item details', async () => {
    render(<ItemDetails imdbID="tt4817256" detailClosed={closeFunction} />);
    const response = await fetchItemInfo('asdf');
    const plot = await screen.findByTestId('plot');
    const movieNameAndYear = await screen.findByTestId('item-name-year');
    const releasedDate = await screen.findByTestId('released-date');
    const actors = await screen.findByTestId('actors');
    const director = await screen.findByTestId('director');
    const genre = await screen.findByTestId('genre');

    expect(plot).toHaveTextContent(
      /When teenage boy Karol Kremer becomes an eyewitness/
    );
    expect(movieNameAndYear).toHaveTextContent('The Red Spider - 2015');
    expect(releasedDate).toHaveTextContent('27 Nov 2015');
    expect(actors).toHaveTextContent(
      'Filip Plawiak, Adam Woronowicz, Julia Kijowska'
    );
    expect(director).toHaveTextContent('Marcin Koszalka');
    expect(genre).toHaveTextContent('Crime, Drama, Thriller');
  });

  it('Close button should work as intended', async () => {
    render(<ItemDetails imdbID="tt4817256" detailClosed={closeFunction} />);
    const user = userEvent.setup();

    const closeBtn = await screen.findByRole('close-button');

    await user.click(closeBtn);
    expect(closeFunction).toHaveBeenCalledTimes(1);
  });
});

describe('Item details component should work as intended for series', () => {
  beforeAll(() => {
    vi.mocked(fetchItemInfo).mockResolvedValue(seriesDetails);
  });

  afterAll(() => {
    vi.clearAllMocks();
  });

  it('Component should display item details', async () => {
    render(<ItemDetails imdbID="tt4817256" detailClosed={closeFunction} />);

    const response = await fetchItemInfo('asdf');
    const plot = await screen.findByTestId('plot');
    const movieNameAndYear = await screen.findByTestId('item-name-year');
    const releasedDate = await screen.findByTestId('released-date');
    const actors = await screen.findByTestId('actors');
    const director = await screen.findByTestId('director');
    const genre = await screen.findByTestId('genre');
    const totalSeasons = await screen.findByTestId('total-seasons');

    expect(plot).toHaveTextContent(
      /Nine noble families fight for control over the lands of/
    );
    expect(movieNameAndYear).toHaveTextContent('Game of Thrones - 2011–2019');
    expect(releasedDate).toHaveTextContent('17 Apr 2011');
    expect(actors).toHaveTextContent(
      'Emilia Clarke, Peter Dinklage, Kit Harington'
    );
    expect(director).toHaveTextContent('N/A');
    expect(genre).toHaveTextContent('Action, Adventure, Drama');
    expect(totalSeasons).toHaveTextContent('8');
  });

  it('Close button should work as intended', async () => {
    render(<ItemDetails imdbID="tt4817256" detailClosed={closeFunction} />);
    const user = userEvent.setup();
    const closeBtn = await screen.findByRole('close-button');
    await user.click(closeBtn);
    expect(closeFunction).toHaveBeenCalledTimes(1);
  });
});
