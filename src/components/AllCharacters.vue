<template>
  <div class="allCharacters">
    <SingleCharacter v-bind:results="results"/>
  </div>
</template>

<script>
import SingleCharacter from './SingleCharacter.vue'

export default {
  name: 'AllCharacters',
  components: {
    SingleCharacter
  },
  data() {
    return {
      results: []
    }
  },
  methods: {
        async getAllCharacters() {
            try {
                const url = 'https://rickandmortyapi.com/api/character'
                const res = await fetch(url)
                if(!res.ok) {
                    const msg = `There is an error: "${res.status} (${res.statusText})"`
                    throw new Error(msg)
                }
                const {results} = await res.json()
                for (let i = 0; i < results.length; i++) {
                    this.results.push({
                        name : results[i].name,
                        status : results[i].status,
                        image: results[i].image
                    })
                }
            } catch(err) {
                console.log(err);
            }
        },
    },
    created() {
        this.getAllCharacters()
    }
}
</script>

<style>
.allCharacters {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: lightgreen;
    text-align: center;
}

.allCharacters > ul, li {
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: center; 
    width: 10em;
}
</style>
