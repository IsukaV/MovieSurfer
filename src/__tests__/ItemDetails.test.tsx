import ItemDetails from "../components/ItemDetails";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest"




const seriesDetails = {
    "Title": "Game of Thrones",
    "Year": "2011–2019",
    "Rated": "TV-MA",
    "Released": "17 Apr 2011",
    "Runtime": "57 min",
    "Genre": "Action, Adventure, Drama",
    "Director": "N/A",
    "Writer": "David Benioff, D.B. Weiss",
    "Actors": "Emilia Clarke, Peter Dinklage, Kit Harington",
    "Plot": "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
    "Language": "English",
    "Country": "United States, United Kingdom",
    "Awards": "Won 59 Primetime Emmys. 397 wins & 655 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "9.2/10"
      }
    ],
    "Metascore": "N/A",
    "imdbRating": "9.2",
    "imdbVotes": "2,382,857",
    "imdbID": "tt0944947",
    "Type": "series",
    "totalSeasons": "8",
    "Response": "True"
  }






vi.mock('../services/apiServices', () => ({
    fetchItemInfo: vi.fn().mockResolvedValue({
        "Title": "The Red Spider",
        "Year": "2015",
        "Rated": "Not Rated",
        "Released": "27 Nov 2015",
        "Runtime": "90 min",
        "Genre": "Crime, Drama, Thriller",
        "Director": "Marcin Koszalka",
        "Writer": "Marcin Koszalka, Lukasz M. Maciejewski, Marta Szreder",
        "Actors": "Filip Plawiak, Adam Woronowicz, Julia Kijowska",
        "Plot": "When teenage boy Karol Kremer becomes an eyewitness of a brutal murder, he is not aware of how much influence that event will exert on his future.",
        "Language": "Polish",
        "Country": "Poland, Czech Republic, Slovakia",
        "Awards": "4 wins & 10 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjAyZjVkNjQtYmVkYS00YjRlLWFiYTctYWY2ZmE2YWRjMTY5XkEyXkFqcGc@._V1_SX300.jpg",
        "Ratings": [
          {
            "Source": "Internet Movie Database",
            "Value": "5.8/10"
          }
        ],
        "Metascore": "N/A",
        "imdbRating": "5.8",
        "imdbVotes": "1,492",
        "imdbID": "tt4817256",
        "Type": "movie",
        "Response": "True"
      }),
}))

describe("Item details component should work as intended", () => {

    const closeFunction = () => vi.fn()

    afterAll(() => {
        vi.clearAllMocks();
    })



    it("Component should display the name and year of item", async () => {
        render(<ItemDetails imdbID="tt4817256" detailClosed={closeFunction}/>)

        const movieNameAndYear = await screen.findByTestId("item-name-year")
        // const releasedDate = await screen.findByTestId("released-date")
        // const actors = await screen.findByTestId("actors")

        expect(movieNameAndYear).toHaveTextContent('The Red Spider - 2015')
    })


})