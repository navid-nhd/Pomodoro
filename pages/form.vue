<template>
    <div class="flex items-center justify-center h-screen flex-col gap-5">
        <label>
            Enter User Name:
            <input v-bind="userName" class="bg-slate-300">
        </label>
        <label>
            Enter Email:
            <input v-bind="email" class="bg-slate-300">
        </label>
        <label>
            Enter MobilePhone:
            <input v-bind="phone" class="bg-slate-300">
        </label>
        <br>
        <ul v-for="error in errors">
            <li class="text-red-300">{{ error }}</li>
        </ul>
    </div>
</template>
<script setup>

import { useForm } from 'vee-validate';
import * as yup from 'yup';

const { values, errors, defineInputBinds } = useForm({
    validationSchema: yup.object({
        email: yup.string().email().required(),
        userName: yup.string().min(2).max(214).required(),
        phone: yup.string().required().test((value, context) => {
            // if (Number(value) == value) {
            //     return context.createError({ message: 'باید عدد وارد کنید' })
            // } else if (value[0] != 0 || value[1] != 9) {
            //     return context.createError({ message: 'عدد باید با ۰۹ شروع شود' })
            // }
            // return true
            // const regex = new RegExp('')
            return value.test(/^((+98|0)?9\d{9})$/) || context.createError({ message: 'عدد باید با ۰۹ شروع شود' })
        })
    }),
});

const email = defineInputBinds('email')
const userName = defineInputBinds('userName')
const phone = defineInputBinds('phone')
</script>