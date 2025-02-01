<template>
    <v-row>
        <v-col
            v-for="i in 8"
            class="pa-5"
            :cols="cols || 12"
            :sm="cols || 6"
            :md="cols || 3"
            :xl="cols || 2"
        >
            <v-skeleton-loader 
                :elevation="3"
                type="card"
                height="300"
                indeterminate
            />
        </v-col>
    </v-row>
</template>

<script lang="ts" setup>
const props = defineProps<{
    cols?: number;
}>();
</script>