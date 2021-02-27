export const state = () => ({
    selectedCards: {},
    allPokemon: {},
    userNumber: 1,

    newData: {
        'user1': {
            'cardsChosen': [
                'Kadabra',
                'Abra',
                'Squirtle'
            ],
            'igHandle': 'vamshi_adimulam',
            'name': 'Vamshi',
            'twitterHandle': 'vamshiAdimulam'
        },
        'user2': {
            'cardsChosen': [
                'Charizard',
                'Mewtwo',
                'diglett'
            ],
            'igHandle': '',
            'name': '',
            'twitterHandle': ''
        },
        'user3': {
            'cardsChosen': [
                'doduo',
                'dratini'
            ],
            'igHandle': '',
            'name': '',
            'twitterHandle': ''
        },
        'user4': {
            'cardsChosen': [
                'energy removal',
                'fighting energy'
            ],
            'igHandle': '',
            'name': '',
            'twitterHandle': ''
        },
        'user5': {
            'cardsChosen': [
                'grass energy',
                'growlithe'
            ],
            'igHandle': '',
            'name': '',
            'twitterHandle': ''
        },
        'user6': {
            'cardsChosen': [
                'gyarados',
                'ivysaur'
            ],
            'igHandle': '',
            'name': '',
            'twitterHandle': ''
        },
        'user7': {
            'cardsChosen': [
                'koffing',
                'machoke'
            ],
            'igHandle': '',
            'name': '',
            'twitterHandle': ''
        },
        'user8': {
            'cardsChosen': [
                'metapod',
                'nidoking'
            ],
            'igHandle': '',
            'name': '',
            'twitterHandle': ''
        }
    }
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
    newData: (state) => state.newData
}
