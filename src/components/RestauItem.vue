
      <template>
            <v-card>
              <v-img :src="restaurant.photos" aspect-ratio="1.7"></v-img>
              <v-card-title class="subheading font-weight-bold">{{ restaurant.name }}</v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item
                  v-for="(key, index) in filteredKeys"
                  :key="index"
                >
                  <v-list-item-content :class="{ 'blue--text': sortBy === key }">{{ key }}:</v-list-item-content>
                  <v-list-item-content class="align-end" :class="{ 'blue--text': sortBy === key }">{{ restaurant[key.toLowerCase()] }}</v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
      </template>

<script>
  export default {
    
    name: 'RestauItem',
    props : {
      restaurant : Object,
      keys : Array,
      sortBy : String
    },
    
    data: () => ({
      
    }),
    mounted(){
      console.log(this.restaurant);
      if(typeof this.restaurant.phone_numbers != undefined && typeof this.restaurant.phone_numbers != 'string')this.restaurant.phone_numbers = this.restaurant.phone_numbers.split(',')[0];
      if(typeof this.restaurant.cuisines != undefined && typeof this.restaurant.cuisines != 'string')this.restaurant.cuisines = this.restaurant.cuisines.split(',')[0];
      if(typeof this.restaurant.location != undefined)this.restaurant.location = this.restaurant.location.address;
      if(typeof this.restaurant.highlights != undefined && typeof this.restaurant.highlights != 'string')this.restaurant.highlights = this.restaurant.highlights[0];
      if(typeof this.restaurant.user_rating != undefined)this.restaurant.user_rating = this.restaurant.user_rating.aggregate_rating;
      console.log(this.restaurant);
      if(Object.keys(this.restaurant).includes('photos') == false)this.restaurant.photos = 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Pas_d%27image_disponible.svg';
      else {
        console.log(this.restaurant.photos[0].photo.url);
        this.restaurant.photos = this.restaurant.photos[0].photo.url;
      }
      console.log('photo');
      console.log(this.restaurant.photos);

    },
    computed: {
      
      filteredKeys () {
        return this.keys.filter(key => key !== `name` && key !== `photos` )
      },
    },
  }
  </script>
  <style>
  .floatR{
    float:right;
    width: 100%;
    height: 250px;
    margin-bottom: 20px;
  }
  .title-container{
    position:relative
  }
  </style>