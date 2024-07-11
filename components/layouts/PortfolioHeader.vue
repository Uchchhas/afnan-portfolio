<script setup lang="ts">
    import navItems from '~/data/navItems.json';
    import PortfolioButton from "~/components/ui/PortfolioButton.vue";
</script>

<template>
    <header
        class="py-4 bg-white"
        v-motion="{
          initial: {
            y: -80,
            opacity: 0
          },
          enter: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 500
            },
          }
        }"
    >
        <div class="container">
            <div class="grid grid-cols-[91px_auto_91px] gap-4 items-center">
                <NuxtLink to="/">
                    <NuxtImg
                        width="48"
                        height="48"
                        :quality="100"
                        src="/images/avatar.png"
                    />
                </NuxtLink>
                <ul class="flex items-center justify-center gap-4">
                    <li v-for="(navItem, navItemIndex) in navItems">
                        <NuxtLink
                            :to="navItem?.url"
                            class="py-2 px-3 text-gray-600 hover:text-gray-800 transition"
                        >
                            {{ navItem?.title }}
                        </NuxtLink>
                    </li>
                </ul>
                <div>
                    <PortfolioButton url="/contact">
                        Contact
                    </PortfolioButton>
                </div>
            </div>
        </div>
    </header>
</template>