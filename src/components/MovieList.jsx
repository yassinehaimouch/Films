import React from "react";
import MovieCard from "./MovieCard";
import FP from "../assets/spiderman.png";

const MovieList = ({ searchValue }) => {
  const films = [
    { name: "Spiderman", image: FP, link: "/", rate: 10 },
    { name: "Batman", image: FP, link: "/", rate: 5 },
    { name: "Superman", image: FP, link: "/", rate: 9 },
    { name: "Deadpool", image: FP, link: "/", rate: 6 },
    { name: "Flash", image: FP, link: "/", rate: 4 },
    { name: "Hulck", image: FP, link: "/", rate: 10 },
  ];

  return (
    <div className="px-[50px] flex gap-[20px] my-[50px] flex-wrap justify-center">
      {films
        .filter((el) => el.name.toLowerCase().includes(searchValue))
        .map((film, index) => (
          <MovieCard
            key={index}
            name={film.name}
            image={film.image}
            link={film.link}
            rate={film.rate}
          />
        ))}
    </div>
  );
};

export default MovieList;
