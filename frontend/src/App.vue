<script setup>
import { ref } from 'vue';
import MenuIcon from './assets/icons/MenuIcon.vue';
import { useUSerStore } from './stores/userStore';
const userStore=useUSerStore()
const colorSchema = ref("default")
const loginData = ref({})
</script>

<template>
  <header :class="colorSchema">
    <nav>
    <p>News</p>
    <p>Reiseberichte</p>
    <p>TechnikLexikon</p>
    <p>Produkte</p>
    <p v-if="userStore.user">Forum</p>
    <span v-else>
      <input type="email" placeholder="email" v-model="loginData.name">
      <input type="password" placeholder="password" v-model="loginData.password">
      <button type="submit" @click.prevent="userStore.login(loginData.name, loginData.password)">Login</button>
    </span>
    <MenuIcon />
    </nav>
  </header>

  <main :class="colorSchema">
  <p>Welcome</p>
  </main>
</template>

