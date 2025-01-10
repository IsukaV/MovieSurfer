import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";


vi.mock("../services/apiServices", () => ({
  fetchItems: vi.fn().mockResolvedValue({
    totalResults: "10",
    Search: [
      {
        Title: "Spider Man No Way Home",
        Year: "2018",
        imdbID: "8.5",
        Type: "movie",
        Poster: "Hey",
      },
    ],
  }),
}));

describe("Testing SearchResult Component", () => {
  const mockClicked = vi.fn();
  const SearchResultsProps = {
    searchText: "spider Man",
    backClicked: mockClicked,
    type: "movie",
  };

  const renderSearchResult = () => {
    render(
     
      <SearchResults
        searchText={SearchResultsProps.searchText}
        backClicked={SearchResultsProps.backClicked}
        type={SearchResultsProps.type}
      />
     
    );
  };

  test("Testing render back text", async () => {
    renderSearchResult();
    expect(await screen.findByTestId("back-text")).toHaveTextContent(/back/i);
    });

  test("Testing render data", async () => {
    renderSearchResult();
    expect(await screen.findByText("Spider Man No Way Home")).toBeInTheDocument()

    });

  test("Should be back when back button is clicked", async () => {
    renderSearchResult();
    const user = userEvent.setup();
    const backButton = await screen.findByText(/back/i);
    await user.click(backButton);
        
    expect( screen.queryByText("Spider Man No Way Home")).not.toBeInTheDocument();
   
  });
});
