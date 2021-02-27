<template>
    <div class="screen">
        <div class="top-screen-lights">
            <div class="mini-light red"></div>
            <div class="mini-light red"></div>
        </div>
        <div id="main-screen" :style="`background-image: url(${pokemonUrl})`"></div>
        <div class="bottom-screen-lights">
            <div class="small-light red">
                <div class="dot light-red"></div>
            </div>
            <p> {{ pokemonName }}</p>
            <div class="burger">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  props: ['pokemonUrl', 'pokemonName'],

  data() {
    return {
        testPokemon: "https://images.pokemontcg.io/base1/1.png"
    }
  },

  computed: {
    imageSource() {
      if (this.pokemonUrl.includes('https')) {
        return `url(${this.pokemonUrl})`
      } else {
        return this.pokemonUrl
      }
    }
  },

}
</script>

<style scoped>
.screen {
  width: 150px;
  height: 210px;
  border: solid black;
  border-radius: 0 0 0 17%;
  display: grid;
  grid-template-rows: 10% 72% 18%;
  background-color: white;
  margin: 5px;
}

.top-screen-lights {
  width: 50%;
  margin-top: 2px;
  display: flex;
  justify-self: center;
  justify-content: center;
  align-items: center;
}

.mini-light {
  border: solid black 1px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin-right: 7px;
}

#main-screen {
  height: 100%;
  width: 75%;
  justify-self: center;
  background-color: var(--main-screen-bg-color);
  border: solid black 2px;
  border-radius: 5%;
  background-image: url(https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.bottom-screen-lights {
  display: flex;
  margin-top: 5px;
  width: 75%;
  justify-self: center;
  justify-content: space-between;
  align-items: center;
}

.bottom-screen-lights .small-light {
  border: solid black 2px;
  width: 12px;
  height: 12px;
}

.bottom-screen-lights .dot {
  height: 4px;
  width: 4px;
  top: 2.5px;
  left: 2px;
}

.line {
  width: 18px;
  height: 2px;
  background-color: black;
  margin-top: 2px;
}
</style>
