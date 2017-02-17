<template>
  <app-layout id="app-layout">
    <p>{{message}}</p>
    <form @submit.prevent="onSubmit">
      <input v-focus v-model="bio">
      <button type="submit">Submit</button>
    </form>
  </app-layout>>
</template>

<script>
  import AppComponent from 'src/AppComponent'

  export default AppComponent({
    name: 'about',

    data () {
      return {
        bio: '...',
        message: 'Tell me something about you!'
      }
    },

    methods: {
      onSubmit () {
        alert(`The only thing that I can say is ${this.bio}`)
      }
    }
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
</style>
