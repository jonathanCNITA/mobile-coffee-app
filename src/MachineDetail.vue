<template>
	<div>
		<h1>Machine Detail</h1>
		<hr/>
		<p>ID: {{ selectedMachine.id }}</p>
		<p>NAME: {{ selectedMachine.name }}</p>
		<p>STATUS: {{ selectedMachine.status }}</p>
		<p>LAT: {{ selectedMachine.latitude }}</p>
		<p>LONG: {{ selectedMachine.longitude }}</p>
		<br>
		<gmap-map
    		class="map-google"
      		:center="getCoords"
      		:zoom="12"
      		style="width: 100%; height: 800px"
    	>
      	<gmap-marker
          :key="0"
          :position="getCoords"
          :clickable="true"
          :draggable="false"
        	></gmap-marker>
    	</gmap-map>
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
		computed: {
			getCoords() {
		      return  { lat: Number(this.selectedMachine.latitude), lng: Number(this.selectedMachine.longitude) };
		    },
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

<style type="text/css">
	.map-google {
	max-width: 53%;
	border: 6px solid #35495e;
	margin-top: 30px;
}
</style>