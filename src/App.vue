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
          <ListeRestau v-bind:ville="ville"/>
        </div>
        <div v-else>
          <ListeBar v-bind:ville="ville"/>
        </div>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import SearchBar from './components/SearchBar';
import ListeRestau from './components/ListeRestau';
import SelectButtons from './components/SelectButtons';
import ListeBar from './components/ListeBar';
import BeerApi from './beerApi.js';
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

  }),
  methods :{
    villeRecu : function(data){
      this.ville = data;
      console.log('ville recu : '+data);
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
  mounted(){
    BeerApi.getBieres(691).then(data=>console.log(data)).catch(err=>console.log(err));

  }
};
</script>

<style scoped>
  .search-container{
    margin:40vh 20% 0 20%;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  }
</style>
