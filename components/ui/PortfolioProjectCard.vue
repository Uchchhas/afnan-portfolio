<script setup lang="ts">
    import IconSvgTopRightCorner from '~/components/svg-icons/IconSvgTopRightCorner.vue'

    // Define props
    const props = defineProps({
        project: {
            type: Object,
            required: true
        }
    })

    // Motion properties
    const initialMotion = ref({
        y: 30,
        opacity: 0
    })
    const initialMotionEnter = ref({
        y: 0,
        opacity: 1,
    })
</script>

<template>
    <div
        class="grid grid-cols-[360px_auto] gap-4 p-4 rounded-[32px] bg-gray-100"
        v-motion="{
          initial: initialMotion,
          visibleOnce: {
            ...initialMotionEnter,
            transition: {
                duration: 500
            },
          }
        }"
    >
        <div class="flex flex-col">
            <div class="grow flex flex-col mb-4 p-4 rounded-[24px] bg-white">
                <NuxtImg
                    width="72"
                    height="72"
                    :src="project?.logo"
                    :alt="project?.title"
                    class="mb-12"
                />
                <div>
                    <p class="mb-4 text-gray-800 text-2xl font-semibold leading-loose">
                        {{ project?.title }}
                    </p>
                    <p class="mb-14 text-gray-500 text-base font-normal leading-normal">
                        {{ project?.description }}
                    </p>
                </div>
                <div class="flex flex-wrap gap-3 mt-auto">
                    <div
                        v-for="(tag, tagIndex) in project?.tags"
                        class="px-3 py-1.5 items-center justify-center inline-flex gap-[3px] text-center text-slate-700 text-sm font-medium leading-tight rounded-[30px] bg-gray-100"
                    >
                        {{ tag }}
                    </div>
                </div>
            </div>
            <NuxtLink
                :to="`/project/${project?.id}`"
                class="group flex items-center justify-between py-3 px-5 text-slate-700 hover:text-white text-base font-medium leading-normal rounded-[24px] bg-white hover:bg-gray-800 transition">
                View case study
                <icon-svg-top-right-corner class="text-slate-700 group-hover:text-white transition-colors"/>
            </NuxtLink>
        </div>
        <div>
            <NuxtImg width="772" height="580" :src="project?.thumbnail" :alt="project?.title" class="rounded-[24px]"/>
        </div>
    </div>
</template>