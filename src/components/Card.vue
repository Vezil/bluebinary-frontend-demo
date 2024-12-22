<template>
    <div class="card" @click="flipCard">
        <canvas
            v-if="flipped"
            ref="canvas"
            :width="canvasWidth"
            :height="canvasHeight"
        ></canvas>
        <div v-else class="card-back" :style="cardStyle"></div>
    </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
    props: {
        image: String,
        id: Number,
        index: Number,
        isFlipped: Boolean,
        isMatched: Boolean,
        canvasWidth: Number,
        canvasHeight: Number
    },
    setup(props, { emit }) {
        const flipped = ref(props.isFlipped);
        const canvas = ref(null);
        const context = ref(null);

        watch(
            () => flipped.value,
            () => {
                if (flipped.value) {
                    drawCanvas();
                }
            }
        );

        const drawCanvas = () => {
            if (canvas.value) {
                context.value = canvas.value.getContext('2d');
                const img = new Image();
                img.src = props.image;
                img.onload = () => {
                    context.value.drawImage(
                        img,
                        0,
                        0,
                        props.canvasWidth,
                        props.canvasHeight
                    );
                };
            }
        };

        const flipCard = () => {
            if (!props.isMatched) {
                flipped.value = !flipped.value;
                emit('flip', props.index);
            }
        };

        const cardStyle = computed(() => ({
            background: props.isMatched
                ? `url(${props.image})`
                : 'linear-gradient(135deg, #ff9d00, #ff2a68)'
        }));

        return { flipped, flipCard, canvas, cardStyle };
    }
};
</script>

<style scoped>
.card {
    width: 100px;
    height: 150px;
    position: relative;
    margin: 5px;
    cursor: pointer;
}

.card-back {
    background-color: #333;
    width: 100%;
    height: 100%;
    border-radius: 10px;
}
</style>
