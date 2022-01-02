<template>
  <div class="singleCharacter" v-for="(el) in results" :key="el.id">
    <!-- <div id="index">{{index}}</div> -->
    <img :src="el.image" class="avatar" />
    <li>{{el.name}}</li>
    <!-- <div>({{el.status}})</div> -->
    <br>
  </div>
</template>

<script>
export default {
  name: 'SingleCharacter',
  props: {
    results: {
      type: Array,
    }
  }
}
</script>

<style>
.singleCharacter {
    background-color: palegoldenrod;
    height: 13em;
    padding: 2em;
    margin: 2em;
    border: 3px solid lime;
}

.avatar {
    width:100px;
    height:100px;
    border-radius: 50%;
    border: 3px solid lime;
}
</style>