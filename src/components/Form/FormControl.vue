<template>
    <v-form
        validate-on="lazy submit"
        @submit.prevent="handleSubmit"
    >
        <slot />
    </v-form>
</template>

<script setup lang="ts">
interface SubmitEventPromise extends SubmitEvent, Promise<any> {}

const emit = defineEmits<{
    (event: "submit", formSubmitEvent: SubmitEventPromise): any;
}>();

async function handleSubmit(formSubmitEvent: SubmitEventPromise) {
    if (!(await formSubmitEvent).valid) {
        return;
    }

    emit("submit", formSubmitEvent);
}
</script>
