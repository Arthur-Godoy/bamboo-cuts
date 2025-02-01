import { defineStore } from "pinia";
import { ref } from "vue";

export interface MessageStore {
    text: string;
    type: "success" | "error";
    open: boolean;
    addMessage(message: string, type: "success" | "error"): void;
}

const useMessageStore = defineStore("message", () => {
    const text = ref<string>("");
    const type = ref<"success" | "error">("success");
    const open = ref<boolean>(false);

    function addMessage(message: string, variant: "success" | "error"): void {
        text.value = message;
        type.value = variant;
        open.value = true;
    }

    return {
        text,
        type,
        open,
        addMessage,
    };
});

export default useMessageStore;
