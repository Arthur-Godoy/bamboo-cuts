<template>
    <v-app>
        <Default>
            <v-main>
                <router-view />
            </v-main>
        </Default>
        <SnackBar />
    </v-app>
</template>

<script lang="ts" setup>
import SnackBar from './components/SnackBar/SnackBar.vue';
import Default from './layout/default.vue';
</script>
