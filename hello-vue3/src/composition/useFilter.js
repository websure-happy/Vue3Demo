import {
    ref,
    onMounted,
    onUnmounted,
    computed
} from "vue"
import {
    filter
} from "../utils/LocalStorage"
export default function useFilter(todosRef) {
    const visibilityRef = ref("all");
    const validHash = ["all", "active", "completed"];
    const onHashchange = () => {
        const hash = location.hash.replace(/#\/?/, "");
        if (validHash.includes(hash)) {
            visibilityRef.value = hash;
        } else {
            location.hash = ""
            visibilityRef.value = "all";
        }
    }
    onUnmounted(() => {
        window.addEventListener("hashchange", onHashchange)
    })
    onMounted(() => {
        window.addEventListener("hashchange", onHashchange)
    })
    const filteredTodosRef = computed(() => {
        return filter(todosRef.value, visibilityRef.value);
    });
    const remainingRef = computed(() => {
        return filter(todosRef.value, "active").length;
    });
    const completedRef = computed(() => {
        return filter(todosRef.value, "completed").length;
    });
    return {
        visibilityRef,
        filteredTodosRef,
        remainingRef,
        completedRef
    }
}