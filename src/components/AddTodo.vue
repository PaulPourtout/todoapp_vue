<template>
  <div>
    <nav class="horizontal-align navbar">
      <a class="btn" href="/#/">Go home</a>
      <h1 class="title">Add Todo</h1>
    </nav>
    <form>
      <div>
        <label for="">Todo Name</label>
        <input type="text" v-model="todoName" placeholder="ex: Do my homework">
      </div>
      <div>
        <label for="">Category</label>
        <select name="" id="" v-model="category">
          <option value=1>Backlog</option>
          <option value=2>To Do</option>
          <option value=3>Doing</option>
          <option value=4>Done</option>
        </select>
      </div>
      <button v-on:click="postDatas">Add Todo</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AddTodo',
  data () {
    return {
      title: 'AddTodo',
      todoName: '',
      category: 1
    }
  },
  methods: {
    postDatas () {
      const url = `http://localhost:3000/todos`
      const body = {
        name: this.todoName,
        category_id: this.category
      }
      axios.post(url, body)
      .then(datas => {
        console.log(datas)
        this.todoName = ''
      })
      .catch(err => console.log('error', err))
    }
  }
}
</script>
