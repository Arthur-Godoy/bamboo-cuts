<template>
    <v-dialog
        v-model="openEditVideoModal"
        width="500"
    >
        <FormControl @submit="handleEdit">
            <v-card>
                <v-card-title>
                    <h2>Editar Vídeo</h2>
                </v-card-title>
                <v-card-text>
                    <v-text-field
                        v-model="videoDescription.title"
                        variant="solo"
                        label="Título"
                        :disabled="loading"
                        :rules="[required]"
                    />
                    <v-textarea
                        v-model="videoDescription.description"
                        variant="solo"
                        label="Descrição"
                        :disabled="loading"
                        :rules="[required]"
                    />
                </v-card-text>
                <div class="d-flex justify-center mb-5">
                    <v-btn
                        color="error"
                        @click="openEditVideoModal = false"
                        append-icon="mdi-close"
                        variant="outlined"
                        :loading="loading"
                        class="me-5"
                    >
                        Cancelar
                    </v-btn>
                    <v-btn
                        color="primary"
                        type="submit"
                        append-icon="mdi-pencil"
                        :loading="loading"
                    >
                        Salvar
                    </v-btn>
                </div>
            </v-card>
        </FormControl>
    </v-dialog>
</template>

<script setup lang="ts">
import videoService from '@/service/videoService';
import { reactive, ref } from 'vue';
import FormControl from '../Form/FormControl.vue';
import required from '@/utils/validators/required';
import type { MessageStore } from '@/stores/message';
import useMessageStore from '@/stores/message';

const openEditVideoModal = defineModel<boolean>();

const props = defineProps<{
    id: string;
    title: string;
    description?: string;
}>();

const videoDescription = reactive({
    title: props.title,
    description: props.description,
});

const loading = ref<boolean>(false);
const messageStore: MessageStore = useMessageStore();

const emit = defineEmits(['edited']);

async function handleEdit() {
    try {
        loading.value = true;

        if (!videoDescription.title && !videoDescription.description) {
            messageStore.addMessage("No mínimo um campo deve ser preenchido", "error");
        }

        await videoService.editDescription(props.id, videoDescription)
        emit('edited', props.id);
        messageStore.addMessage("Vídeo editado com sucesso", "success");
        openEditVideoModal.value = false;
    } finally {
        loading.value = false;
    }
};
</script>