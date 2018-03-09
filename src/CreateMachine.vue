<template>
	<div>
		<h1>Ajouter une machine</h1>

		<form @submit="sub" action="#" method="post">
			<div class="form-item">
            	<label for="machineName">Nom machine</label>
            	<input id="machineName" v-model="machine.name" :placeholder="machine.name">
          	</div>
          	<div class="form-item">
            	<label for="machineStatus">Status</label>
            	<input type="checkbox" id="machineStatus" v-model="machine.status" :placeholder="machine.status">
          	</div>
          	
          	<div class="form-item">
            	<label for="lattitude">lattitude</label>
            	<input id="lattitude" v-model="machine.markerlat" :placeholder="machine.markerlat">
          	</div>
          	<div class="form-item">
            	<label for="longitude">longitude</label>
            	<input id="longitude" v-model="machine.markerlng" :placeholder="machine.markerlng">
          	</div>
          	<button type="submit">Add</button>
    	</form>

		<gmap-map
    		class="map-google"
      		:center="{lat:10.0, lng:10.0}"
      		:zoom="2"
      		style="width: 100%; height: 800px"
    	>
      	<gmap-marker
          :key="0"
          :position="getCoords"
          :clickable="true"
          :draggable="true"
          @dragend="getMarkerPosition($event.latLng)"
        	></gmap-marker>
    	</gmap-map>
	</div>
</template>

<script>
	
	export default {
		data() {
			return {
				machine : {
					name: 'unamed',
					status: false,
					markerlat: 10,
      				markerlng: 10,
					checkedAt: new Date()
				}
				
			}
		},
		methods: {
			addMachine() {
				console.log('nothing');
			},
			getMarkerPosition(dt) {
		      console.log(`lattitude: ${dt.lat()} | longitude: ${dt.lng()}`);
		      this.machine.markerlat = dt.lat();
		      this.machine.markerlng = dt.lng();
			},
			sub(event) {
     			event.preventDefault();
      			console.log(`You will send -> lattitude: ${this.markerlat} | longitude: ${this.markerlng}`);
    		}
		},
		computed: {
			updateMarker() {
				return {lat: this.machine.latitude, lng: this.machine.longitude};
			},
			getCoords() {
		      return  { lat: this.machine.markerlat, lng: this.machine.markerlng };
		    }
		}

	}

</script>

<style type="text/css" scoped>
form {
  	margin: 20px;
}

.form-item {
  	margin: 10px;
}
</style>