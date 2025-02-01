<!-- eslint-disable vue/attribute-hyphenation -->
<template>
    <v-container fluid>
        <v-progress-linear
            v-if="loading"
            indeterminate
            color="primary"
        />

        <div style="max-height: 400px; overflow-y: auto">
            <v-infinite-scroll
                :class="loading ? 'd-none' : 'd-block'"
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
                        {{ video.title }}
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
    search: string
}>();
const videos = ref<Video[]>([]);
const page = ref(1);
const loading = ref(false);

async function getVideos({done} = {}): Promise<void>
{
    loading.value = true;
    let filters: VideoFilters = {
        page: page.value,
    }

    if (props.search) {
        page.value = 1;

        filters = {
            ...filters,
            title: props.search
        };
    }

    try {
        const response = await videoService.getVideos(filters);
    
        videos.value = response.data.videos;
    
        if (page.value === response.data.pages) {
            done('empty');
            return;
        }
    
        page.value += 1;
    } catch (error) {
        done('empty');
    } finally {
        loading.value = false;
    }
}

defineExpose({
    getVideos
});
</script>