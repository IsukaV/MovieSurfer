import PageSelector from '../components/PageSelector';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const handleClick = vi.fn();

const renderPages = () => {
  render(<PageSelector pageClicked={handleClick} totalResults={119} />);
};

describe('Testing pages', () => {
  it('Pagination should be loaded', () => {
    renderPages();
    const selectedPage = screen.getByTestId('selected-page');
    const pageNo = screen.getAllByTestId('page-no');
    expect(selectedPage).toBeInTheDocument();
    expect(pageNo[0]).toHaveTextContent('2');
  });

  it('10 Pages should be displayed initially', () => {
    renderPages();
    const pages = screen.getAllByTestId('page-no');
    const selectedPage = screen.getAllByTestId('selected-page');
    expect(pages.length).toBe(9);
    expect(selectedPage.length).toBe(1);
  });

  it('handleClick funcion should work when a page is cliked', async () => {
    renderPages();
    const user = userEvent.setup();
    const pageNo = screen.getAllByTestId('page-no');
    await user.click(pageNo[0]);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('selected page should change to 2, when 2 is clicked', async () => {
    renderPages();
    const user = userEvent.setup();
    const pageNo = screen.getAllByTestId('page-no');
    await user.click(pageNo[0]);
    const selectedPage = screen.getByTestId('selected-page');
    expect(selectedPage).toHaveTextContent('2');
  });

  it('When 10 is clicked, pages should shift by 1', async () => {
    renderPages();
    const user = userEvent.setup();
    const pageNo = screen.getByText('10');
    await user.click(pageNo);
    const newPageNo = screen.getByText('11');
    expect(newPageNo).toBeInTheDocument();
  });

  it('Right arrow should shift the selected page by 1', async () => {
    renderPages();
    const user = userEvent.setup();
    const forwardPage = screen.getByTestId('forward-btn');
    await user.click(forwardPage);
    const selectedPage = screen.getByTestId('selected-page');
    expect(selectedPage).toHaveTextContent('2');
  });

  it('Left arrow shuld shift the selected page by 1', async () => {
    renderPages();
    const user = userEvent.setup();
    const forwardPage = screen.getByTestId('forward-btn');
    const prevPage = screen.getByTestId('back-btn');
    await user.click(forwardPage);
    await user.click(prevPage);
    const selectedPage = screen.getByTestId('selected-page');
    expect(selectedPage).toHaveTextContent('1');
  });
});
