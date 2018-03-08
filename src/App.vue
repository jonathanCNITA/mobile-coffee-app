<template>
  <div id="app">
    <h1>{{ appName }}</h1>
    <router-link to="/" replace><img src="./assets/coffee_icon.png"/></router-link>
    <h2>Que voulez vous faire ?</h2>

    <div>
      <router-link to="/list" replace><button class="coffee-button" >Consulter la liste des machines</button></router-link>
      <router-link to="/map" replace><button class="coffee-button">Voir la carte</button></router-link>
    </div>

    <router-view :machines="machines"></router-view>
  </div>
</template>


<script>
  import axios from 'axios';

  export default {
    name: 'app',
    data () {
      return {
        appName: 'COFFEE APP',
        machines: [
            {
                  id: 1,
                  name: 'example',
                  status: true,
                  checkedAt: new Date(),
                  latitude: 10,
                  longitude: 10
              }, {
                  id: 2,
                  name: 'example 2',
                  status: false,
                  checkedAt: new Date(),
                  latitude: 11,
                  longitude: 9.6
              }
          ]
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
    },
    created() {
        axios.get(`https://machine-api-campus.herokuapp.com/api/machines`)
        .then(response => {
              console.log(response);
              this.machines = response.data;
          })
        .catch(e => {
          this.errors.push(e)
        });
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
