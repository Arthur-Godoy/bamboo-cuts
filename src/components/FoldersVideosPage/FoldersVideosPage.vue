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
        
        <FolderSection
            v-for="folder in folders"
            :key="folder.id"
            :title="folder.name"
            :total="folder.videos_count"
        >
            <VideoContainer :folder-id="folder.id" />
        </FolderSection>
    </v-container>
</template>

<script lang="ts" setup>
import FolderSection from '@/components/Folders/FolderSection.vue';
import VideoContainer from '@/components/Videos/VideoContainer.vue';
import folderService from '@/service/folderService';
import type { Folder } from '@/types/models/Folder';
import { onBeforeMount, ref } from 'vue';

const folders = ref<Folder[]>([]);
const loading = ref<boolean>(true);

async function getFolders() {
    loading.value = true;
    const response = await folderService.getFolders();

    folders.value = response.data.folders;
    loading.value = false;
}

onBeforeMount(() => {
    getFolders();
});

</script>