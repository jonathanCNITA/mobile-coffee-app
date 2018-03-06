<template>
	<div>
		<h1>Liste des machines</h1>
		<hr/>
		<app-machine v-for="machine in machines" :machine="machine"></app-machine>
	</div>
</template>

<script>
	import Machine from './Machine.vue'

	export default {
		data() {
			return {
				machines: [
					{
				        id: 1,
				        name: 'What else ?',
				        status: true,
				        checkedAt: new Date(),
				    }, {
				        id: 2,
				        name: 'Broken',
				        status: false,
				        checkedAt: new Date(),
				    }]
			}
		},
		components: {
			'app-machine': Machine
		}
	}
</script>

<style type="text/css"></style>