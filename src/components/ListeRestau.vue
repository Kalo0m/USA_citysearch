<template>
    <div class="container">
      
       <v-row>
          <v-col
            v-for="item in this.restaurants"
            :key="item.id"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <RestauItem v-bind:restaurant="item"/>
          </v-col>
        </v-row>
    </div>
</template>

<script>
  
  import zomato from "../zomato.js";
  import RestauItem from './RestauItem';

  export default {
    
    name: 'ListeRestau',
    components: {
      RestauItem
    },
    props : ['ville'],
    data: () => ({
      restaurants : [],
      exemple : 'contenu'
    }),
    
    mounted() {
      const ville = this.ville.split(',')[0];
      console.log('premier element : '+ville);
      zomato.getRestaurantsByCity(ville).then(data=>{
        this.restaurants = data.restaurants.map(item=>item.restaurant);
        console.log('restaus apres modif : ');
        console.log(this.restaurants);
      }).catch(err=>console.log('erreur : '+err));
    }
  }
  </script>
  <style>
  
  .container{
    margin:2%
  }
  .title-container{
    width:100%
  }
  </style>
