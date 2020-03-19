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
            <v-card>
              <v-card-title class="title-container subheading font-weight-bold"><img class="floatR" :src="item.photos[0].photo.url">               {{ item.name }} </v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item>
                  <v-list-item-content>Calories :</v-list-item-content>
                  <v-list-item-content class="align-end">Titre</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Price :</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.price_range }}/5</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Cuisine :</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.cuisines }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Average price for 2 :</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.average_cost_for_two }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Phone :</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.phone_numbers }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>is delivering now :</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.is_delivering_now }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>highlight :</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.highlights[0] }}</v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
    </div>
</template>

<script>
  
  import zomato from "../zomato.js";

  export default {
    
    name: 'ListeRestau',
    props : ['ville'],
    data: () => ({
      restaurants : []
    }),
    
    mounted() {
      const ville = this.ville.split(',')[0];
      console.log('premier element : '+ville);
      zomato.getRestaurantsByCity(ville).then(data=>{
        console.log('aaaa');
        this.restaurants = data.restaurants.map(item=>item.restaurant);
        console.log('restaus apres modif : ');
        console.log(this.restaurants);
      }).catch(err=>console.log('erreur : '+err));
    }
  }
  </script>
  <style>
  .floatR{
    float:right;
    width: 75px;
    height:75px;
  }
  .container{
    margin:2%
  }
  .title-container{
    width:100%
  }
  </style>
