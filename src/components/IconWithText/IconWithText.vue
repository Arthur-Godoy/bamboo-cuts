<template>
    <div class="d-flex align-center">
        <v-icon :icon="icon" :color="color || 'surface-dark'" class="mr-2" />
        <p class="text-truncate">{{ text }}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    icon: string;
    text: string;
    color?: string;
}>();
</script>
