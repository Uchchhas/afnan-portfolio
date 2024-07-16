<script setup lang="ts">
    import PortfolioHomeBanner from '~/components/features/PortfolioHomeBanner.vue'
    import PortfolioProjectsSection from '~/components/features/PortfolioProjectsSection.vue'
    import PortfolioSkillsSection from '~/components/features/PortfolioSkillsSection.vue'
    import PortfolioWorkingCompanies from '~/components/features/PortfolioWorkingCompanies.vue'
    import PortfolioWorkingIndustry from '~/components/features/PortfolioWorkingIndustry.vue'

    useHead({
        title: 'Afnan | UI/UX Portfolio'
    })
</script>

<template>
    <portfolio-home-banner/>
    <portfolio-projects-section/>
    <portfolio-skills-section/>
    <portfolio-working-companies/>
    <portfolio-working-industry/>
</template>