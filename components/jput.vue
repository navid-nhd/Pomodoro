<template>
    <div>
        <label v-if="label" :for="id">{{ label }}</label>
        <input v-model="localModelValue" :name="name" :id="id" :type="type" class="border border-2 px-4 mx-5 my-3" />
        <br />
        {{ modelValue }}
        {{ localModelValue }}
    </div>
</template>
<script setup>
import { string, oneOfType, bool, number } from "vue-types";

const props = defineProps({
    label: string(),
    id: string(),
    name: string(),
    type: string().def("text"),
    modelValue: oneOfType([string(), number(), bool()]),
});

const { localModelValue } = useLocalModelValue({ props });
</script>
  