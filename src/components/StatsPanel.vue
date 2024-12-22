<template>
    <div class="stats-panel">
        <p>Trudność: {{ difficulty }}</p>
        <p>Próby: {{ attempts }}</p>
        <p>Czas gry: {{ formattedTime }}</p>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useGameStore } from '@/store/gameStore.js';

export default {
    setup() {
        const { state } = useGameStore();

        const formattedTime = computed(() => {
            const minutes = Math.floor(state.elapsedTime / 60);
            const seconds = state.elapsedTime % 60;
            return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        });

        return {
            formattedTime,
            attempts: state.attempts,
            difficulty: state.difficulty
        };
    }
};
</script>

<style scoped>
.stats-panel {
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px;
    color: white;
    font-size: 14px;
    border-radius: 5px;
}
</style>
