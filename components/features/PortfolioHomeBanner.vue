<script setup lang="ts">

</script>

<template>
    <section class="py-20">
        <div class="container">
            <p
                class="mb-6 text-gray-400 text-[44px] font-bold tracking-wide"
                v-motion="{
                  initial: {
                    y: 30,
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
                Hi, I'm Afnan —
            </p>
            <h1
                class="mb-14 text-slate-800 text-[64px] font-semibold leading-[86px] tracking-wide"
                v-motion="{
                  initial: {
                    y: 30,
                    opacity: 0
                  },
                  enter: {
                    y: 0,
                    opacity: 1,
                    transition: {
                        duration: 500,
                        delay: 500
                    },
                  }
                }"
            >
                Designing impactful digital experiences that connect people's needs with business goals
            </h1>
            <div class="grid grid-cols-[276px_276px_auto] gap-6">
                <div
                    class="grid gap-14 p-8 rounded-[32px] bg-gray-100"
                    v-motion="{
                      initial: {
                        y: 30,
                        opacity: 0
                      },
                      enter: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 500,
                            delay: 1000
                        },
                      }
                    }"
                >
                    <p class="text-slate-800 text-[44px] font-bold leading-[60px] tracking-wide">7+</p>
                    <p class="w-[202.20px] text-gray-500 text-base font-normal leading-normal tracking-tight">
                        Years of work experience
                    </p>
                </div>
                <div
                    class="grid gap-14 p-8 rounded-[32px] bg-gray-100"
                    v-motion="{
                      initial: {
                        y: 30,
                        opacity: 0
                      },
                      enter: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 500,
                            delay: 1100
                        },
                      }
                    }"
                >
                    <NuxtImg width="127" height="38" src="/images/project-logos/shopup.png" quality="100"/>
                    <p class="w-[202.20px] text-gray-500 text-base font-normal leading-normal tracking-tight">
                        Currently works at
                    </p>
                </div>
                <div
                    class="grid gap-14 p-8 rounded-[32px] bg-gray-100"
                    v-motion="{
                      initial: {
                        y: 30,
                        opacity: 0
                      },
                      enter: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 500,
                            delay: 1200
                        },
                      }
                    }"
                >
                    <div class="flex flex-wrap items-center justify-between gap-4">
                        <p class="text-slate-800 text-[44px] font-bold leading-[60px] tracking-wide">120+ million</p>
                    </div>
                    <p class="text-gray-500 text-base font-normal leading-normal tracking-tight">
                        People have positively impacted by works through out the journey
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>