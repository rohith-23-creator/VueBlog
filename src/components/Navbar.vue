<template>
  <header>
    <h1>Vue Blog</h1>
    <nav>
      <routerLink :to="{ name: 'Home' }" class="hm">Home</routerLink>
      <routerLink :to="{ name: 'Create' }">Create Post</routerLink>
    </nav>
  </header>
</template>

<style>
header {
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-color: #0a192f;
  color: #64ffda;
}

header a {
  text-decoration: none;
  color: #64ffda;
  margin-right: 20px;
}

a.router-link-active {
  background: #64ffda;
  color: #0a192f;
  padding: 5px;
}

@media (max-width: 500px) {
  header h1 {
    font-size: 25px;
  }

  header {
    padding: 0 10px;
  }

  .hm {
    margin-right: 20px;
  }

  header a {
    font-size: 14px;
    margin-right: 5px;
  }
}

@media (max-width: 400px) {
  header h1 {
    font-size: 20px;
  }
  header a {
    font-size: 12px;
  }
}
</style>
