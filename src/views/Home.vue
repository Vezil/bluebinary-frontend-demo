<template>
    <div class="home">
        <h1>Gra Memory - CS2</h1>
        <button @click="startNewGame">Nowa Gra</button>
        <button @click="viewGameHistory">Historia Gier</button>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();

        const startNewGame = () => {
            router.push({ name: 'game' });
        };

        const viewGameHistory = () => {
            router.push({ name: 'history' });
        };

        return {
            startNewGame,
            viewGameHistory
        };
    }
};
</script>

<style scoped>
.home {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    background: #f5f5f5;
}

button {
    margin: 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #ff9d00;
    border: none;
    border-radius: 5px;
    color: white;
}

button:hover {
    background-color: #ff6f00;
}
</style>
