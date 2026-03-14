
   /** const url = 'https://api.themoviedb.org/3/authentication';
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDJmYjBkNWEyZDljOWNkZTNmNzlmNGNjMmY1MmZjYSIsIm5iZiI6MTc3MzM1NjcwOC41MjE5OTk4LCJzdWIiOiI2OWIzNDZhNDM5YjgyNzFjMmZjYmQ4OTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.R1JQM1e4PGriKXumRoK-PB8qeK3ybIyIL-hJX6TctKc'
    }
    };

    fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));
        */
export const TMDB_CONFIG = {
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p/w500',
    Headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}

export const fetchMovies = async ({ query }: { query: string }) => {
    const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;    const response = await fetch(endpoint,{
        method: 'GET',
        headers: TMDB_CONFIG.Headers
    });
    if(!response.ok){
        // @ts-ignore
        throw new Error('Failed to fetch movies',response.statusText);
    }
    const data = await response.json();
    return data.results;  
    }