<template>
	<div class="machine">
		<h1>Machine {{ name }}</h1>
		<h3 :class="{green: status, red: !status}">Status {{ getStatus }}</h3>
		<h2>Last checked: {{ dateReadable }}</h2>
	</div>
</template>


<script>
	//import moment from 'moment'

	export default {
		props:['machine'],
		data() {
			return {
				name: this.machine.name,
				status: this.machine.status,
				checkedAt: this.machine.checkedAt
			}
		},
		computed: {
			getStatus() {
				return this.status ? 'OK' : 'KO';
			},
			dateReadable() {
				//return moment(this.checkedAt).format('L, LTS');
				return this.checkedAt.toLocaleString();
			}
		}
	}

</script>

<style type="text/css" scoped>
	.machine {
		border: 1px solid #000000;
		margin-top: 10px;
	}

	.red {
		color: red;
	}

	.green {
		color: green;
	}

</style>