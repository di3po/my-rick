const app = {
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

Vue.createApp(app).mount('#app')