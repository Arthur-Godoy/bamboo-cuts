<template>
    <div
        class="banner-container"
        @mouseenter="showPlayIcon = true"
        @mouseleave="showPlayIcon = false"
    >
        <v-card
            class="rounded-sm pb-5"
            link
            @click="handleClick"
            :disabled="!video.playable"
        >
            <v-row>
                <v-col cols="12" class="cursor-pointer">
                    <v-img cover :src="showPlayIcon ? video.preview : video.thumbnail" height="200"></v-img>
                    <v-icon v-if="showPlayIcon" class="play-icon">mdi-play-circle</v-icon>
                </v-col>

                <v-col cols="12" class="py-5 px-7">
                    <v-row>
                        <v-col cols="12">
                            <v-tooltip theme="dark" :text="video.title">
                                <template v-slot:activator="{ props }">
                                    <h6 v-bind="props" class="text-h5 text-truncate">
                                        {{ video.title }}
                                    </h6>
                                </template>
                            </v-tooltip>
                        </v-col>

                        <v-col class="d-flex justify-space-between">
                            <IconWithText
                                icon="mdi-clock"
                                :text="videoLengthFormater(video.length)"
                            />
                            <IconWithText
                                icon="mdi-calendar"
                                :text="dateFormater(video.updated_at)"
                            />
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Video } from "@/types/models/Video";
import { videoLengthFormater } from "@/utils/formaters/videoLengthFormater";
import dateFormater from "@/utils/formaters/dateFormater";
import IconWithText from "../IconWithText/IconWithText.vue";
import router from "@/router";

const props = defineProps<{
    video: Video;
}>();

const showPlayIcon = ref(false);

function handleClick() {
    router.push({ name: "Assistir", params: { id: props.video.id } });
    emit('picked', props.video.id);
};

const emit = defineEmits(['picked']);

</script>

<style scoped>
.play-icon {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 64px;
    color: #383838c7;
}
</style>
