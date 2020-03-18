const API_KEY = "ccb53e9e05c7af5b49722a09e9e0bf71";

const useZomatoApi = {

  getRestaurantsByCity: search =>
    new Promise((resolve, reject) => {
      const CITY_API_URL = `https://developers.zomato.com/api/v2.1/cities?q=${search}
        `;

      fetch(CITY_API_URL, {
        method: "GET",
        headers: {
          "user-key": API_KEY
        }
      })
        .then(function (response) {
          return response.json();
        })
        .then(data => {
          console.log(data);
          const RESTAURANT_API_URL = `https://developers.zomato.com/api/v2.1/establishments?city_id=${data}`
          
            fetch(RESTAURANT_API_URL, {
              method: "GET",
              headers: {
                "user-key": API_KEY
              }
            })
              .then(function (response) {
                return response.json();
              }).then(data => {
                console.log(data)
              })
              .catch(err => reject(err));
        })
    }),
      byFood: search =>
      new Promise((resolve, reject) => {
        const MOVIE_API_URL = `https://www.omdbapi.com/?i=${search}&plot=full&apikey=${API_KEY}`;

        fetch(MOVIE_API_URL)
          .then(response => response.json())
          .then(jsonResponse => resolve(jsonResponse))
          .catch(err => reject(err));
      })
};
//useMovieApi.byCity("");
export default useZomatoApi;