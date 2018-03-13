<template>
	<div>
		<h1>Liste des machines</h1>
		<hr/>
		<div>
			<p>show</p>
			<toggle-button 	v-model="showAll"  
							:labels="{checked: 'all', unchecked: 'only'}">				
			</toggle-button>
			<toggle-button 	v-model="showBroken" v-show="!showAll"
							:labels="{checked: 'OK', unchecked: 'KO'}">
								
			</toggle-button>
		</div>
		<div v-for="machine in machines">
			<!-- <h1 v-if="showBroken && machine.status === 'true'">{{ machine.status }}</h1> -->
			<app-machine  v-if="showAll || (showBroken && getStatusTrueOrFalse(machine.status)) || (!showBroken && !getStatusTrueOrFalse(machine.status))" :machine="machine"></app-machine>
		</div>
	</div>
</template>

<script>
	
	export default {
		props: ['machines'],
		data() {
			return {
				showBroken: false,
				showAll: true,
				machinestest: [
					{
				        id: 1,
				        name: 'test0',
				        status: false,
				        checkedAt: new Date(),
				        latitude: 10,
  						longitude: 10
				    }, {
				        id: 2,
				        name: 'test1',
				        status: 'false',
				        checkedAt: new Date(),
				        latitude: 11,
  						longitude: 9.6
				    }
				]
			}
		},
		methods: {
			getStatusTrueOrFalse(status) {
				if(typeof(status) === 'string') {
					return status === 'true' ? true : false;	
				}
				return status;
			},
		}
	}
</script>

<style type="text/css"></style>