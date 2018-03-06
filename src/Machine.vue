<template>
	<div>
		<h1>Machine {{ name }}</h1>
		<h3 :class="{green: status, red: !status}">Status {{ getStatus }}</h3>
		<h2>Last time checked: {{ checkedAt }}</h2>
	</div>
</template>


<script>
	
	export default {
		data() {
			return {
				name: 'What else ?',
				status: false,
				checkedAt: new Date()
			}
		},
		computed: {
			getStatus() {
				return this.status ? 'OK' : 'KO';
			}
		}
	}

</script>

<style type="text/css">
	.red {
		color: red;
	}

	.green {
		color: green;
	}
</style>