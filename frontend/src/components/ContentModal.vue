<script setup>
import { useSettingsStore } from '@/stores/settingsStore';
const settingsStore=useSettingsStore()
import LeaveIcon from '@/assets/icons/LeaveIcon.vue';
</script>
<template>
    <article id="contentModalBackground">
        <section id="contentModal">
            <header class="articleHeader">
                <h2>{{settingsStore.modalContent.article.title}}</h2>
                <button @click.prevent="settingsStore.setModalContent(false)"><LeaveIcon /></button>
            </header>
            <section class="modalParagraph" v-for="paragraph in settingsStore.modalContent.article.sections">
                <img v-if="paragraph.picture" v-bind:src="paragraph.picture" alt="paragraph.picture">
                <span>
                    <h3>{{ paragraph.title }}</h3>
                    <p>{{ paragraph.text }}</p>
                </span>
            </section>
        </section>
    </article>

</template>