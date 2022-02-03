import { ref } from "vue";

export const light = ref<"on" | "off">("off");

export const flickSwitch = () => {
	light.value = light.value === "off" ? "on" : "off";
};
