<template>
    <div id="loading-screen">
        <v-progress-circular  indeterminate color="primary" size="200">
            <v-img
                src="@/assets/logo.png"
                width="100"
            />
        </v-progress-circular>
    </div>
</template>

<style scoped>
#loading-screen {
    min-height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 9999;
    backdrop-filter: blur(2px);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(var(--v-theme-surface));
}
</style>
