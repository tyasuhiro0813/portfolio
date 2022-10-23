<template>
    <section>
        <section class="name">
            <p><span>投稿者</span>：{{ item.userName }}</p>
        </section>
        <section class="container is-flex post">
            <div class="container post-items">
                <b-field class="post-item" label="店名" horizontal>{{ item.name }}</b-field>
                <b-field class="post-item" label="エリア" horizontal>{{ item.area }}</b-field>
                <b-field class="post-item" label="ジャンル" horizontal>{{ item.genre }}</b-field>
                <b-field class="post-item" label="評価" horizontal><b-rate v-model="item.rate" :disabled="isDisabled"></b-rate></b-field>
            </div>
            <div class="container post-items">
                <b-field class="post-item" label="来店日" horizontal>
                    {{ item.date.toDate().getFullYear() }}年{{ item.date.toDate().getMonth() }}月{{ item.date.toDate().getDate() }}日
                </b-field>
                <b-field class="post-item" label="来店時間" horizontal>
                    {{ item.time.toDate().getHours().toString().padStart(2, "0") }}時{{ item.time.toDate().getMinutes().toString().padStart(2, "0") }}分
                </b-field>
                <b-field class="post-item" label="来店人数" horizontal>{{ item.member }}</b-field>
                <b-field class="post-item" label="おすすめ" horizontal>{{ item.recommend }}</b-field>
            </div>
            <div class="is-flex post-items photos">
                <figure class="image is-128x128">
                    <img v-bind:src="item.imageUrl">
                </figure>
                <figure class="image is-128x128">
                    <img v-bind:src="item.imageUrl">
                </figure>
                <figure class="image is-128x128">
                    <img v-bind:src="item.imageUrl">
                </figure>
            </div>
        </section>
    </section>
</template>

<script>


export default {
    data() {
        return {
            isDisabled: true
        }
    },
    props: {
        item:{
            type:Object, 
            default: () => { }
        }
    }
}
</script>

<style>
    .post {
        margin-top: 0px;
        margin-bottom: 80px;
        padding-bottom: 30px;
        border-bottom: 3px double #8c8b8b;
    }
    .post-items {
        margin: 0 auto;
    }
    .post-item {
        text-align: center;
        text-size-adjust: none;
    }
    .field-label {
        max-width: 100%;
        text-align: center;
    }
    .label {
        min-width: 100px;
    }
    .photos {
        margin: auto;
    }
    .image {
        position: relative;
        margin-right: 5px;
    }
    img {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
    }
    .name
    {
        margin-top: 50px;
        margin-bottom: 10px;
        padding-left: 25px;
        font-size: 18px;
    }
    .name span {
        font-weight: bold;
    }
</style>