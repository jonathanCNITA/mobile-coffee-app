<template>
	<div>
		<h1>Ajouter une machine</h1>
		<div class="editor">
			<h3 v-show="machineAdded" @click="closeMachineAdded">machine added</h3>
			<form @submit="sub" action="#" method="post">
				<div class="form-item">
	            	<label for="machineName">Nom machine</label>
	            	<input id="machineName" v-model="machine.name" :placeholder="machine.name">
	          	</div>
	          	<toggle-button v-model="machine.status"/>
	          	<div class="form-item">
	            	<label for="lattitude">lattitude</label>
	            	<input id="lattitude" v-model="machine.markerlat" :placeholder="machine.markerlat">
	          	</div>
	          	<div class="form-item">
	            	<label for="longitude">longitude</label>
	            	<input id="longitude" v-model="machine.markerlng" :placeholder="machine.markerlng">
	          	</div>
	          	<button class="coffee-button" type="submit">Add</button>
	    	</form>

	    	<button class="coffee-button" @click="getUserCoords">Get user position</button>
    	</div>
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
	import axios from 'axios';

	export default {
		data() {
			return {
				machine : {
					name: 'unknow',
					status: false,
					markerlat: 10,
      				markerlng: 10,
					checkedAt: 'nope'
				},
				machineAdded: false
				
			}
		},
		methods: {
			addMachine() {
				console.log('nothing');

				axios.post('https://machine-api-campus.herokuapp.com/api/machines', {
				    name: 'Fred',
				    status: false,
				    latitude: 12,
				    longitude: 10,
				    checkedAt: getDateChecked()
				})
				.then(function (response) {
				  console.log(response);
				})
				.catch(function (error) {
				  console.log(error);
				});
			},
			getMarkerPosition(dt) {
		      console.log(`lattitude: ${dt.lat()} | longitude: ${dt.lng()}`);
		      this.machine.markerlat = dt.lat();
		      this.machine.markerlng = dt.lng();
			},
			sub(event) {
     			event.preventDefault();
      			console.log(`You will send -> lattitude: ${this.machine.markerlat} | longitude: ${this.machine.markerlng}`);
      			axios.post('https://machine-api-campus.herokuapp.com/api/machines', {
				    name: this.machine.name,
				    status: this.machine.status,
				    latitude: this.machine.markerlat,
				    longitude: this.machine.markerlng,
				    checkedAt: (new Date()).toLocaleString()
				})
				.then((response) => {
					console.log('////////////////////////////');
				  	console.log(response);
				  	this.machineAdded = true;
				})
				.catch(function (error) {
					console.log('#####################');
				  	console.log(error);
				});
				this.machineAdded = true;
    		},
    		getDateChecked() {
		    	let d = new Date();
		    	return d.toLocaleString();
		    },
		    getUserCoords() {
		    	let getPosition = function (options) {
		  			return new Promise(function (resolve, reject) {
		    				navigator.geolocation.getCurrentPosition(resolve, reject, options);
		  				});
				}

				getPosition()
		  		.then((position) => {
		    		console.log(position);
		    		this.machine.markerlat = position.coords.latitude;
		    		this.machine.markerlng = position.coords.longitude;

		  		})
		  		.catch((err) => {
		    		console.error(err.message);
		  		});
		    },
		    closeMachineAdded() {
		    	this.machineAdded = false;
		    	this.machine.name = "unknow";
		    	this.machine.status = false;
		    	this.machine.markerlat = 10;
		    	this.machine.markerlng = 10;
		    }
		},
		computed: {
			updateMarker() {
				return { lat: this.machine.latitude, lng: this.machine.longitude };
			},
			getCoords() {
		      return  { lat: this.machine.markerlat, lng: this.machine.markerlng };
		    },
		    
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

.map-google {
	max-width: 53%;
	border: 6px solid #35495e;
	margin-top: 30px;
}

.coffee-button {
  background-color: #42b883;
  padding: 10px;
  margin: 5px;
  border: none;
  color: rgb(255, 255, 255);
  min-width: 400px;
}

.coffee-button:hover {
  background-color: #35495e;
}

.editor {
	margin: auto;
	max-width: 50%;
	padding: 20px;
	border: 6px solid #35495e;
}
</style>