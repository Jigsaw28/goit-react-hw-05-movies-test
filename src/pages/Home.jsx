import { getTrendingMovies } from "api/TheTrendingMovieApi";
import { Header } from "components/Header/Header";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrendingMovies().then((res) => {
            setMovies(res);
        } )  
    },[])
    return (
        <>
            <Header />
            <h1>Trending today</h1>
            <ul>{movies.map((movie)=> {
                return (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`} state={{from: "/"}}>{movie.title}</Link>
                    </li>
                )
            })}</ul>
        </>
    )
}
export default Home;