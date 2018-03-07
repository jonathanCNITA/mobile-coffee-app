<template>
	<div class="machine">
		<h1>Machine {{ name }}</h1>
		<h3 :class="{green: status, red: !status}">Status {{ getStatus }}</h3>
		<h2>Last checked: {{ dateReadable }}</h2>
		<router-link to="/machine/form/" :test="id"><button>Get more info</button></router-link>
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
				checkedAt: this.machine.checkedAt,
				id: this.machine.id
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
		},
	}

</script>

<style type="text/css" scoped>
	.machine {
		margin: auto;
		border: 1px solid #000000;
		margin-top: 10px;
		max-width:  50vw;
	}

	.red {
		color: red;
	}

	.green {
		color: green;
	}

</style>