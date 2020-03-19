const API_KEY = "AIzaSyDaUmCs51pPFzPnI9oZzA8egp35R_GtF7w";
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const useMapApi = {
    getCities: ville => 
        
         new Promise((resolve, reject) => {
            const CITY_API_URL = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${ville}&types=(cities)&language=fr&key=${API_KEY}&components=country:us
              `;
            fetch(proxyurl + CITY_API_URL).then(response => {
                
                return response.json();
            }).then(data => {
                resolve(data);
            }).catch(err => reject(err));

        })
        

}
export default useMapApi;