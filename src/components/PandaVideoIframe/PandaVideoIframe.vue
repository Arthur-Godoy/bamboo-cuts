<template>
    <v-responsive  aspect-ratio="16/9" v-resize="resizeIframe">
        <iframe
            width="100%"
            :src="src"  
            id="panda-player"
            :height="height"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            @resize="console.log('resize')"
            ref="iframe"
        ></iframe>
    </v-responsive>
</template>

<script setup lang="ts">
import { ref, useTemplateRef } from 'vue';

const props = defineProps({
  src: String,
});

const iframe = useTemplateRef("iframe");
const height = ref<number>(0);

function resizeIframe() {
  height.value = iframe.value?.clientWidth ? iframe.value?.clientWidth * 9/16 : 0;
}
</script>