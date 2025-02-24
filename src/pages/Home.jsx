import "../css/Home.css"
import MovieCard from "../components/MovieCard"
import { useState } from "react";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "John Wick", release_date: "2014"},
        { id: 2, title: "John Wick: Chapter 2", release_date: "2017"},
        { id: 3, title: "John Wick: Chapter 3", release_date: "2019"},
        { id: 4, title: "John Wick: Chapter 4", release_date: "2022"}
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="search" 
                    className="search-input" 
                    placeholder="Search for a movie..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}/>

                <button type="submit">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
        </div>
    )
}

export default Home;