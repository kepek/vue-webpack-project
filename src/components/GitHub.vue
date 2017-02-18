<template>
  <app-layout id="app-layout">
    <h1>Latest Vue.js Commits</h1>
    <ul>
      <li v-for="branch in branches">
        <label :for="branch">
          <input type="radio" :id="branch" :value="branch" name="branch" v-model="currentBranch">
          {{ branch }}
        </label>
      </li>
    </ul>
    <div v-if="commits">
      <h1>vuejs/vue@{{ currentBranch }}</h1>
      <ul>
        <li v-for="record in commits" class="commit">
          <a :href="record.html_url" target="_blank" class="commit">
            {{ record.sha.slice(0, 7) }}
          </a>
          - <span class="message">{{ record.commit.message | truncate }}</span>
          <br>
          by <span class="author">
          <a :href="record.author.html_url" target="_blank">
            {{ record.commit.author.name }}
          </a>
        </span>
          at <span class="date">{{ record.commit.author.date | formatDate }}</span>
        </li>
      </ul>
    </div>
  </app-layout>
</template>

<script>
  import AppComponent from 'src/AppComponent'
  import {mapGetters} from 'vuex'

  const name = 'github'

  const dataModel = {
    head: {
      title: {
        inner: 'GitHub'
      }
    },
    username: 'vuejs',
    repo: 'vue',
    branches: ['master', 'dev'],
    currentBranch: 'master'
  }

  export default AppComponent({
    name,

    data () {
      return dataModel
    },

    computed: mapGetters({
      commits: 'commits'
    }),

    created () {
      this.getCommits()
    },

    beforeDestroy () {
      this.$bus.off(`${name}.branch.change`, this.currentBranch)
    },

    watch: {
      currentBranch () {
        this.getCommits()
      }
    },

    methods: {
      getCommits () {
        this.$bus.emit(`${name}.branch.change`, this.currentBranch)
        return this.$store.dispatch('getCommits', {
          username: this.username,
          repo: this.repo,
          q: {
            per_page: 3,
            sha: this.currentBranch
          }
        })
      }
    },

    filters: {
      truncate (v) {
        let newline = v.indexOf('\n')
        return newline > 0 ? v.slice(0, newline) : v
      },
      formatDate (v) {
        return v.replace(/T|Z/g, ' ')
      }
    }
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #app-layout {
    background: blue;
    color: white;
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
    line-height: 1.5em;
    margin-bottom: 20px;
  }

  a {
    color: #42b983;
  }

  .commit {
    display: block;
  }

  .author, .date {
    font-weight: bold;
  }
</style>
