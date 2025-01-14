<script setup>
const props = defineProps(["articleContent"]);
import { useSettingsStore } from '@/stores/settingsStore';
const settingsStore = useSettingsStore()
</script>
<template>
  <article @click.prevent="settingsStore.setModalContent(articleContent)">
   <img
      v-if="articleContent.mainpicture"
      v-bind:src="articleContent.mainpicture"
      :alt="articleContent.mainpicture"
    />
    <div>
      <header class="articleHeader">
        <h3>
          {{ articleContent.article.title }}
        </h3>
      </header>
      <p>{{ articleContent.article.text }}</p>
    </div>
  </article>
</template>
