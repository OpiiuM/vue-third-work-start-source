<template>
    <div class="counter">
        <button @click="decrement">-</button>
        <span>Current value: {{ count }}</span>
        <button @click="increment">+</button>
    </div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);

const decrement = () => {
    count.value = count.value - 1;
};

const increment = () => {
    count.value = count.value + 1;
};
</script>

<style lang="scss" scoped>
.counter {
    display: flex;
    align-items: center;

    button {
        font-size: 1.5rem;
        
        width: 2rem;
        height: 2rem;
        margin: 0 10px;
        
        cursor: pointer;
        
        color: white;
        border: none;
        border-radius: 50%;
        background: #dd0000;

        &:hover {
            background: #ff0000;
        }
    }
}
</style>
