<template>
    <div class="left-top-container">
        <div class="lights-container">
          <div class="big-button">
            <div class="big-light-boarder">
                <div class="big-light blue">
                <div class="big-dot light-blue"></div>
                </div>
            </div>
            <div class="small-lights-container">
                <div class="small-light red">
                <div class="dot light-red"></div>
                </div>
                <div class="small-light yellow">
                <div class="dot light-yellow"></div>
                </div>
                <div class="small-light green">
                <div class="dot light-green"></div>
                </div>
            </div>
          </div>
          <div class="yellow-button yellow" @click="getDataFromFirebase()">
            <img src="../assets/refresh.png" alt="">
          </div>
        </div>
        <svg height="100" width="100%" class="left-svg">
            <polyline
                points="0,30 70,30 90,5 1050,5"
                style="fill: none; stroke: black; stroke-width: 5"
            />
        </svg>
    </div>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
  components: {
  },

  data() {
    return {
        testPokemon: "https://images.pokemontcg.io/base1/1.png"
    }
  },

  computed: {
  },

  methods: {
    ...mapMutations([
      'setSelectedCards'
    ]),

    async getDataFromFirebase() {
      const selectedCards = this.$fire.database.ref('selectedCards');
      const selectedCardsData = await selectedCards.once('value');
      this.setSelectedCards(selectedCardsData.val());
    }
  }

}
</script>

<style scoped>
.left-top-container {
    padding-top: 10px;
}

.big-button {
  display: flex;
}

.lights-container {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-svg {
  z-index: +5;
  left: 300px;
}

.big-light-boarder {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  height: 60px;
  width: 60px;
  border: solid black;
  border-radius: 50%;
  background-color: white;
}

.big-light {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: solid black;
}

.big-dot {
  height: 15px;
  width: 15px;
  position: relative;
  top: 7px;
  left: 10px;
  border-radius: 50%;
}

.small-lights-container {
  margin-left: 15px;
  margin-top: 10px;
  width: 70px;
  height: 100%;
  display: flex;
  align-self: start;
  justify-content: space-around;
}

.small-light {
  border: solid black;
  width: 16px;
  height: 16px;
  border-radius: 50%;
}
.dot {
  height: 5px;
  width: 5px;
  position: relative;
  top: 3px;
  left: 3px;
  border-radius: 50%;
}

.yellow-button {
  justify-self: end;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: solid 2px black;
  margin-left: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
}

.yellow-button .big-dot {
  height: 10px;
  width: 10px;
  position: relative;
  top: 3px;
  left: 5px;
  border-radius: 50%;
}

.yellow {
  background-color: #fecb65;
}

img {
  width: 30px;
  height: 30px;
}
</style>
