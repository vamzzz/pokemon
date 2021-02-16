export const state = () => ({
    counter: 0,
    selectedCards: {
        1: {
          cardsChosen:[
            'kadabra',
            'abra',
            'squirtle'
          ],
          name: 'Vamshi',
          twitterHandle: 'vamshiAdimulam',
          igHandle: 'vamshi_adimulam'
        }
    },
    allPokemon: [],
  })
  
export const mutations = {
    setAllPokemon: (state, payload) => state.allPokemon = payload,
}

export const getters = {
    counter: (state) => state.counter,
    selectedCards: (state) => state.selectedCards[1].cardsChosen,
    transformedPokemonData: (state) => {
        let transformedData = {};
        for (let pokemon of state.allPokemon) {
          let name = pokemon.name.toLowerCase();
          transformedData[name] = {}
          let optionalKeys = ['types', 'flavorText', 'hp', 'evolvesFrom', 'evolvesTo', 'weaknesses', 'resistances', 'attacks', 'artist',
            'name', 'images', 'subtypes', 'number', 'nationalPokedexNumbers']
          for (let key of optionalKeys) {
            if (key in pokemon) {
              transformedData[name][key] = pokemon[key];
            }
          }
        }
        return transformedData;
      }
}
