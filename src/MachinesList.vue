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
				machinestest: [
					{
				        id: 1,
				        name: 'test0',
				        status: true,
				        checkedAt: new Date(),
				        latitude: 10,
  						longitude: 10
				    }, {
				        id: 2,
				        name: 'test1',
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