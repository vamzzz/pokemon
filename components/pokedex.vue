<template>
    <div id="pokedex">
        <left-panel></left-panel>
        <!-- <right-panel></right-panel> -->
    </div>
</template>

<script>
import RightPanel from './right-panel';
import LeftPanel from './left-panel';
import {mapGetters} from 'vuex';

export default {

    components: {
        RightPanel,
        LeftPanel
    },

    data() {
        return {

        }
    },

    computed: {
      ...mapGetters([
        'userNumber'
      ])
    },

}
</script>

<style>

#pokedex {
    height: 90vh;;
    display: flex;
    border-radius: 10px;
}

@media only screen and (max-width: 600px) {
    #pokedex {
        width: 90%;
    }
}

:root {
  --main-bg-color: #fe0065;
  --secondary-bg-color: #f2f2f2;
  --main-screen-bg-color: #98cb98;
  --secondary-screen-bg-color: #9e9d9d;
  --main-buttons-color: #585858;
  --square-buttons-color: #7ca9f7;
}

.red {
  background-color: #ff0000;
}
.yellow {
  background-color: #fecb65;
}
.green {
  background-color: #32cb65;
}
.blue {
  background-color: #3298cb;
}

.light-blue {
  background-color: #85bdfe;
}
.light-red {
  background-color: #fe98cb;
}
.light-yellow {
  background-color: #fefecb;
}
.light-green {
  background-color: #98fe00;
}

* {
  margin: 0;
  padding: 0;
}

body {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--secondary-bg-color);
}
</style>
