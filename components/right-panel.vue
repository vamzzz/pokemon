<template>
    <div id="right-panel">
        <!-- Blank container -->
        <div class="empty-container">
            <svg height="100%" width="100%">
              <polyline
                  points="0,0 0,80 438,80 458,145 750,145 750,0 0,0"
                  style="fill: #f2f2f2; stroke: none; stroke-width: 5"
              />
              <polyline
                  points="0,80 438,80 458,145 750,145"
                  style="fill: none; stroke: black; stroke-width: 5"
              />
            </svg>
        </div>
        <!-- Top screen -->
        <div class="top-screen-container">
          <div id="about-screen" class="right-panel-screen">
            {{ selectedCards[`user${userNumber}`].name }}
          </div>
        </div>
        <!-- Bottom screens -->
        <div class="bottom-screens-container">
          <div class="square-buttons-container">
            <div class="blue-square" v-for="row in Object.keys(selectedCards).length"
              :key="row"
              @click="setUserNumber(row)">
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex';

export default {
  components: {
  },

  data() {
    return {
    }
  },

  computed: {
    ...mapGetters([
      'selectedCards',
      'userNumber'
    ])
  },

  methods: {
    ...mapMutations([
      'setUserNumber'
    ])
  }

}
</script>

<style scoped>
#right-panel {
  background-color: var(--main-bg-color);
  box-sizing: border-box;
  position: relative;
  height: 100%;
  width: 50%;
  display: grid;
  grid-template-rows: 24% 10% 50% 26%;
  border-bottom: solid black 5px;
  border-bottom-right-radius: 10px;
}

#right-panel::before {
  content: '';
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 602px;
  border-right: solid black 5px;
  border-bottom-right-radius: 10px;
}
/* top screen */
.top-screen-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.right-panel-screen {
  font-family: 'Press Start 2P', cursive;
  width: 250px;
  height: 100px;
  background-color: var(--secondary-screen-bg-color);
  border: solid black 2px;
  border-radius: 4px;
  font-size: large;
  padding-left: 2px;
  padding-right: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

/* square buttons grid */
.square-buttons-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  flex-direction: row;
  flex-wrap: wrap;
}

.blue-squares-container {
  width: 650px;
  height: 150px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  z-index: 100;
}

.blue-square {
  border-radius: 2px;
  border: black 1.5px solid;
  background-color: var(--square-buttons-color);
  box-shadow: inset -2px -2px #3298cb;
  width: 80px;
  height: 80px;
  margin: 10px;
  cursor: pointer;
  z-index: 100000;
}

/* center buttons */
.center-buttons-container {
  display: flex;
  justify-content: space-around;
}

.center-left-container {
  display: grid;
}

.small-reds-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.small-reds-container .small-light {
  border: solid black 2px;
  width: 7px;
  height: 7px;
  margin-right: 10px;
  margin-top: 10px;
}
.small-reds-container .dot {
  height: 2.5px;
  width: 2.5px;
  top: 1px;
  left: 1px;
}

.white-squares-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.white-square {
  width: 25px;
  height: 25px;
  border-radius: 5px;
  border: black 2px solid;
  background-color: #ffffff;
  box-shadow: inset -2px -2px gray;
}

.center-right-container {
  display: grid;
}

.thin-buttons-container {
  display: flex;
  justify-content: space-between;
}

.thin-button {
  width: 35px;
  height: 2px;
  border: 2px solid black;
  background-color: var(--main-buttons-color);
  margin-left: 10px;
}
.yellow-button {
  justify-self: end;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: solid 2px black;
  margin-left: 7px;
}

.yellow-button .big-dot {
  height: 7px;
  width: 7px;
  position: relative;
  top: 3px;
  left: 5px;
  border-radius: 50%;
}

/* bottom screens */

.bottom-screens-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.bottom-screens-container .right-panel-screen {
  width: 64px;
  height: 25px;
}

.mention {
  margin-top: 10px;
  width: 150px;
  display: grid;
  text-align: center;
  font-size: x-large;
}
.links {
  display: flex;
  justify-content: space-between;
}
.link-logo {
  width: 25px;
  height: 25px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.codepen {
  background-image: url(https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Large.png);
}
.github {
  background-image: url(https://www.flaticon.com/svg/static/icons/svg/25/25231.svg);
}
.dev {
  background-image: url(https://raw.githubusercontent.com/gist/benhalpern/eff81b17359acafd17849146549b9291/raw/6de3cc24798bd3b133d4d89a1d87004c369eac46/dev-icon.svg);
}
.linkedin {
  background-image: url(https://www.flaticon.com/svg/static/icons/svg/25/25320.svg);
}
</style>
