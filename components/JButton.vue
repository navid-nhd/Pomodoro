<template>
    <div>
        <button class="bg-slate-700 text-white w-full rounded-3xl hover:bg-slate-500 py-1 my-2">
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