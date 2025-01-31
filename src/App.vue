<template>
    <v-app>
        <Default>
            <v-main>
                <router-view />
            </v-main>
        </Default>
    </v-app>
</template>

<script lang="ts" setup>
import Default from './layout/default.vue';

</script>
