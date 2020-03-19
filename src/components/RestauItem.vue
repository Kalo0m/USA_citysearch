<template>
    <v-card>
      
          
             <v-card-title class="title-container subheading font-weight-bold"><img class="floatR" :src="restaurant.photos[0].photo.url">               {{ restaurant.name }} </v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item>
                  <v-list-item-content>Calories :</v-list-item-content>
                  <v-list-item-content class="align-end">Titre</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Price :</v-list-item-content>
                  <v-list-item-content class="align-end">{{ restaurant.price_range }}/5</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Cuisine :</v-list-item-content>
                  <v-list-item-content class="align-end">{{ restaurant.cuisines }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>price for 2 :</v-list-item-content>
                  <v-list-item-content class="align-end">{{ restaurant.average_cost_for_two }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Phone :</v-list-item-content>
                  <v-list-item-content class="align-end">{{ restaurant.phone_numbers }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>delivering now</v-list-item-content>
                  <v-list-item-content class="align-end">{{ restaurant.is_delivering_now }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>highlight :</v-list-item-content>
                  <v-list-item-content class="align-end">{{ restaurant.highlights[0] }}</v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
</template>

<script>
  
  export default {
    
    name: 'RestauItem',
    props : {restaurant : Object},
    
    data: () => ({
      
    }),
    mounted(){
      this.restaurant.phone_numbers = this.restaurant.phone_numbers.split(',')[0]
      this.restaurant.cuisines = this.restaurant.cuisines.split(',')[0]

      console.log(this.restaurant)
    }
  }
  </script>
  <style>
  .floatR{
    float:right;
    width: 100%;
    height: 250px;;
    margin-bottom: 20px;
  }
  .title-container{
    position:relative
  }
  </style>