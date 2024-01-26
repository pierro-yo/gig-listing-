import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Gig from "./src/Gig";
import { expect } from "vitest";

test("Renders with the correct header", () => {
    render(<Gig header = "Header"/>)
        expect(screen.getByRole("heading")).toHaveTextContent("Header")
})

test("Renders with the correct image", () => {
    render (<Gig />)
        const image = screen.getByRole('img')
        expect(image).toHaveAttribute('src', '/src/assets/sad_programmer.jpg')
})

test("Renders with the correct description paragraph", () => {
    render(<Gig description = "some info"/>)
        expect(screen.getByTestId("description")).toHaveTextContent("some info")
})

test("Renders with the correct time date", () => {
    render(<Gig timeDate = "29/09/24"/>)
        expect(screen.getByTestId("timeDate")).toHaveTextContent("29/09/24")
})

test("Renders with the correct location", () => {
    render(<Gig location = "singapore"/>)
        expect(screen.getByTestId("location")).toHaveTextContent("singapore")
})