<template>
  <v-app>
    

    <v-content >
      <div v-if = "this.ville == ''">
        <SearchBar v-on:darkChanged="darkChanged" v-on:envoieVille="villeRecu" class='search-container'/>
      </div>
      <div v-else>
        
        <SearchBar v-on:darkChanged="darkChanged" v-on:envoieVille="villeRecu"/>
        <SelectButtons v-on:switchChange="switchValue"/>
        <div v-if="this.restauSelect==true"> 
          <ListeRestau v-bind:restaurants="restaurants"/>
        </div>
        <div v-else>
          <ListeBar v-bind:ville="ville"/>
        </div>
      </div>
    </v-content>
  </v-app>
</template>

<script>
  import zomato from "./zomato.js";

import SearchBar from './components/SearchBar';
import ListeRestau from './components/ListeRestau';
import SelectButtons from './components/SelectButtons';
import ListeBar from './components/ListeBar';
export default {
  name: 'App',

  components: {
    SearchBar,
    ListeRestau,
    SelectButtons,
    ListeBar,
  },

  data: () => ({
    ville : '',
    restauSelect : true,
    restaurants : []
  }),
  methods :{
    villeRecu : function(data){
      this.ville = data;
      console.log("coomposant updated");
      const ville = this.ville.split(',')[0];
      zomato.getRestaurantsByCity(ville).then(data=>{
        this.restaurants = data.restaurants.map(item=>item.restaurant);
        this.restaurants = this.restaurants.map(restaurant=>{
          if(typeof restaurant.phone_numbers != undefined && typeof restaurant.phone_numbers != 'string')restaurant.phone_numbers = restaurant.phone_numbers.split(',')[0];
          if(typeof restaurant.cuisines != undefined && typeof restaurant.cuisines != 'string')restaurant.cuisines = restaurant.cuisines.split(',')[0];
          if(typeof restaurant.location != undefined)restaurant.location = restaurant.location.address;
          if(typeof restaurant.highlights != undefined && typeof restaurant.highlights != 'string')restaurant.highlights = restaurant.highlights[0];
          if(typeof restaurant.user_rating != undefined)restaurant.user_rating = restaurant.user_rating.aggregate_rating;
          console.log('restau');
          console.log(restaurant);
          if(Object.keys(restaurant).includes('photos') == false)restaurant.photos = 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Pas_d%27image_disponible.svg';
          else {
            console.log(restaurant.photos[0].photo.url);
            restaurant.photos = restaurant.photos[0].photo.url;
          }
          return restaurant
        })
        console.log('les restaus');
        console.log(this.restaurants[0])
      }).catch(err=>console.log('erreur : '+err));
    },
    switchValue : function(data){
      console.log('evenement recu, valeur : '+data);
      this.restauSelect = data
    },
    darkChanged : function(data){
      console.log('evenement recu')
      this.$vuetify.theme.dark = data
    }
  },
  
};
</script>

<style scoped>
  .search-container{
    margin:40vh 20% 0 20%;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  }
</style>
