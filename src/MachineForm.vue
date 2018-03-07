<template>
	<div>
		<h1>Machine Form</h1>
		<p>{{ selectedMachine.id }}</p>
		<p>{{ selectedMachine.name }}</p>
		<p>{{ selectedMachine.status }}</p>
		<p>{{ selectedMachine.latitude }}</p>
		<p>{{ selectedMachine.longitude }}</p>
	</div>
</template>

<script>
	
	export default {
		props: ['machines', 'test'],
		data() {
			return {
				selectedMachine: {}
			}
		},
		created() {
			console.log('########################################');
			console.log(this.test);
			var found = this.machines.find(function(element) {
			  	return element.id = "5aa002ecffd5c7001479a3fc";
			});
			console.log(found);
			this.selectedMachine = found;
		}

	}

</script>