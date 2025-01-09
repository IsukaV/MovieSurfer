import { render, screen } from '@testing-library/react';
import Home from "../components/Home";

test("testing home", () => {
    render(<Home />)

    const header = screen.getByText(/Browse movies/i)

    expect(header).toBeInTheDocument();
    
})