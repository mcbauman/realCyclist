<script setup>
const props = defineProps(["articleContent"]);
import { useSettingsStore } from '@/stores/settingsStore';
const settingsStore = useSettingsStore()
</script>
<template>
  <article @click.prevent="settingsStore.setModalContent(articleContent)">
    <!-- <img v-if="articleContent.mainpicture" src="../assets/pictures/torgeFirstTraining2025.jpg" :alt="articleContent.mainpicture"> -->
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
      <!-- <section v-for="sectionContent in articleContent.article.sections">
                <h4>{{ sectionContent.title }}</h4>
                <img v-if="sectionContent.picture" :src="sectionContent.picture" alt="">
                <p>{{ sectionContent.text }}</p>
            </section> -->
    </div>
  </article>
  <!-- {{ articleContent }} -->
</template>
