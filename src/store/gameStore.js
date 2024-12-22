import { reactive, computed } from 'vue';

export const useGameStore = () => {
    const state = reactive({
        cards: [],
        flippedCards: [],
        matchedCards: [],
        attempts: 0,
        elapsedTime: 0,
        startTime: 0,
        difficulty: 1
    });

    const shuffledCards = computed(() => {
        const allCards = [...state.cards, ...state.cards];
        return shuffle(allCards);
    });

    const shuffle = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    const startGame = () => {
        state.flippedCards = [];
        state.matchedCards = [];
        state.attempts = 0;
        state.startTime = Date.now();
        state.elapsedTime = 0;
    };

    const flipCard = (cardId) => {
        if (state.flippedCards.length < 2) {
            state.flippedCards.push(cardId);
            if (state.flippedCards.length === 2) {
                checkMatch();
            }
        }
    };

    const checkMatch = () => {
        const [firstCardId, secondCardId] = state.flippedCards;
        if (firstCardId === secondCardId) {
            state.matchedCards.push(firstCardId);
        }
        setTimeout(() => {
            state.flippedCards = [];
        }, 1000);
        state.attempts++;
    };

    const saveGameHistory = () => {
        const gameHistory =
            JSON.parse(localStorage.getItem('gameHistory')) || [];
        gameHistory.push({
            attempts: state.attempts,
            time: state.elapsedTime,
            date: new Date().toISOString()
        });
        localStorage.setItem('gameHistory', JSON.stringify(gameHistory));
    };

    const updateElapsedTime = () => {
        state.elapsedTime = Math.floor((Date.now() - state.startTime) / 1000);
    };

    return {
        state,
        shuffledCards,
        startGame,
        flipCard,
        saveGameHistory,
        updateElapsedTime
    };
};
