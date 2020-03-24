//const API_KEY = "69ed27a98b6f62b6b9d3e6aefd82f4ab";
const useMapApi = {
    getBars: ville => 
        
         new Promise((resolve, reject) => {
            const CITY_API_URL = `https://data.opendatasoft.com/api/records/1.0/search/?dataset=open-beer-database-breweries%40public-us&facet=country&facet=city&refine.city=${ville}
              `;
              console.log(CITY_API_URL)
            fetch(CITY_API_URL)
            .then(response => 
                 response.json()
            ).then(data => {
            
                resolve(data);
            }).catch(err => reject(err));

        }),
    getBieres : id=>   new Promise((resolve, reject) => {
        const CITY_API_URL = `https://data.opendatasoft.com/api/records/1.0/search/?dataset=open-beer-database%40public-us&facet=brewery_id&refine.brewery_id=${id}
          `;
          console.log(CITY_API_URL)
        fetch(CITY_API_URL)
        .then(response => 
             response.json()
        ).then(data => {
        
            resolve(data);
        }).catch(err => reject(err));

    })

}
export default useMapApi;