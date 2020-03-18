const API_KEY = "AIzaSyBl7aFudbT6C_h5C4LDCbvMqGpE5_khQLk";

const useMapApi = {
    getCities: ville => {
        new Promise((resolve, reject) => {
            const CITY_API_URL = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${ville}&types=(cities)&language=fr&key=${API_KEY}&components=country:us
              `;
            console.log(CITY_API_URL);
            fetch(CITY_API_URL, {
                mode: 'no-cors',
                method: "GET"
            }).then(response => {
                console.log('res de fetch map api json : ');
                console.log(response);
                return response.json();
            }).then(data => {
                console.log('res de fetch map api : '); 
                console.log(data);
                resolve(data);
            }).catch(err => reject(err));

        })}
        

}
export default useMapApi;