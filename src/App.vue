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
