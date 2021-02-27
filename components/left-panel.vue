<template>
    <div id="left-panel">
        <div class="left-top-container">
            <top-lights></top-lights>
        </div>
        <!-- Center Screen -->
        <div class="screen-container flex" v-if="Object.keys(allPokemon).length > 0 && Object.keys(selectedCards).length > 0">
            <card v-for="(index) in 14"
                :key="index"
                :pokemonUrl="pokemonUrl(index)"
                :pokemonName="pokemonName(index)"
            ></card>
        </div>
        <div class="buttons-container">
            <div class="blue-square" v-for="row in Object.keys(selectedCards).length"
              :key="row"
              @click="setUserNumber(row)"
              >
              <img src="../assets/vamshi.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import Card from './card.vue';
import TopLights from './top-lights.vue';
import {mapGetters, mapMutations} from 'vuex';

export default {
  components: {
    Card,
    TopLights
  },

  data() {
    return {
        testPokemon: "https://images.pokemontcg.io/base1/1.png"
    }
  },

  computed: {
    ...mapGetters([
      'allPokemon',
      'selectedCards',
      'userNumber'
    ]),

  },

  methods: {
    ...mapMutations([
      'setUserNumber'
    ]),


    pokemonUrl(index) {
      let alreadySelectedCard = this.selectedCards[`user${this.userNumber}`].cardsChosen
      if (index <= alreadySelectedCard.length) {
        let pokemonName = this.selectedCards[`user${this.userNumber}`].cardsChosen[index-1]
        return this.allPokemon[pokemonName.toLowerCase()].images.small;
      } else {
        return 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/201.png';
      }      
    },
    
    pokemonName(index) {
      let alreadySelectedCard = this.selectedCards[`user${this.userNumber}`].cardsChosen
      if (index <= alreadySelectedCard.length) {
        let pokemonName = this.selectedCards[`user${this.userNumber}`].cardsChosen[index-1]
        return this.allPokemon[pokemonName.toLowerCase()].name;
      } else {
        return "TBD";
      }
    },
    
  }

}
</script>

<style scoped>
#left-panel {
  background-color: var(--main-bg-color);
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 15% 70% 15%;
  border: solid black 5px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 7px;
  max-width: 1000px;
}

.screen-container {
    margin: 15px;
    padding-top: 0px;
    overflow-y: auto;
    justify-content: space-around;
}

.buttons-container {
  border-top: solid black 5px;
  display: flex;
  align-items: center;
  overflow-x: auto;
}

.upper-buttons-container {
  display: flex;
  align-items: top;
  justify-content: flex-start;
}

.blue-square {
  border-radius: 2px;
  border: black 3px solid;
  background-color: var(--square-buttons-color);
  box-shadow: inset -2px -2px #3298cb;
  width: 80px;
  height: 80px;
  margin: 10px;
  cursor: pointer;
  z-index: 100000;
}

img {
  width: 75px;
  height: 75px;
}
</style>
