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
		      v-for="(m, index) in machines"
		      :position="{lat: Number(m.latitude), lng: Number(m.longitude)}"
		      :clickable="true"
		      :draggable="true"
		      @click="center=m.position"
		    ></gmap-marker>
		</gmap-map>
		<p @click="logDatas">Log markers Datas for dev purpose only</p>
	</div>
</template>

<script>

	export default {
		props: ['machines'],
		data() {
			return {
				
			}
		},
		methods: {
			logDatas(){
				console.log('#############################');
				console.log(this.machines);
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