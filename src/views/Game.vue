<template>
    <div class="game">
        <GameBoard />
    </div>
</template>

<script>
import GameBoard from '@/components/GameBoard.vue';

export default {
    components: {
        GameBoard
    }
};
</script>

<style scoped>
.game {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #eeeeee;
}
</style>
