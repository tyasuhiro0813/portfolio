<template>
  <section>
    <section class="index-main-text">
        <h1 class="index-title">美味しかったグルメやお店を簡単に記録</h1>
        <p>グルメモを使えば、美味しかったグルメやお気に入りのお店を簡単に記録することができます。</p>
    </section>
    <section class="index-main-text">
        <h1 class="index-title">おすすめのグルメやお店を他の人にもシェア</h1>
        <p>ボタン1つで、他のグルメモユーザーにおすすめのグルメやお店をシェアすることができます。</p>
    </section>
    <section class="is-flex index-button-area"> 
      <div class="column">
          <b-button type="is-success is-light" label="新規登録/ログインして始める" size="is-medium" @click="join"/>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  layout: "login-layout",
  name: 'IndexPage',
  data(){
    return {

    }
  },
  methods: {
    join() {
      this.$router.push("/login")
    }
  }
}
</script>

<style>
  .main-content {
    margin-top: 20px;
  }

  .index-main-text {
    margin-bottom: 15px;
    color: #267853;
    text-align: center;
  }

  .index-title {
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.125;
    font-family: 'ヒラギノ角ゴ StdN','Hiragino Kaku Gothic StdN',sans-serif;
    padding: 5px;
  }
  .index-button-area {
    text-align: center;
  } 
</style>
