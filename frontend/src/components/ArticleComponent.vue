<script setup>
const props = defineProps(["articleContent"])
</script>
<template>
    <article>
        <header class="articleHeader"> 
            <h3>
                {{ articleContent.article.title }}
            </h3>
        </header>
        <div class="articleBod">
        
        </div>
        <img v-if="articleContent.picture" :src="articleContent.picture">
        <section v-for="sectionContent in articleContent.article.sections">
            <h4>{{ sectionContent.title }}</h4>
            <img v-if="sectionContent.picture" :src="sectionContent.picture" alt="">
            <p>{{ sectionContent.text }}</p>
        </section>
    </article>
    <hr>
    {{ articleContent }}
</template>