import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/components/Users'
import Todos from '@/components/Todos'
import AddTodo from '@/components/AddTodo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Users',
      component: Users
    },
    {
      path: '/todos',
      name: 'Todos',
      component: Todos
    },
    {
      path: '/addtodo',
      name: 'AddTodo',
      component: AddTodo
    }
  ]
})
