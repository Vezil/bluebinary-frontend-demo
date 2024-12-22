<template>
    <div class="game-board" @mousemove="parallaxEffect">
        <div class="grid">
            <Card
                v-for="(card, index) in shuffledCards"
                :key="card.id"
                :image="card.image"
                :index="index"
                :isFlipped="flippedCards.includes(card.id)"
                :isMatched="matchedCards.includes(card.id)"
                :canvasWidth="cardWidth"
                :canvasHeight="cardHeight"
                @flip="flipCard"
            />
        </div>
        <StatsPanel
            :attempts="attempts"
            :time="elapsedTime"
            :difficulty="difficulty"
        />
    </div>
</template>

<script>
import { onMounted, watch } from 'vue';
import { useGameStore } from '@/store/gameStore.js';
import Card from './Card.vue';
import StatsPanel from './StatsPanel.vue';

export default {
    components: {
        Card,
        StatsPanel
    },
    setup() {
        const {
            state,
            shuffledCards,
            startGame,
            flipCard,
            saveGameHistory,
            updateElapsedTime,
            attempts,
            elapsedTime,
            difficulty
        } = useGameStore();

        watch(
            () => state.elapsedTime,
            () => {
                updateElapsedTime();
            }
        );

        onMounted(() => {
            startGame();
        });

        return {
            shuffledCards,
            flipCard,
            attempts,
            difficulty,
            elapsedTime,
            state,
            saveGameHistory
        };
    }
};
</script>

<style scoped>
.game-board {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    transform: translate3d(var(--mouse-x), var(--mouse-y), 0);
}
</style>
