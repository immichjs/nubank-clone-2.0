<template>
  <section class="h-full">
    <HeaderComponent :activeName="true" name="Michel França"></HeaderComponent>
  </section>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderComponent
  }
}
</script>
