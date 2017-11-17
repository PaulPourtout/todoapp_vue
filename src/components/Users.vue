<template>
  <div>
    <nav class="horizontal-align navbar">
      <a class="btn" href="/#/todos">Go to Todos</a>
      <h1 class="title">{{title}}</h1>
    </nav>

    <div v-if="error">
        {{error}}
    </div>

    <ul class="list" v-if="datas">
        <li v-for="data in datas">
          <a class="list-item" href="">
            {{data.firstname}} {{data.lastname}}
          </a>
        </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Users',
  data () {
    return {
      title: 'Users List',
      loading: false,
      datas: null,
      error: null
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.error = this.datas = null
      this.loading = true
      axios.get('http://localhost:3000/users')
      // .then(datas => datas.json())
      .then(datas => {
        console.log(datas)
        this.loading = false
        this.datas = datas.data
      })
      .catch(err => console.log('error', err))
    }
  }
}
</script>

<style>

</style>

