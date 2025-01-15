import React, { useEffect, useState } from 'react';
import './PageSelector.css';
import IonIcon from '@reacticons/ionicons';

interface PageProps {
  pageNo: number;
  selectedNo: number;
  pageClicked: (content: number) => void;
  pages: number;
  type: string;
}

interface PageSelectorProps {
  totalResults: number;
  pageClicked: (content: number) => void;
}

const Page: React.FC<PageProps> = ({
  pageNo,
  selectedNo,
  pageClicked,
  pages,
  type,
}) => {
  const handlePrevious = () => {
    if (selectedNo > 1) {
      pageClicked(selectedNo - 1);
    }
  };

  const handleNext = () => {
    if (selectedNo < pages) {
      pageClicked(selectedNo + 1);
    }
  };
  return (
    <>
      {pageNo == selectedNo && type == 'page' && (
        <button className="page-btn-selected" data-testid="selected-page">
          {pageNo}
        </button>
      )}
      {pageNo != selectedNo && type == 'page' && (
        <button
          className="page-btn"
          data-testid="page-no"
          onClick={() => pageClicked(pageNo)}
        >
          {pageNo}
        </button>
      )}
      {type == 'next' && (
        <button
          className="page-btn"
          data-testid="forward-btn"
          onClick={handleNext}
        >
          <IonIcon name="chevron-forward-outline" />
        </button>
      )}
      {type == 'prev' && (
        <button
          className="page-btn"
          data-testid="back-btn"
          onClick={handlePrevious}
        >
          <IonIcon name="chevron-back-outline" />
        </button>
      )}
    </>
  );
};

const PageSelector: React.FC<PageSelectorProps> = ({
  totalResults,
  pageClicked,
}) => {
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);

  useEffect(() => {
    setPages(Math.ceil(totalResults / 10));
    if (Math.ceil(totalResults / 10) > 10) {
      const pagesArray = Array.from({ length: 10 }, (_, index) => index + 1);
      setPageNumbers(pagesArray);
    } else {
      setPages(Math.ceil(totalResults / 10));
      const pagesArray = Array.from(
        { length: Math.ceil(totalResults / 10) },
        (_, index) => index + 1
      );
      setPageNumbers(pagesArray);
    }
  }, [totalResults]);

  function handlePageClicked(page_no: number) {
    setCurrentPage(page_no);
    pageClicked(page_no);
    if (pages > 10) {
      if (page_no == pageNumbers[pageNumbers.length - 1] && pages > page_no) {
        const pagesArray = Array.from(
          { length: page_no + 1 - (page_no + 1 - 9) + 1 },
          (_, index) => page_no + 1 - 9 + index
        );
        setPageNumbers(pagesArray);
      } else if (page_no == pageNumbers[0] && page_no > 1) {
        const pagesArray = Array.from(
          { length: page_no + 10 - page_no - 1 + 1 },
          (_, index) => page_no - 1 + index
        );
        setPageNumbers(pagesArray);
      }
    }
  }

  return (
    <>
      <div className="page-selector-container">
        <div className="prev-page">
          <Page
            pageNo={-1}
            selectedNo={currentPage}
            key={'prev'}
            pageClicked={handlePageClicked}
            pages={pages}
            type="prev"
          />
        </div>
        <div className="page-numbers">
          {pageNumbers.map((pageNo) => (
            <Page
              key={pageNo}
              pageNo={pageNo}
              selectedNo={currentPage}
              pageClicked={handlePageClicked}
              pages={pages}
              type="page"
            />
          ))}
        </div>
        <div className="next-page">
          <Page
            pageNo={-1}
            selectedNo={currentPage}
            key={'next'}
            pageClicked={handlePageClicked}
            pages={pages}
            type="next"
          />
        </div>
      </div>
    </>
  );
};

export default PageSelector;
