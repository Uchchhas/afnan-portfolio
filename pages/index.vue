<script setup lang="ts">
    import PortfolioHomeBanner from '~/components/features/PortfolioHomeBanner.vue'
    import PortfolioProjectsSection from '~/components/features/PortfolioProjectsSection.vue'

    useHead({
        title: 'Afnan | UI/UX Portfolio'
    })
</script>

<template>
    <portfolio-home-banner/>
    <portfolio-projects-section/>
</template>