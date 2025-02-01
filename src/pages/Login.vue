<template>
    <FormControl
        class="d-flex flex-column align-center justify-center text-center"
        style="height: 100vh"
        @submit="autenticate"
    >
        <v-card class="pa-5">
            <img 
                src="@/assets/logo.png"
                width="60"
            >
            <h2>Login</h2>
            <h3 class="mt-3">
                Insira sua API Key da Panda Video
            </h3>
            <v-text-field
                v-model="token"
                label="Token"
                variant="solo"
                density="compact"
                :disabled="loading"
                class="mt-5"
                :rules="[required]"
            />
            <v-btn
                color="primary"
                block
                class="mt-5"
                type="submit"
                :loading="loading"
            >
                Entrar
            </v-btn>
        </v-card>
    </FormControl>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useAuthStore, { type AuthStore } from '../stores/auth';
import required from '@/utils/validators/required';
import FormControl from '@/components/Form/FormControl.vue';

const token= ref<string>("");
const authStore: AuthStore = useAuthStore();
const loading = ref<boolean>(false);


function autenticate(): void {
    loading.value = true;
    authStore.authenticate(token.value);
    loading.value = false;
};

</script>