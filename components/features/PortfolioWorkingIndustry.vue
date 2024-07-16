<script setup lang="ts">
    import industries from '~/data/industries.json'
</script>

<template>
    <section class="pb-[200px]">
        <div class="container">
            <h2
                class="mb-4 text-gray-800 text-5xl font-bold tracking-wide"
                v-motion="{
                  initial: {
                    y: 30,
                    opacity: 0
                  },
                  visibleOnce: {
                    y: 0,
                    opacity: 1,
                    transition: {
                        duration: 500
                    },
                  }
                }"
            >
                Industry I’ve worked on
            </h2>
            <p
                class="mb-12 text-gray-500 text-base font-normal leading-loose tracking-wide"
                v-motion="{
                  initial: {
                    y: 30,
                    opacity: 0
                  },
                  visibleOnce: {
                    y: 0,
                    opacity: 1,
                    transition: {
                        duration: 500,
                        delay: 500
                    },
                  }
                }"
            >
                I am a multidisciplinary product designer wth various skillset. Here’s a glimpse of them:
            </p>
            <div class="grid grid-cols-3 gap-6">
                <template v-for="(industry, industryIndex) in industries">
                    <div
                        class="flex items-center gap-4"
                        v-motion="{
                          initial: {
                            y: 10,
                            opacity: 0
                          },
                          visibleOnce: {
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 500,
                                delay: 500
                            },
                          }
                        }"
                    >
                        <div class="w-12 h-12 p-3 bg-gray-200 rounded-xl justify-center items-center gap-2.5 inline-flex">
                            I
                        </div>
                        {{ industry }}
                    </div>
                </template>
            </div>
        </div>
    </section>
</template>