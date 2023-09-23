<template>
    <div>
        <button class="bg-slate-700 w-full rounded-3xl hover:bg-slate-500 py-1 my-2" :class="type === 'primary'
                ? 'bg-slate-700 text-white'
                : 'bg-slate-200 text-black'
            ">
            <slot />
        </button>
    </div>
</template>
<script setup>
import { number, oneOfType, string } from "vue-types";
const props = defineProps({
    type: oneOfType([string(), number()]),
});
</script>