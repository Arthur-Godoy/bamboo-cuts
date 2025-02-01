<template>
    <v-app-bar>
        <div class="d-flex align-center justify-space-between w-100 px-5">
            <div class="d-flex align-center">
                <v-img
                    src="@/assets/logo.png"
                    min-width="70"
                />
                <h2>Bamboo Cuts</h2>
            </div>
            <v-switch
                v-model="$vuetify.theme.current.dark"
                true-icon="mdi-weather-night"
                false-icon="mdi-white-balance-sunny"
                base-color="yellow"
                inset
                hide-details
                @click="toggleTheme"
            />
        </div>
    </v-app-bar>
</template>

<script lang="ts" setup>
import { useTheme } from 'vuetify';


const theme = useTheme();

function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'lightTheme' : 'darkTheme';
    localStorage.setItem('theme', theme.global.name.value);
}

</script>