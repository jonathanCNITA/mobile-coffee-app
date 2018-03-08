<template>
	<div>
		<h1>Machine Detail</h1>
		<p>ID: {{ selectedMachine.id }}</p>
		<p>NAME: {{ selectedMachine.name }}</p>
		<p>STATUS: {{ selectedMachine.status }}</p>
		<p>LAT: {{ selectedMachine.latitude }}</p>
		<p>LONG: {{ selectedMachine.longitude }}</p>
	</div>
</template>

<script>
	
	export default {
		props: ['machines'],
		data() {
			return {
				selectedMachine: {}
			}
		},
		created() {
			let searchMachine = this.$route.params.id;
			console.log(searchMachine);
			var found = this.machines.find(function(element) {
			  	return element.id === searchMachine;
			});
			this.selectedMachine = found;
		}

	}

</script>