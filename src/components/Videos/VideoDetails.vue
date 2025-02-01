<template>
    <v-row class="pa-5 border-b">
        <v-col cols="12">
            <div class="d-flex align-center justify-space-between">
                <h2>{{ video.title }}</h2>
                <v-btn
                    color="primary"
                    size="small"
                    icon="mdi-pencil"
                    @click="openEditVideoModal = true"
                />
            </div>
        </v-col>
        <v-col cols="12" class="px-5">
            <v-btn
                color="primary"
                block
                variant="plain"
                @click="expand = !expand"
            >
                <v-icon :icon="expand ? 'mdi-chevron-up' : 'mdi-chevron-down'" />
                <span class="ml-2">Ver Descrição</span>
            </v-btn>

            <v-expand-transition>
                <p v-if="expand">
                    {{
                        video.description
                            ?? 'Esse vídeo não possui descrição.'
                    }}
                </p>
            </v-expand-transition>
        </v-col>
        <v-col>
            <IconWithText icon="mdi-archive" color="primary" :text="storageSizeFormater(props.video.storage_size)" />
        </v-col>
        <v-col>
            <IconWithText icon="mdi-clock" color="primary" :text="videoLengthFormater(props.video.length)" />
        </v-col>
        <v-col>
            <IconWithText
                icon="mdi-calendar"
                color="primary"
                :text="`Data de Publicação: ${dateFormater(props.video.updated_at)}`"
            />
        </v-col>
    </v-row>
    
    <EditVideoModal
        v-model="openEditVideoModal"
        :id="video.id"
        :title="video.title"
        :description="video.description"
        @edited="(id) => emit('edited', id)"
    />
</template>

<script lang="ts" setup>
import storageSizeFormater from '@/utils/formaters/storageSizeFormater';
import IconWithText from '../IconWithText/IconWithText.vue';
import type { Video } from '@/types/models/Video';
import { videoLengthFormater } from '@/utils/formaters/videoLengthFormater';
import dateFormater from '@/utils/formaters/dateFormater';
import EditVideoModal from './EditVideoModal.vue';
import { ref } from 'vue';

const props = defineProps<{
    video: Video;
}>();

const expand = ref<boolean>(false);
const openEditVideoModal = ref<boolean>(false);

const emit = defineEmits(['edited']);
</script>