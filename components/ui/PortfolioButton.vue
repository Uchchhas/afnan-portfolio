<script setup lang="ts">
    const props = defineProps({
        url: {
            type: String,
            default: null
        },
        onClick: {
            type: Function
        },
        type: {
            type: String,
            default: 'button'
        },
        buttonType: {
            type: String,
            default: 'primary'
        },
        fullWidth: {
            type: Boolean,
            default: false
        }
    })

    // Computed properties
    const buttonClasses = computed(() => {
        let displayClasses,
            colorClasses;

        displayClasses = props.fullWidth ? `w-full flex` : 'inline-flex'
        if (props.buttonType === 'primary') {
            colorClasses = `text-white bg-gray-800 hover:bg-gray-900`
        }

        return `${displayClasses} ${colorClasses} items-center justify-center py-2 px-4 font-medium rounded-3xl transition`
    })
</script>

<template>
    <NuxtLink v-if="url" :to="url" :class="buttonClasses">
        <slot/>
    </NuxtLink>
    <button v-else @click="onClick" :class="buttonClasses">
        <slot/>
    </button>
</template>