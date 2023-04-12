<template>
  <nav class="rounded-full h-full flex gap-2 p-2 bg-white shadow">
    <router-link to="/" class="flex items-center justify-center flex-1 p-2 hover:bg-purple-200 rounded-full" active-class="bg-purple-200">
      <box-icon name='transfer' rotate="90" color="rgb(147 51 234)"></box-icon>
    </router-link>
    <router-link to="/patrimony" class="flex items-center justify-center flex-1 p-2 hover:bg-purple-200 rounded-full" active-class="bg-purple-200">
      <box-icon name='dollar' color="rgb(147 51 234)"></box-icon>
    </router-link>
    <router-link to="/shopping" class="flex items-center justify-center flex-1 p-2 hover:bg-purple-200 rounded-full" active-class="bg-purple-200">
      <box-icon name='shopping-bag' color="rgb(147 51 234)"></box-icon>
    </router-link>
  </nav>
</template>
