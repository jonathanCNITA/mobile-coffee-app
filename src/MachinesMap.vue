<template>
	<div>
		<h1>Carte des machines</h1>
		<gmap-map
		class="map-google"
		  :center="{lat:10.0, lng:10.0}"
		  :zoom="2"
		  style="width: 100%; height: 800px"
		>
		<gmap-marker
	      :key="index"
	      v-for="(m, index) in nmarkers"
	      :position="{lat: Number(m.latitude), lng: Number(m.longitude)}"
	      :clickable="true"
	      :draggable="true"
	      @click="center=m.position"
	    ></gmap-marker>
		</gmap-map>
	</div>
</template>

<script>
	
	export default {
		data() {
			return {
				markers: [{
		          position: {lat: 10.0, lng: 10.0}
		        }, {
		          position: {lat: 11.0, lng: 11.0}
		        }],
		        nmarkers: [
					  {
					    "id": "5a9d217a06a4080014cbb9c2",
					    "name": "Magnolia.Denesik",
					    "status": "true",
					    "latitude": "10",
					    "longitude": "10",
					    "checkedAt": "Mon Mar 05 2018 03:19:42 GMT+0000 (UTC)",
					    "createdAt": "2018-03-05T10:52:42.000Z",
					    "updatedAt": "2018-03-05T10:52:42.000Z"
					  },
					  {
					    "id": "5a704bc7f0304d0014e198f6",
					    "name": "Cortney_Bins65",
					    "status": "true",
					    "latitude": "77.5051",
					    "longitude": "-138.6253",
					    "checkedAt": "Mon Jan 29 2018 21:46:29 GMT+0000 (UTC)",
					    "createdAt": "2018-01-30T10:41:11.000Z",
					    "updatedAt": "2018-01-30T10:41:11.000Z"
					  }
				]
			}
		},
		methods: {
			addPositionAttribute(obj) {
				obj.position = { lat: Number(obj.latitude), lng: Number(obj.longitude)};
				console.log(obj.position);
				return obj.position;
			}
		}
	}
</script>

<style type="text/css">
	.map-google {
		margin: auto;
		max-width:  50vw;
    	max-height: 50vw;
	}
</style>