<script setup>
import { ref } from "vue";
import MenuIcon from "./assets/icons/MenuIcon.vue";
import LeaveIcon from "./assets/icons/LeaveIcon.vue";
import ArticleComponent from "./components/ArticleComponent.vue";
import ContentModal from "./components/ContentModal.vue";
import { useUSerStore } from "./stores/userStore";
import { useSettingsStore } from "./stores/settingsStore";
import { articles } from "./stores/articles";
const userStore = useUSerStore();
const settingsStore = useSettingsStore();
const colorSchema = ref("default");
const menuOpen = ref("hide");
const loginData = ref({});
</script>

<template>
  <header :class="colorSchema" id="mainHeader">
    <nav>
      <p :class="menuOpen">News</p>
      <p :class="menuOpen">Reiseberichte</p>
      <p :class="menuOpen">TechnikLexikon</p>
      <p :class="menuOpen">Produkte</p>
      <p :class="menuOpen" v-if="userStore.user">Forum</p>
      <span v-else :class="menuOpen">
        <input type="email" placeholder="email" v-model="loginData.name" />
        <input
          type="password"
          placeholder="password"
          v-model="loginData.password"
        />
        <button
          type="submit"
          @click.prevent="userStore.login(loginData.name, loginData.password)"
        >
          Login
        </button>
      </span>
      <LeaveIcon
        :class="menuOpen"
        v-if="userStore.user"
        @click.prevent="userStore.logout()"
        title="lougout"
      />
      <MenuIcon id="menuIcon" @click.prevent="() => (menuOpen = 'show')" />
    </nav>
  </header>

  <main :class="colorSchema">
    <ContentModal v-if="settingsStore.modalContent" />
    <ArticleComponent
      v-for="articleContent in articles"
      :articleContent="articleContent"
    />
  </main>
</template>
