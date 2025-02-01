<template>
    <div>
        <iframe
            width="100%"
            :src="src"  
            id="panda-player"
            style="height: 83vh;"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
        ></iframe>
    </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    src: String,
  });
</script>