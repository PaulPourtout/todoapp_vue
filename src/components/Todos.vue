<template>
  <div>
    <nav class="horizontal-align navbar">
      <a class="btn" href="/#/">Back to home page</a>
      <h1 class="title">{{title}}</h1>
    </nav>
    <select name="" id="" v-model="selected">
      <option value=0>All</option>
      <option value=1>Backlog</option>
      <option selected value=2>To do</option>
      <option value=3>Doing</option>
      <option value=4>Done</option>
    </select>
    <ul class="list">
      <li class="list-item horizontal-align" v-for="data in datas">
        <p>{{data.name}}</p><button v-on:click="deleteData(data.id)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Todos',
  data () {
    return {
      title: 'Todos',
      datas: null,
      selected: 0,
      loading: false
    }
  },
  created () {
    this.fetchData(this.selected)
  },
  watch: {
    'selected': 'fetchData'
  },
  methods: {
    fetchData (cat) {
      this.loading = true
      let url = cat > 0
        ? `http://localhost:3000/categories/${cat}/todos`
        : `http://localhost:3000/todos`
      axios.get(url)
      .then(datas => {
        console.log(datas)
        this.loading = false
        this.datas = datas.data
      })
    },
    deleteData (id) {
      let url = `http://localhost:3000/todos/${id}`
      axios.delete(url)
      .then(data => {
        console.log(data)
        const dataIndex = this.datas.map(data => data.id).indexOf(id)
        this.datas.splice(dataIndex, 1)
      })
      .catch(err => console.log('error', err))
    }
  }
}
</script>
