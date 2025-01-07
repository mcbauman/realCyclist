<script setup>
import { ref } from 'vue';
import MenuIcon from './assets/icons/MenuIcon.vue';
const colorSchema = ref("default")
</script>

<template>
  <header :class="colorSchema">
    <nav>
    <p>News</p>
    <p>Reiseberichte</p>
    <p>TechnikLexikon</p>
    <p>Produkte</p>
    <p>Forum</p>
    <MenuIcon />
    </nav>
  </header>

  <main :class="colorSchema">
    <p>Welcome</p>
  </main>
</template>

