<template>
    <button class="counter-button" @click="$emit('action')">
        <slot />
    </button>
</template>

<script setup>
defineEmits(['action']);
</script>

<style lang="scss" scoped>
.counter-button {
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

    &[disabled] {
        cursor: not-allowed;

        background: #999;
    }
}
</style>
