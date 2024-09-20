const API_KEY="39847028cb95bac3df3395fe8c597707"

export default{
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchKdramas: `/discover/tv?api_key=${API_KEY}&with_genres=18&with_origin_country=KR`,
    fetchChineseMovies: `/discover/movie?api_key=${API_KEY}&with_origin_country=CN`,
    fetchJapaneseMovies: `/discover/movie?api_key=${API_KEY}&with_origin_country=JP`,





}