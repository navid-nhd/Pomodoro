<template>
  <div class="wrapper  flex h-screen w-full">
    <div class="w-1/3 basis-1/3 h-full bg-red-400 flex flex-col items-center justify-center ">
      <div class="w-32 h-32 bg-black text-white relative rounded-full">
        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-bold text-2xl ">{{ minutes
        }}:{{ seconds }}
        </div>
      </div>
      <div class="flex gap-4 my-3">
        <button @click="start()" v-show="!pomodoroIsPlayed"
          class="bg-slate-300 px-3 py my-3-1 rounded-md hover:bg-slate-400 transition-all">play</button>
        <button @click="pause()" v-show="pomodoroIsPlayed"
          class="bg-slate-300 px-3 py-1 rounded-md hover:bg-slate-400 transition-all">pause</button>
        <button @click="reset()"
          class="bg-slate-300 px-3 py-1 rounded-md hover:bg-slate-400 transition-all">reset</button>
      </div>
    </div>
    <div class="w-2/3 basis-2/3 h-full bg-slate-300 flex items-center justify-center">
      <div class="bg-gray">
        <jput v-model="countryName" name="first_name" id="fname" label="Name" />
        <jput v-model="countryName" name="last_name" id="lname" label="Email" />
        <JButton type="primary" @click="timerStart()">Start</JButton>
        <JButton type="secondry" @click="timerStop()">Cancel</JButton>
      </div>
    </div>
  </div>
</template>
<script setup>

const isRequired = (value) => {
  console.log(value)
  if (value && value.trim()) {
    return true
  }
  return 'This is Required'

}
const duration = ref(2 * 60)// Timer in minutes
const timer = ref(duration.value)
const pomodoroIsPlayed = ref(false)
const interval = ref(null)
const start = () => {
  pomodoroIsPlayed.value = true
  interval.value = setInterval(() => {
    if (timer.value > 0) {
      timer.value--
    } else {
      pomodoroIsPlayed.value = false
      pause()
    }
    console.log(timer.value)
  }, 1000);
}
const pause = () => {
  clearInterval(interval.value)
}
const reset = () => {
  pause()
  timer.value = duration.value
  pomodoroIsPlayed.value = false
}
const minutes = computed(() => {
  return Math.floor(timer.value / 60) > 9 ? Math.floor(timer.value / 60) : `0${Math.floor(timer.value / 60)}`
})
const seconds = computed(() => {
  return (timer.value % 60 > 9) ? timer.value % 60 : `0${timer.value % 60}`
})


</script>
