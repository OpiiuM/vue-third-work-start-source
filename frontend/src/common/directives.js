export const clickOustide = {
    mounted(el, binding) {
        el.clickOustideEvent = function (event) {
            if (!(el === event.target) || el.contains(event.target)) {
                binding.value(event, el);
            }
        };

        document.body.addEventListener('click', el.clickOustideEvent);
    },

    unmounted(el) {
        document.body.removeEventListener('click', el.clickOustideEvent);
    },
};
