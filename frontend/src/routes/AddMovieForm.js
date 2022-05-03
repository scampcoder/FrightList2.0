import React from "react";
import Navbar from "../components/NavbarComponent";

export default function AddMovieForm() {
    const [movieData, setMovieData] = React.useState({})

    return (
        <div>
            <Navbar />
            <form>
                <label>
                    Title
                    <input type="text" name="title"></input>
                </label>
                <label>
                    Image URL
                    <input type="text" name="image"></input>
                </label>
                <label>
                    Release Year
                    <input type="text" name="year"></input>
                </label>
                <label>
                    Description
                    <input type="text" name="description"></input>
                </label>
                <label>
                    Genre(s)
                    <input type="text" name="genres"></input>
                </label>
                <label>
                    Possible Triggers
                    <input type="text" name="triggerWarnings"></input>
                </label>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}