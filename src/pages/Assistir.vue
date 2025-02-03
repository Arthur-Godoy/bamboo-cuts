<template>
    <v-container fluid class="pa-0 ma-0">
        <AppLoading v-if="loading" />
        <v-row v-if="video">
            <v-col cols="12" md="9">
                <PandaVideoIframe :src="video?.video_player" />
                <VideoDetails @edited="getVideoDetails" :video="video" />
            </v-col>
            <v-col cols="12" md="3" class="border-s">
                <VideoScroll
                    @picked="getVideoDetails"
                    :playing-id="video.id"
                    :cols="12"
                    :height="'100vh'"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import PandaVideoIframe from '@/components/PandaVideoIframe/PandaVideoIframe.vue';
import VideoScroll from '@/components/Videos/VideoScroll.vue';
import VideoDetails from '@/components/Videos/VideoDetails.vue';
import videoService from '@/service/videoService';
import type { Video } from '@/types/models/Video';
import { onBeforeMount, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import AppLoading from '@/components/Loading/AppLoading.vue';

const route = useRoute();
const loading = ref<boolean>(false);
const video = ref<Video | null>(null);

async function getVideoDetails(id: string): Promise<void>
{
    try {
        loading.value = true;
        const response = await videoService.showVideo(id);
    
        video.value = response.data;
    } finally {
        loading.value = false;
    }
}

onBeforeMount(() => {
    getVideoDetails(route.params.id as string);	
});
</script>