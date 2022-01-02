<template>
  <h1>Selection zone</h1>
  <button @click="visible=!visible" 
          type="button" 
          class="btn btn-info m-3">{{visible?'Hide all':'Show all'}}</button>
  <Selection/>
  <AllCharacters v-if="visible"/>
</template>

<script>
import Selection from './components/Selection.vue'
import AllCharacters from './components/AllCharacters.vue'

export default {
  name: 'App',
  components: {
    Selection, AllCharacters
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    showAllCharacters() {
      const btn = document.querySelector('.btn')
      btn.addEventListener('click',()=>this.visible==!this.visible)
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100%;
  min-height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 50% 50%;
}

</style>
