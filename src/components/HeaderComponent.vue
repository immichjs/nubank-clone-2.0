<template>
  <header class="grid gap-4 bg-purple-700 p-4">
    <div class="flex justify-between items-center">
      <div class="w-10 h-10 rounded-full bg-opacity-20 bg-white flex items-center justify-center">
        <box-icon name="user" color="#fff"></box-icon>
      </div>
      <div class="flex gap-4">
        <box-icon name="show" color="#fff" v-if="visible" @click="changeVisibility()" size="24px"></box-icon>
        <box-icon name="hide" color="#fff" v-else @click="changeVisibility()" size="24px"></box-icon>
        <box-icon name="help-circle" color="#fff" size="24px"></box-icon>
        <box-icon name="user-plus" color="#fff" size="24px"></box-icon>
      </div>
    </div>
    <span class="text-white font-medium" v-if="activeName">Olá, {{ name }}</span>
  </header>
</template>

<script>
export default {
  name: 'header-component',
  data() {
    return {
      visible: true
    }
  },
  props: {
    activeName: { type: Boolean, default: false },
    name: { type: String }
  },
  methods: {
    changeVisibility() {
      this.visible = !this.visible
    }
  }
}
</script>
