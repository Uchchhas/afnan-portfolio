<script setup lang="ts">
    import projects from '~/data/projects.json'
    import PortfolioProjectCard from '~/components/ui/PortfolioProjectCard.vue'
</script>

<template>
    <section class="">
        <div class="container">
            <div class="mb-[72px] grid gap-14">
                <template v-for="(project, projectIndex) in projects.slice(0, 5)">
                    <portfolio-project-card :project="project"/>
                </template>
            </div>
            <div class="mb-14">
                <p
                    class="mb-6 text-gray-800 text-2xl font-bold tracking-wide"
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
                    Few works that doesn’t get case study
                </p>
                <div class="grid grid-cols-3 gap-6">
                    <template v-for="(project, projectIndex) in projects.slice(0, 6)">
                        <NuxtImg
                            width="376"
                            height="282"
                            src="/images/fallback-larrge.png"
                            alt="Project image"
                            class="rounded-2xl"
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
                                    delay: 500 + (projectIndex*50)
                                },
                              }
                            }"
                        />
                    </template>
                </div>
            </div>
            <div class="flex justify-center">
                <NuxtLink
                    to="/projects"
                    class="w-[376px] h-[60px] px-7 py-4 bg-white rounded-[56px] border border-gray-200 justify-center items-center gap-3 inline-flex text-slate-700 text-lg font-medium leading-7 hover:bg-gray-100 transition"
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
                    Explore all work
                </NuxtLink>
            </div>
        </div>
    </section>
</template>