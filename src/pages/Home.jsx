import { getTrendingMovies } from "api/TheTrendingMovieApi";
import { useEffect, useState } from "react";
import { Container, MovieItem, MovieLink, MovieList, Title } from "./Home.styled";

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrendingMovies().then((res) => {
            setMovies(res);
        } )  
    },[])
    return (
        <>
            <Container>
            <Title>Trending today</Title>
            <MovieList>{movies.map((movie)=> {
                return (
                    <MovieItem key={movie.id}>
                        <MovieLink to={`/movies/${movie.id}`} state={{from: "/"}}>{movie.title}</MovieLink>
                    </MovieItem>
                )
            })}</MovieList>
                </Container>
        </>
    )
}
export default Home;