<template>
      <div>
          <v-layout justify-start row>
            
        <v-flex  class="xs12 sm6 md3 lg3" >
           <v-layout justify-start  v-for="(city, index) in citys" :key="index.id">
         <span class="fed" @click="dar(city.id)"> {{city.name}} </span>
            </v-layout>
        </v-flex>
          <v-flex  class="xs12 sm6 md9 lg9">
              <span v-if="!daca" class="ferr">Loading</span>
         <v-layout justify-start wrap>
        <v-flex  class="xs12 sm6 md4 lg4 de"  v-for="(rest, index) in rests" :key="index.id">
            <span >
                 <v-card >
                       <v-img
                    :src="`${rest.restaurant.featured_image}`"
                    aspect-ratio="2.75"
                    >
                       </v-img>
                 </v-card>
            </span>
             <h3>{{rest.restaurant.name}}</h3>
            {{rest.restaurant.location.city}}
           Location: {{rest.restaurant.location.address}}
        </v-flex>
         </v-layout>
       </v-flex>
   </v-layout>
    </div>
</template>

<script>
   import { mapGetters} from 'vuex'

export default {
      data() {
        return {
            data: '',
            city: [{id:280, name: "New York"},{id:279, name: "Seattle"}, {id:278, name:"Austin"}, {id:277, name:"Houston"}, {id:276, name:"Dallas"}]
        }
    },
    computed:{
       rests () {
            return this.$store.state.cat
          }
    },
        async fetch({store}){
          await store.dispatch('setC', 280);   
        },
        methods: {
          dar(id) {
             this.$store.dispatch('setP', id);
             this.$store.dispatch('setC', id);   
          }
        }
}
</script>
<style>
 a {
   color: #fff;
   text-decoration: none;
 }
 .fer {
   padding:20px;
 }
 .de {
   padding: 10px;
 }
 .fed {
   margin-top:10px;
   cursor: pointer;
 }
 .ferr {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
 }
</style>

