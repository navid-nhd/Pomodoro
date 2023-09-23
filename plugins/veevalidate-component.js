import { defineRule } from "vee-validate";
import * as rules from "@vee-validate/rules";

export default defineNuxtPlugin((nuxtApp) => {
    //defineRules('required',required);
    //defineRules('email',email);
    //defineRules('min',min);
    Object.keys(rules)
    .filter((k) => k !== "default")
    .forEach((rule) =>{
        defineRule(rule,rules[rule]);
        console.log(rule);
    })
})