<template>
  <div>
    <nav
      class="navbar header nav-color"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="is-flex main-title">
        <div class="logo">
          <div class="navbar-item">
            <h1 class="title is-1">グルメモ</h1>
          </div>
        </div>
        <div class="user-name">
          <p class="title is-5">Username：{{ userName }}</p>
        </div>
      </div>

      <div class="navbar-end is-flex ml-auto nav-items">
            <b-navbar-item class="nav-item" tag="router-link" :to="{path:'/mypage'}">
              Myページ
            </b-navbar-item>
            <b-navbar-item class="nav-item" tag="router-link" :to="{path:'/register'}">
              お店を登録
            </b-navbar-item>
            <b-navbar-item class="nav-item" tag="router-link" :to="{path:'/timeline'}">
              タイムライン
            </b-navbar-item>
            <b-navbar-item class="nav-item" tag="router-link" :to="{path:'/contact'}">
              お問合わせ
            </b-navbar-item>
            <b-navbar-item class="nav-item" tag="router-link" :to="{path:'/login'}">
              ログアウト
            </b-navbar-item>
      </div>
    </nav>

    <div class="container column is-10">
        <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      userName: this.$store.state.uname,
      // items: [
      //   {
      //     title: 'Home',
      //     icon: 'home',
      //     to: { name: 'index' }
      //   },
        // {
        //   title: 'Inspire',
        //   icon: 'lightbulb',
        //   to: { name: 'inspire' }
        // }
      // ]
    }
  }
}
</script>

<style>
  .user-name {
    margin: auto 20px;
  }

  .nav-item {
    font-weight: bold;
    color: white;
  }
  .main-title .navbar-item {
    padding: 0;
    margin: auto 10px;
  }
  .logo {
    padding: 0;
  }
</style>