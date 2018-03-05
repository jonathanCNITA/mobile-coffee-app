<template>
  <div id="app">
    <h1>{{ appName }}</h1>
    <a href="/#/"><img src="./src/assets/coffee_icon.png"/></a>
    <h2>Que voulez vous faire ?</h2>

    <div>
      <button class="coffee-button" @click="onMachinesListClick">Consulter la liste des machines</button>
      <button class="coffee-button" @click="onMapClick">Voir la carte</button>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      appName: 'COFFEE APP'
    }
  },
  methods: {
    onMachinesListClick() {
      window.alert('Consulter la liste des machines');
      window.location.href = '/#/list';
    },
    onMapClick() {
      window.alert('Voir la carte');
      window.location.href = '/#/map';
    }
  }
  
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 200px;
  height: 200px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.coffee-button {
  background-color: #42b883;
  padding: 20px;
  margin: 5px;
  border: none;
  color: rgb(255, 255, 255);
}

.coffee-button:hover {
  background-color: #35495e;
}
</style>
