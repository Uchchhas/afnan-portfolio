<script setup lang="ts">
    import PortfolioHeader from '~/components/layouts/PortfolioHeader.vue';
    import PortfolioFooter from '~/components/layouts/PortfolioFooter.vue';
</script>

<template>
    <div>
        <PortfolioHeader/>
        <slot/>
        <PortfolioFooter/>
    </div>
</template>