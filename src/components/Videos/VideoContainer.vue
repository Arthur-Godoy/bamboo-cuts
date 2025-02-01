<!-- eslint-disable vue/attribute-hyphenation -->
<template>
    <v-container fluid>
        <div style="max-height: 400px; overflow-y: auto">
            <v-infinite-scroll
                :items="videos"
                :onLoad="getVideos"
                load-more-text="Carregando mais itens..."
                :empty-text="
                    videos.length === 0 
                        ? 'Nenhum item encontrado.' 
                        : 'Não há mais items para carregar.'
                "
            >
                <template
                    v-for="(video, index) in videos"
                    :key="video.id"
                >
                    <div :class="['pa-2', index % 2 === 0 ? 'bg-grey-lighten-2' : '']">
                        Item number #{{ video.id }}
                    </div>
                </template>
            </v-infinite-scroll>
        </div>
    </v-container>
</template>

<script setup lang="ts">
import videoService, { type VideoFilters } from '@/service/videoService';
import type { Video } from '@/types/models/Video';
import { ref } from 'vue';
const props = defineProps<{
    folderId: string
}>();

const videos = ref<Video[]>([]);
const page = ref(1);

async function getVideos({done}): Promise<void>
{
    const filters: VideoFilters = {
        page: page.value,
        folder_id: props.folderId,
    }

    const response = await videoService.getVideos(filters);

    videos.value = response.data.videos;

    if (page.value === response.data.pages) {
        done('empty');
        return;
    }

    page.value += 1;
}
</script>