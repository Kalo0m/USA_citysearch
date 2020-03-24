<template>
    <div class="text-center">
        <div v-if = "this.restauSelect == true" >

                <v-btn class="ma-4 mt-10" disabled>Restaurants</v-btn>
                <v-btn class="ma-4 mt-10" @click="switchItem">Bars</v-btn>
        </div>
        <div v-else>

                <v-btn class="ma-4 mt-10" @click="switchItem">Restaurants</v-btn>
                <v-btn class="ma-4 mt-10" disabled >Bars</v-btn>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SelectButtons',
    data(){
        return {
            restauSelect : true
        }
    },
    methods : {
        switchItem : function(){
            this.restauSelect = !this.restauSelect
            console.log('evenement envoyé');
            this.$emit('switchChange',this.restauSelect);
        }
    }
}
</script>