<template>
	<div>

		<h1>light = {{light}}</h1>
		<button v-on:click="flickSwitch">flickSwitch()</button>

	</div>
</template>

<script lang="ts">
import { light, flickSwitch } from "./store";

export default {
	setup: () => {
		return { light, flickSwitch }
	}
};
</script>
