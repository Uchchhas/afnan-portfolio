<script setup lang="ts">
    import projects from '~/data/projects.json'
    import PortfolioProjectCard from '~/components/ui/PortfolioProjectCard.vue'
</script>

<template>
    <section class="">
        <div class="container">
            <div class="grid gap-14">
                <template v-for="(project, projectIndex) in projects.slice(0, 5)">
                    <portfolio-project-card :project="project"/>
                </template>
            </div>
        </div>
    </section>
</template>