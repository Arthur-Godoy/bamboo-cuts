<template>
    <v-container
        fluid
        class="px-0 px-md-10 py-md-5"
    >
        <v-progress-linear
            v-if="loading"
            indeterminate
            color="primary"
        />
        <div class="text-center mt-10" v-if="folders.length === 0 && !loading">
            <h1 class="text-h4 text-gray font-weight-bold">
                Você ainda não tem nenhuma pasta.
            </h1>
        </div>
        <FolderSection
            v-for="folder in folders"
            :key="folder.id"
            :title="folder.name"
            :total="folder.videos_count"
        >
            <VideoScroll
                :folder-id="folder.id"
            />
        </FolderSection>
    </v-container>
</template>

<script lang="ts" setup>
import FolderSection from '@/components/Folders/FolderSection.vue';
import folderService from '@/service/folderService';
import type { Folder } from '@/types/models/Folder';
import { onBeforeMount, ref } from 'vue';
import VideoScroll from '../Videos/VideoScroll.vue';

const folders = ref<Folder[]>([]);
const loading = ref<boolean>(true);

async function getFolders() {
    try {
        loading.value = true;
        const response = await folderService.getFolders();
    
        folders.value = response.data.folders;
    } finally {
        loading.value = false;
    }
}

onBeforeMount(() => {
    getFolders();
});

</script>