<template>
  <div>
    <nav
      class="navbar header is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/"
        >
          <img
            src="~assets/buefy.png"
            alt="Buefy"
            height="28"
          >
        </a>

        <!-- <div class="navbar-burger">
          <p>aaa</p>
          <span />
          <span />
          <span />
        </div> -->
      </div>

    <div class="navbar-end is-flex ml-auto">
          <b-navbar-item class="navbar-right" href="/mypage">
            Myページ
          </b-navbar-item>
          <b-navbar-item href="/register">
            お店を登録
          </b-navbar-item>
          <b-navbar-item href="#">
            タイムライン
          </b-navbar-item>
          <b-navbar-item class="is-flex is-align-items-center">
            ユーザーID：12345
          </b-navbar-item>
    </div>

      
    </nav>

    <div class="container column is-10">
        <Nuxt />
    </div>

    <!-- <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">
          General
        </p>
        <ul class="menu-list">
          <li
            v-for="(item, key) of items"
            :key="key"
          >
            <NuxtLink
              :to="item.to"
              exact-active-class="is-active"
            >
              <b-icon :icon="item.icon" /> {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <Nuxt />
      </div>
    </section> -->
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  }
}
</script>
