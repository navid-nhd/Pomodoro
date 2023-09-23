<template>
  <div class="wrapper  flex h-screen w-full">
    <div class="w-1/3 basis-1/3 h-full bg-red-400 flex flex-col items-center justify-center ">
      <div class="w-32 h-32 bg-black text-white relative rounded-full">
        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-bold text-2xl ">00:00</div>
      </div>
      <div class="flex gap-4 my-3">
        <button class="bg-slate-300 px-3 py my-3-1 rounded-md hover:bg-slate-400 transition-all">play</button>
        <button class="bg-slate-300 px-3 py-1 rounded-md hover:bg-slate-400 transition-all">pause</button>
      </div>
    </div>
    <div class="w-2/3 basis-2/3 h-full bg-slate-300">
    </div>
  </div>
</template>
