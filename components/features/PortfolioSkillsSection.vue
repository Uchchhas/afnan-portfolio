<script setup lang="ts">
    import skills from '~/data/skills.json'
</script>

<template>
    <section class="pt-[200px] pb-[104px]">
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
                Things I am expert on...
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
                <template v-for="(skill, skillIndex) in skills">
                    <div
                        class="px-5 py-4 bg-gray-50 hover:bg-gray-100 rounded-xl border border-zinc-100 text-slate-700 text-xl font-medium transition"
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
                        {{ skill }}
                    </div>
                </template>
            </div>
        </div>
    </section>
</template>