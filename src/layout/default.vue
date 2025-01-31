<script setup lang="ts">
import AppBar from '@/components/AppBar/AppBar.vue';

</script>

<template>
    <v-layout v-if="!$route.meta.noLayout">
        <AppBar />

        <slot />
    </v-layout>

    <slot v-else />
</template>