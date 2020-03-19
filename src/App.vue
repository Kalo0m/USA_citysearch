<template>
  <v-app>
    

    <v-content >
      <div v-if = "this.ville == ''">
        <SearchBar v-on:envoieVille="villeRecu" class='search-container'/>
      </div>
      <div v-else>
        <SearchBar v-on:envoieVille="villeRecu"/>
        <ListeRestau v-bind:ville="ville"/>

      </div>
    </v-content>
  </v-app>
</template>

<script>
import SearchBar from './components/SearchBar';
import ListeRestau from './components/ListeRestau';

export default {
  name: 'App',

  components: {
    SearchBar,
    ListeRestau
  },

  data: () => ({
    ville : ''
  }),
  methods :{
    villeRecu : function(data){
      this.ville = data;
      console.log('ville recu : '+data);
    }
  }
};
</script>

<style scoped>
  .search-container{
    margin:40vh 20% 0 20%;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  }
</style>
