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
import {mapMutations, mapGetters} from 'vuex';

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
    ...mapGetters([
      'selectedCards'
    ])
  },

  methods: {
    ...mapMutations([
      'setAllPokemon',
      'setSelectedCards'
    ]),
    
    async setDataInFirebase() {
      await this.$fire.database.ref('pokemon').set(this.transformedPokemonData);
    },

    async setUsersInFirebase() {
      await this.$fire.database.ref('selectedCards').set(this.selectedCards);
    },

    async getDataFromFirebase() {
      const selectedCards = this.$fire.database.ref('selectedCards');
      const selectedCardsData = await selectedCards.once('value');
      this.setSelectedCards(selectedCardsData.val());
    }
  },

  async created() {
    const pokemonRef = this.$fire.database.ref('pokemon');
    const pokemonData = await pokemonRef.once('value');
    this.setAllPokemon(pokemonData.val());

    await this.getDataFromFirebase()
  }
}
</script>

<style>
.flex {
  display: flex;
  flex-wrap: wrap;
}
body {
  background-image: url(../assets/background.jpg); 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  resize: both;
  overflow: scroll;
}

img.bg {
  /* Set rules to fill background */
  min-height: 100%;
  min-width: 1024px;
	
  /* Set up proportionate scaling */
  width: 100%;
  height: auto;
	
  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;
}

.container {
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  width: 90%;
  height: 100vh;
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
