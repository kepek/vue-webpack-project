<template>
  <div id="github">
    <h2>{{ msg }}</h2>
    <h1>Latest Vue.js Commits</h1>
    <ul>
      <li v-for="branch in branches">
        <label :for="branch">
          <input type="radio" :id="branch" :value="branch" name="branch" v-model="currentBranch">
          {{ branch }}
        </label>
      </li>
    </ul>
    <h1>vuejs/vue@{{ currentBranch }}</h1>
    <ul v-show="commits">
      <li v-for="record in commits">
        <a :href="record.html_url" target="_blank" class="commit">
          {{ record.sha.slice(0, 7) }}
        </a>
        - <span class="message">{{ record.commit.message | truncate }}</span><br>
        by <span class="author"><a :href="record.author.html_url" target="_blank">{{ record.commit.author.name }}</a></span>
        at <span class="date">{{ record.commit.author.date | formatDate }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  let apiURL = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha='

  export default {
    name: 'github',

    data () {
      return {
        msg: 'GitHub',
        branches: ['master', 'dev'],
        currentBranch: 'master',
        commits: null
      }
    },

    created: function () {
      this.fetchData()
    },

    watch: {
      currentBranch: 'fetchData'
    },

    filters: {
      truncate (v) {
        let newline = v.indexOf('\n')
        return newline > 0 ? v.slice(0, newline) : v
      },
      formatDate (v) {
        return v.replace(/T|Z/g, ' ')
      }
    },

    methods: {
      fetchData () {
        let xhr = new XMLHttpRequest()
        let self = this
        xhr.open('GET', apiURL + self.currentBranch)
        xhr.onload = function () {
          self.commits = JSON.parse(xhr.responseText)
          console.log(self.commits[0].html_url)
        }
        xhr.send()
      }
    }
  }
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
    line-height: 1.5em;
    margin-bottom: 20px;
  }

  a {
    color: #42b983;
  }

  .author, .date {
    font-weight: bold;
  }
</style>
