<script setup>
const props = defineProps(["articleContent"])
</script>
<template>
    <article class="articleBody">
        <img v-if="articleContent.mainpicture" src="../assets/pictures/torgeFirstTraining2025.jpg" :alt="articleContent.mainpicture">
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
    <hr>
    <!-- {{ articleContent }} -->
</template>