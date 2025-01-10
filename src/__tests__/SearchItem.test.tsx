import {render,screen} from "@testing-library/react";
import Item from "../components/SearchItem";

describe("Testing SearchBar component",()=>{
    const item={Title:"amaran" }

    const renderItems = () =>{
        render(<Item item={item}/>)
    }

    test("Testing card title",()=>{
        renderItems()
        expect(screen.getByTestId("item-title")).toHaveTextContent(item.Title)
    })
})