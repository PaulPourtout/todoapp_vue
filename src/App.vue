<template>
  <div id="app">
    <header class="horizontal-align">
      <a href="/#/">
        <h1 id="app-name">Trollé</h1>
      </a>
      <a href="/#/addtodo">Add Todo</a>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #313131;
}

header {
  padding: 1rem;
  background-color: #34EFC5;
}

#app-name {
  color: #FFF;
  margin: 0;
  font-size: 1.5rem;
}

a {
  text-decoration: none;
}

p {
  margin: 0;
}
.title {
  margin: 0;
  color: #34EFC5;
}

.btn {
  background-color: #34EFC5;
  padding: 0.5rem 1rem;
  color: #FFF;
  border-radius: 0.2rem;
  font-weight: bold;
  transition: background-color 0.2s;
}
.btn:hover {
  background-color: #39CAAA;
}

.horizontal-align {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar {
  padding: 1rem;
}

.list {
  border: 0.2rem solid #F2F2F2;
  padding: 0.5rem;
  list-style: none;
  border-radius: 0.2rem;
}

.list-item {
  background-color: #F2F2F2;
  color: #313131;
  padding: 1rem;
  display: block;
  margin-bottom: 0.2rem;
  border-radius: 0.2rem;
}

.list-item:hover {
  background-color: #F8F8F8;
}

</style>
