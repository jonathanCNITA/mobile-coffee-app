<template>
	<div>
		<h1>Liste des machines</h1>
		<hr/>
		<app-machine></app-machine>
	</div>
</template>

<script>
	import Machine from './Machine.vue'

	export default {
		data() {
			return {

			}
		},
		components: {
			'app-machine': Machine
		}
	}
</script>

<style type="text/css"></style>