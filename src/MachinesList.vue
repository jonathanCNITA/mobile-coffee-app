<template>
	<div>
		<h1>Liste des machines</h1>
		<hr/>
		<app-machine v-for="machine in machines" :machine="machine"></app-machine>
	</div>
</template>

<script>
	
	export default {
		props: ['machines'],
		data() {
			return {
				machinesA: [
					{
				        id: 1,
				        name: 'What else ?',
				        status: true,
				        checkedAt: new Date(),
				        latitude: 10,
  						longitude: 10
				    }, {
				        id: 2,
				        name: 'Broken',
				        status: false,
				        checkedAt: new Date(),
				        latitude: 11,
  						longitude: 9.6
				    }
				]
			}
		}
	}
</script>

<style type="text/css"></style>