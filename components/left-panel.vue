<template>
    <div id="left-panel">
        <div class="left-top-container">
            <top-lights></top-lights>
        </div>
        <!-- Center Screen -->
        <div class="screen-container flex" v-if="Object.keys(allPokemon).length > 0 && Object.keys(selectedCards).length > 0">
            <card v-for="pokemon in selectedCards[`user${userNumber}`].cardsChosen"
                :key="pokemon"
                :pokemonUrl="allPokemon[pokemon.toLowerCase()].images.small"
            ></card>
        </div>
        <div class="buttons-container">
            <div class="upper-buttons-container">
            </div>
        </div>
    </div>
</template>

<script>
import Card from './card.vue';
import TopLights from './top-lights.vue';
import {mapGetters} from 'vuex';

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

  // created() {
  //   console.log(Object.keys(this.allPokemon));
  //   console.log(Object.keys(this.allPokemon).length);
  //   console.log(Object.keys(this.selectedCards));
  // }

}
</script>

<style scoped>
#left-panel {
  background-color: var(--main-bg-color);
  box-sizing: border-box;
  height: 100%;
  width: 50%;
  display: grid;
  grid-template-rows: 15% 80% 5%;
  border: solid black 5px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 7px;
}

.screen-container {
    padding: 30px;
    padding-top: 0px;
    overflow-y: auto;
}

.buttons-container {
  display: grid;
  grid-template-rows: 40% 60%;
}

.upper-buttons-container {
  display: flex;
  align-items: top;
  justify-content: flex-start;
}
</style>
