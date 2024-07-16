<script setup lang="ts">
    import companies from '~/data/companies.json'
</script>

<template>
    <section class="pb-[200px]">
        <div class="container">
            <div class="mb-8 flex items-center justify-center gap-14">
                <template v-for="company in companies">
                    <NuxtImg :src="company"/>
                </template>
            </div>
            <p class="text-gray-400 text-base font-normal tracking-tight text-center">
                Awesome companies I’ve works & collaborated
            </p>
        </div>
    </section>
</template>