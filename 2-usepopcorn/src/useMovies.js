import { useState,useEffect } from "react";


export function useMovies(query){
    
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, seterror] = useState("");


  const key = "19d3a0d3";

    const controller = new AbortController();
    useEffect(
        function () {
            // callback?.();
          async function fetchMovies() {
            try {
              setIsLoading(true);
              seterror("");
              const res = await fetch(
                `http://www.omdbapi.com/?apikey=${key}&s=${query}`,
                { signal: controller.signal }
              );
              if (!res.ok)
                throw new error("Someting went wrong while fetching movies");
              const data = await res.json();
              if (data.Response === "False") throw new error("Movie Not Found");
    
              setMovies(data.Search);
              seterror("");
            } catch (err) {
              // console.log(err?.message);
              if (err.name !== "AbortError") {
                seterror(error?.message);
              }
            } finally {
              setIsLoading(false);
            }
          }
          if (query.length < 3) {
            setMovies([]);
            seterror("");
            return;
          }
    
          fetchMovies();
    
          return function () {
            controller.abort();
          };
        },
        [query]
      );

      return {movies,isLoading,error};
} 