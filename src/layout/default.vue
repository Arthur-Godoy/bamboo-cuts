<script setup lang="ts">
import AppBar from '@/components/AppBar/AppBar.vue';

</script>

<template>
    <v-layout v-if="!$route.meta.noLayout">
        <AppBar />
        <div class="w-100">
            <slot />
        </div>
    </v-layout>

    <div v-else>
        <slot />
    </div>
</template>