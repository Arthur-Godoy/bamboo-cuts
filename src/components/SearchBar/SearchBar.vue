<template>
    <v-text-field
        v-model="search"
        variant="solo-filled"
        density="compact"
        label="Pesquisar"
        append-inner-icon="mdi-magnify"
        class="w-100"
        clearable
        @keyup.enter="emit('search')"
        @click:append-inner="(emit('search'))"
    />
</template>

<script setup lang="ts">
const search = defineModel<string>();

const emit = defineEmits(["search"]);
</script>