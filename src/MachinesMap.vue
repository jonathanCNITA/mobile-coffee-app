<template>
	<div>
		<h1>Carte des machines</h1>
		<gmap-map
		class="map-google"
		  :center="{lat:45.1666700, lng:5.7166700}"
		  :zoom="7"
		  style="width: 100%; height: 800px"
		>
		</gmap-map>
	</div>
</template>

<script></script>

<style type="text/css">
	.map-google {
		margin: auto;
		max-width:  50vw;
    	max-height: 50vw;
	}
</style>