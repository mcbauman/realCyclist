<script setup>
import { useSettingsStore } from '@/stores/settingsStore';
const settingsStore=useSettingsStore()
import LeaveIcon from '@/assets/icons/LeaveIcon.vue';
</script>
<template>
    <article id="contentModalBackground">
        <section id="contentModal">
            <header class="articleHeader">
                <h1>{{settingsStore.modalContent.article.title}}</h1>
                <button @click.prevent="settingsStore.setModalContent(false)"><LeaveIcon /></button>
            </header>
            <section v-for="paragraph in settingsStore.modalContent.article.sections">
                <h2>{{ paragraph.title }}</h2>
                <img src="" alt="paragraph.picture">
                <p>{{ paragraph.text }}</p>
            </section>
        </section>
    </article>

</template>