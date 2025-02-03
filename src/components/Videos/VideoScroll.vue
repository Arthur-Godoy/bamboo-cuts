<template>
    <v-container fluid>
        <VideoSkeleton
            v-if="loading && videos.length === 0"
            :cols="cols"
        />

        <v-infinite-scroll
            :class="
                loading && videos.length === 0 
                    ? 'd-none'
                    : 'd-block'
            "
            :items="videos"
            :height="height"
            :onLoad="getVideos"
            load-more-text="Carregando mais itens..."
            color="primary"
            :empty-text="
                videos.length === 0 
                    ? 'Nenhum item encontrado.' 
                    : '-'
            "
        >
            <v-container fluid>
                <v-row>
                    <template v-for="(video, index) in videos":key="video.id">       
                        <v-col
                            :cols="cols || 12"
                            :sm="cols || 6"
                            :md="cols || 3"
                            :xl="cols || 2"
                            v-if="video.id !== playingId"
                        >
                            <VideoCard
                                :video="video"
                                @picked="emit('picked', video.id)"
                            />
                        </v-col>
                    </template>
                </v-row>
            </v-container>
            <template #empty>
                <div :class="videos.length === 0 ? '' : 'text-transparent'">
                    <p>Nenhum item encontrado</p>
                </div>
            </template>
        </v-infinite-scroll>
    </v-container>
</template>

<script setup lang="ts">
import videoService, { type VideoFilters } from '@/service/videoService';
import type { Video } from '@/types/models/Video';
import { ref } from 'vue';
import VideoCard from './VideoCard.vue';
import VideoSkeleton from '../Loading/VideoSkeleton.vue';

const props = defineProps<{
    search?: string;
    folderId?: string;
    playingId?: string;
    cols?: number;
    height?: number | string;
}>();
const videos = ref<Video[]>([]);
const page = ref(1);
const loading = ref(false);
let resetInfiteScroll: ((value: 'ok' | 'empty' | 'error') => void) | undefined;

const emit = defineEmits(['picked']);

async function getVideos({done}: {done: ((value: 'ok' | 'empty' | 'error') => void)} = {} as any): Promise<void>
{
    resetInfiteScroll = done;
    loading.value = true;

    let filters: VideoFilters = {
        page: page.value,
        limit: 10 ,
    }

    if (props.search) {
        filters = {
            ...filters,
            title: props.search
        };
    }

    if (props.folderId) {
        filters = {
            ...filters,
            folder_id: props.folderId
        };
    }

    try {
        const response = await videoService.getVideos(filters);
    
        videos.value = [
            ...videos.value,
            ...response.data.videos
        ];

        if (page.value === response.data.pages) {
            
            done('empty');
            return;
        }

        if (response.data.total === 0) {
            videos.value = [];
            done('empty');
            return;
        }

        page.value += 1;
        done('ok');
    } catch (error) {
        done('empty');
    } finally {
        loading.value = false;
    }
}

function search() {
    page.value = 1;
    videos.value = [];
    if (resetInfiteScroll) resetInfiteScroll('ok');
}

defineExpose({
    search
});
</script>