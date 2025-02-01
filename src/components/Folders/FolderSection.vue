<template>
    <div>
        <v-container fluid>
            <v-row
                justify="space-between"
                justify-sm="start"
                align="center"
                class="border-b px-3"
                @click="expand = !expand"
            >
                <h3 class="text-h6">
                    {{ title }}
                </h3>

                <v-col class="d-flex justify-space-between align-center">
                    <h4 class="text-gray">
                        ({{ total }})
                    </h4>
                    <v-icon
                        :icon="expand ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                        size="small"
                        @click="expand = !expand"
                    />
                </v-col>
            </v-row>
        </v-container>

        <v-expand-transition>
            <div :class="expand ? 'd-block' : 'd-none'">
                <div
                    v-if="total === '0'"
                    class="text-center"
                >
                    <h4 class="text-gray">
                        Nenhum video nesta pasta
                    </h4>
                </div>

                <slot v-else />
            </div>
        </v-expand-transition>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const expand = ref(true);

defineProps<{
    title: string;
    total: string;
}>();
</script>