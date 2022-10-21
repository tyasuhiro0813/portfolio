<template>
  <div>
    <nav
      class="navbar header has-shadow nav-color"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/"
        >
          <h1 class="title is-1">グルメモ</h1>
        </a>
      </div>
    </nav>

    <section class="main-content columns">
      <div class="container column is-10">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<style>
  .nav-color {
    background-color: #267853;
  }
  .navbar-brand {
    margin: 0 auto;
  }
  .title {
      color: white;
      font-family: 'ヒラギノ角ゴ StdN','Hiragino Kaku Gothic StdN',sans-serif;
  }
</style>


