<template>
	<div>
		<h1>Machine {{ name }}</h1>
		<h3 :class="{green: status, red: !status}">Status {{ getStatus }}</h3>
		<h2>{{ dateReadable }}</h2>
	</div>
</template>


<script>
	import moment from 'moment'

	export default {
		data() {
			return {
				name: 'What else ?',
				status: true,
				checkedAt: new Date()
			}
		},
		computed: {
			getStatus() {
				return this.status ? 'OK' : 'KO';
			},
			dateReadable() {
				return moment(this.checkedAt).format('L, LTS');
			}
		},
		filter: {

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