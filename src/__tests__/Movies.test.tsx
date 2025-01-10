import Movies from "../components/Movie/Movies";
import { render, screen } from "@testing-library/react";

describe('Testing movies component', () => {
    it("Movies component should load", () => {
        render(<Movies />)

        const text = screen.getByTestId('search-txt')

        expect(text).toBeInTheDocument();
    })
})