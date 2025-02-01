import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

const useAppStore = defineStore("app", () => {
    const loading: Ref<boolean> = ref(false);

    function startLoading() {
        loading.value = true;
    }

    function stopLoading() {
        loading.value = false;
    }

    return {
        loading,
        startLoading,
        stopLoading,
    };
});

export default useAppStore;
