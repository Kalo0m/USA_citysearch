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

          const RESTAURANT_API_URL = `https://developers.zomato.com/api/v2.1/search?entity_id=${data.location_suggestions[0].id}&entity_type=city&count=50&sort=rating&order=desc
          `
          
            fetch(RESTAURANT_API_URL, {
              method: "GET",
              headers: {
                "user-key": API_KEY
              }
            })
              .then(function (response) {
                return response.json();
              }).then(data => {
                resolve(data);
              })
              .catch(err => reject(err));
        })
    }),
      
};
//useMovieApi.byCity("");
export default useZomatoApi;