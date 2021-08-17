<template>
  <li>
    <card-wrapper>
    <header>
      <h3>{{ title }}</h3>
      <button-wrapper mode="flat" @click="deleteResource(id)">Delete</button-wrapper>
    </header>
    <p>{{ description }}</p>
      <p>{{date}}</p>
    <nav>
      <a :href="link" target="_blank">View Link</a>
    </nav>
    </card-wrapper>
  </li>
</template>

<script>
export default {
  props: ['id','title', 'description', 'link', 'date'],
  inject:['deleteResource']
}
</script>

<style scoped>
li {
  margin: 0;
  max-width: 100%;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
