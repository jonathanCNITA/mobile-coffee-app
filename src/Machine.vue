<template>
	<div class="machine">
		<h1>Machine {{ name }}</h1>
		<h3 :class="{green: getStatus, red: !getStatus}">Status {{ getStatusString }}</h3>
		<h2 :class="{red: checkedAt==undefined}">Last checked: {{ dateReadable }}</h2>
		<router-link :to="'detail/'+ id"><button class="coffee-button">Details</button></router-link>
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
			getStatusString() {
				if(typeof(this.status) === 'string') {
					return this.status === 'true' ? 'OK' : 'KO';	
				}
				return this.status ? 'OK' : 'KO';
				
			},
			getStatus() {
				if(typeof(this.status) === 'string') {
					return this.status === 'true' ? true : false;	
				}
				return this.status;
			},
			dateReadable() {
				//return moment(this.checkedAt).format('L, LTS');
				if(this.checkedAt === undefined){
					return "no checked time";
				}
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

	.coffee-button {
	  background-color: #42b883;
	  padding: 10px;
	  margin: 5px;
	  border: none;
	  color: rgb(255, 255, 255);
	}

	.coffee-button:hover {
	  background-color: #35495e;
	}

</style>