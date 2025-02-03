<template>
    <v-container fluid class="pa-5">
        <v-row :style="$vuetify.display.smAndDown && 'flex-direction: column-reverse;'">
            <v-col
                cols="12"
                md="9"
            >
                <h1>Seus Vídeos</h1>
            </v-col>
            <v-col
                cols="12"
                md="3"
                class="mt-1"
            >
                <SearchBar v-model="search" @search="handleSearch" />
            </v-col>
        </v-row>
        <v-tabs
            v-model="tab"
            color="primary"
        >
            <v-tab value="videosSheets">
                Pastas de Vídeos
            </v-tab>
            <v-tab value="allVideos">
                Todos os Vídeos
            </v-tab>
        </v-tabs>
  
        <v-tabs-window v-model="tab">
            <v-tabs-window-item value="videosSheets">
                <FoldersVideosPage />
            </v-tabs-window-item>
  
            <v-tabs-window-item value="allVideos" height="100%">
                <VideoScroll ref="allVideos" :search="search" />
            </v-tabs-window-item>
        </v-tabs-window>
    </v-container>
</template>

<script lang="ts" setup>
import SearchBar from '@/components/SearchBar/SearchBar.vue';
import FoldersVideosPage from '@/components/FoldersVideosPage/FoldersVideosPage.vue';
import { ref, useTemplateRef } from 'vue';
import VideoScroll from '@/components/Videos/VideoScroll.vue';

const search = ref<string>("");
const tab = ref<string>("");
const allVideos = useTemplateRef("allVideos");

function handleSearch() {
    tab.value = "allVideos";
    allVideos.value?.search();
}
</script>