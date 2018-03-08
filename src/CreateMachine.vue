<template>
	<div>
		<form class="" method="post" @submit.prevent="addMachine">
			<input type="text" name="" value="" v-model="machine.name">
			<input type="checkbox" value="">
			<input type="text" name="" value="" v-model="machine.latitude">
			<input type="text" name="" value="" v-model="machine.longitude">
			<button type="submit" name="button">Submit</button>
		</form>
	</div>
</template>

<script>
	
	export default {
		data() {
			return {
				machine : {
					name: 'unamed',
					status: false
					latitude: '0',
					longitude: '0',
					checkedAt: new Date()
				}
				
			}
		},
		methods: {
			addMachine() {
				console.log()
			}
		},

	}

</script>