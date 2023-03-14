import {render, screen} from "@testing-library/react"
import PostDog from "../pages/postDog/PostDog"

describe("frontend tests",()=>{
    test("El componente existe",()=>{
        render(<PostDog/>)
        const article = screen.getByRole("label", {name:"name"})
        expect(article).toBeIntheDocument()
    })
})