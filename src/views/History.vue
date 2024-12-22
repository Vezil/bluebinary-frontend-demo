<template>
    <div class="history">
        <h1>Historia Gier</h1>
        <ul>
            <li v-for="(game, index) in gameHistory" :key="index">
                <span>{{ game.date }}</span> - Próby: {{ game.attempts }} -
                Czas: {{ game.time }}s
            </li>
        </ul>
        <button @click="goBack">Wróć do menu</button>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();
        const gameHistory = ref([]);

        onMounted(() => {
            const history =
                JSON.parse(localStorage.getItem('gameHistory')) || [];
            gameHistory.value = history;
        });

        const goBack = () => {
            router.push({ name: 'home' });
        };

        return {
            gameHistory,
            goBack
        };
    }
};
</script>

<style scoped>
.history {
    padding: 20px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin-bottom: 10px;
}

button {
    margin-top: 20px;
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
