<template>
	<demo-button @click="show = !show">
		Показать
	</demo-button>
	<br />

	<!-- CSS Animation -->
	<!-- <transition name="bounce">
		<img
			v-if="show"
			src="https://picsum.photos/300/300?random=1"
			alt="#"
		/>
	</transition> -->

	<!-- JS Animation -->
	<transition
		@enter="enterAnimation"
		@leave="leaveAnimation"
		:css="false"
	>
		<img
			v-if="show"
			src="https://picsum.photos/300/300?random=1"
			alt="#"
		/>
	</transition>
</template>

<script setup>
import { ref } from 'vue';

import DemoButton from './DemoButton.vue';

const show = ref(true);

function clearAnimation(el, done) {
	el.addEventListener('animationend', () => {
		el.className = '';
		done();
	});
}

function enterAnimation(el, done) {
	el.className = 'bounce';
	clearAnimation(el, done);
}

function leaveAnimation(el, done) {
	el.className = 'bounce-reverse';
	clearAnimation(el, done);
}
</script>

<style lang="scss" scoped>
.bounce-enter-active {
	animation: bounce .5s;
}

.bounce-leave-active {
	animation: bounce .5s reverse;
}

.bounce {
	animation: bounce .5s;

	&-reverse {
		animation: bounce .5s reverse;
	}
}

@keyframes bounce {
	0% {
		transform: scale(0);
	}

	50% {
		transform: scale(1.5);
	}

	100% {
		transform: scale(1);
	}
}
</style>
