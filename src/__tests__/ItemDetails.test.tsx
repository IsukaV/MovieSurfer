import ItemDetails from "../components/ItemDetails";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { it, describe } from "vitest";
import { movieDetails, seriesDetails } from "./Models/fetchItemdata";
import { fetchItemInfo } from "../services/apiServices";

vi.mock("../services/apiServices", () => ({
    fetchItemInfo: vi.fn(),
  }));

const closeFunction = vi.fn();

beforeEach(()=> {
    render(<ItemDetails imdbID="tt4817256" detailClosed={closeFunction} />)
})

it("Component should display series details", async () => {
 
    fetchItemInfo.mockResolvedValue(seriesDetails);
  

  const plot = await screen.findByTestId("plot");
  const movieNameAndYear = await screen.findByTestId("item-name-year");
  const releasedDate = await screen.findByTestId("released-date");
  const actors = await screen.findByTestId("actors");
  const director = await screen.findByTestId("director");
  const genre = await screen.findByTestId("genre");
  const totalSeasons = await screen.findByTestId("total-seasons");

  expect(plot).toHaveTextContent(
    /Nine noble families fight for control over the lands of/
  );
  expect(movieNameAndYear).toHaveTextContent("Game of Thrones - 2011–2019");
  expect(releasedDate).toHaveTextContent("17 Apr 2011");
  expect(actors).toHaveTextContent(
    "Emilia Clarke, Peter Dinklage, Kit Harington"
  );
  expect(director).toHaveTextContent("N/A");
  expect(genre).toHaveTextContent("Action, Adventure, Drama");
  expect(totalSeasons).toHaveTextContent("8");

  vi.clearAllMocks();
});

it("Component should display movies details", async () => {
    fetchItemInfo.mockResolvedValue(seriesDetails);
  console.log("Ended the test");
 
  const plot = await screen.findByTestId("plot");
  const movieNameAndYear = await screen.findByTestId("item-name-year");
  const releasedDate = await screen.findByTestId("released-date");
  const actors = await screen.findByTestId("actors");
  const director = await screen.findByTestId("director");
  const genre = await screen.findByTestId("genre");

  expect(plot).toHaveTextContent(
    /When teenage boy Karol Kremer becomes an eyewitness/
  );
  expect(movieNameAndYear).toHaveTextContent("The Red Spider - 2015");
  expect(releasedDate).toHaveTextContent("27 Nov 2015");
  expect(actors).toHaveTextContent(
    "Filip Plawiak, Adam Woronowicz, Julia Kijowska"
  );
  expect(director).toHaveTextContent("Marcin Koszalka");
  expect(genre).toHaveTextContent("Crime, Drama, Thriller");

  vi.clearAllMocks();
});

// describe("Item details component should work as intended", () => {

//     beforeEach(() => {
//         vi.mock('../services/apiServices', () => ({
//             fetchItemInfo: vi.fn().mockResolvedValue({
//                 "Title": "The Red Spider",
//                 "Year": "2015",
//                 "Released": "27 Nov 2015",
//                 "Genre": "Crime, Drama, Thriller",
//                 "Director": "Marcin Koszalka",
//                 "Actors": "Filip Plawiak, Adam Woronowicz, Julia Kijowska",
//                 "Plot": "When teenage boy Karol Kremer becomes an eyewitness of a brutal murder, he is not aware of how much influence that event will exert on his future.",
//                 "imdbID": "tt4817256",
//               }),
//         }))

//     })

//     afterEach(() => {
//         vi.clearAllMocks();
//         console.log("Ended the afterAll()")
//     })

//     it("Component should display item details", async () => {
//         console.log("Ended the test")
//         render(<ItemDetails imdbID="tt4817256" detailClosed={closeFunction}/>)
//         const response = await fetchItemInfo('asdf')
//         console.log(response)
//         const plot = await screen.findByTestId("plot")
//         const movieNameAndYear = await screen.findByTestId("item-name-year")
//         const releasedDate = await screen.findByTestId("released-date")
//         const actors = await screen.findByTestId("actors")
//         const director = await screen.findByTestId("director")
//         const genre = await screen.findByTestId("genre")

//         expect(plot).toHaveTextContent(/When teenage boy Karol Kremer becomes an eyewitness/)
//         expect(movieNameAndYear).toHaveTextContent('The Red Spider - 2015')
//         expect(releasedDate).toHaveTextContent("27 Nov 2015")
//         expect(actors).toHaveTextContent("Filip Plawiak, Adam Woronowicz, Julia Kijowska")
//         expect(director).toHaveTextContent("Marcin Koszalka")
//         expect(genre).toHaveTextContent("Crime, Drama, Thriller")
//     })

//     it("Close button should work as intended", async () => {
//         render(<ItemDetails imdbID="tt4817256" detailClosed={closeFunction}/>)
//         const user = userEvent.setup();

//         const closeBtn = await screen.findByRole("close-button")

//         await user.click(closeBtn);
//         expect(closeFunction).toHaveBeenCalledTimes(1)

//     })

// })

// describe("Item details component should work as intended", () => {

//     beforeEach(() => {

//         vi.mock('../services/apiServices', () => ({
//             fetchItemInfo: vi.fn().mockResolvedValue({
//                 "Title": "Game of Thrones",
//                 "Year": "2011–2019",
//                 "Released": "17 Apr 2011",
//                 "Genre": "Action, Adventure, Drama",
//                 "Director": "N/A",
//                 "Actors": "Emilia Clarke, Peter Dinklage, Kit Harington",
//                 "Plot": "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
//                 "imdbID": "tt0944947",
//                 "totalSeasons": "8",
//               }),
//         }))

//     })

//     afterAll(() => {
//         vi.clearAllMocks();
//     })

//     it("Component should display item details", async () => {
//         render(<ItemDetails imdbID="tt4817256" detailClosed={closeFunction}/>)
//         const response = await fetchItemInfo('asdf')
//         console.log(response)
//         const plot = await screen.findByTestId("plot")
//         const movieNameAndYear = await screen.findByTestId("item-name-year")
//         const releasedDate = await screen.findByTestId("released-date")
//         const actors = await screen.findByTestId("actors")
//         const director = await screen.findByTestId("director")
//         const genre = await screen.findByTestId("genre")
//         const totalSeasons = await screen.findByTestId("total-seasons")

//         expect(plot).toHaveTextContent(/Nine noble families fight for control over the lands of/)
//         expect(movieNameAndYear).toHaveTextContent('Game of Thrones - 2011–2019')
//         expect(releasedDate).toHaveTextContent("17 Apr 2011")
//         expect(actors).toHaveTextContent("Emilia Clarke, Peter Dinklage, Kit Harington")
//         expect(director).toHaveTextContent("N/A")
//         expect(genre).toHaveTextContent("Action, Adventure, Drama")
//         expect(totalSeasons).toHaveTextContent("8")
//     })

//     it("Close button should work as intended", async () => {
//         render(<ItemDetails imdbID="tt4817256" detailClosed={closeFunction}/>)
//         const user = userEvent.setup();

//         const closeBtn = await screen.findByRole("close-button")

//         await user.click(closeBtn);
//         expect(closeFunction).toHaveBeenCalledTimes(1)

//     })

// })
