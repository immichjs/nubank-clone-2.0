<template>
  <main class="flex justify-center h-screen p-8 relative bg-zinc-900">
    <section class="w-96 shadow-lg rounded-3xl overflow-hidden relative bg-zinc-50">
      <router-view />
      <section class="flex justify-center absolute bottom-4 w-full">
        <NavComponent></NavComponent>
      </section>
    </section>
  </main>
</template>

<script>
import NavComponent from '@/components/NavComponent';
export default {
  components: {
    NavComponent
  }
}
</script>
