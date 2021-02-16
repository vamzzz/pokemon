<template>
  <div class="container">
    
    <pokedex></pokedex>
    <!-- <button
      @click="setUsersInFirebase"
    >
      Hello
    </button> -->
    
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue';
import Pokedex from '~/components/pokedex.vue'
import axios from "axios";
import {mapMutations} from 'vuex';

export default {
  components: {
    Logo, Pokedex
  },

  data() {
    return {
      allPokemon: [],
      firebaseValue: null,
    }
  },

  computed: {
  },

  methods: {
    ...mapMutations([
      'setAllPokemon'
    ]),
    
    async setDataInFirebase() {
      await this.$fire.database.ref('pokemon').set(this.transformedPokemonData);
    },

    async setUsersInFirebase() {
      await this.$fire.database.ref('selectedCards').set(this.selectedCards);
    }
  },

  async mounted() {
    axios.get("https://api.pokemontcg.io/v2/cards?q=set.id:base1").then(response => {
      this.setAllPokemon(response.data.data)
      // this.allPokemon = response.data.data;
    })
    // const messageRef = this.$fire.database.ref('test');
    // const snapshot = await messageRef.once('value');
    // this.firebaseValue = snapshot.val();
    // await this.setDataInFirebase();
  }
}
</script>

<style>
.flex {
  display: flex;
  flex-wrap: wrap;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
