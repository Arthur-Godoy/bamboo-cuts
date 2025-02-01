<template>
    <v-snackbar
        v-model="messageStore.open"
        :color="messageStore.type"
        :timeout="2000"
        location="top right"
    >
        {{ messageStore.text }}
    </v-snackbar>
</template>

<script setup lang="ts">
import useMessageStore, { type MessageStore } from '@/stores/message';

const messageStore: MessageStore = useMessageStore();

</script>