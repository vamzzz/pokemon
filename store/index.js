export const state = () => ({
    selectedCards: {},
    allPokemon: {},
    userNumber: 1
  })
  
export const mutations = {
    setAllPokemon: (state, payload) => state.allPokemon = payload,
    setUserNumber: (state, payload) => state.userNumber = payload,
    setSelectedCards: (state, payload) => state.selectedCards = payload,
}

export const getters = {
    selectedCards: (state) => state.selectedCards,
    allPokemon: (state) => state.allPokemon,
    userNumber: (state) => state.userNumber,
}
