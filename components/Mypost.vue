<template>
    <section class="container is-flex mypost">
        <div class="container mypost-items">
            <b-field class="mypost-item" label="店名" horizontal>{{ item.name }}</b-field>
            <b-field class="mypost-item" label="エリア" horizontal>{{ item.area }}</b-field>
            <b-field class="mypost-item" label="ジャンル" horizontal>{{ item.genre }}</b-field>
            <b-field class="mypost-item" label="評価" horizontal><b-rate v-model="item.rate" :disabled="isDisabled"></b-rate></b-field>
        </div>
        <div class="container mypost-items">
            <b-field class="mypost-item" label="来店日" horizontal>
                {{ item.date.toDate().getFullYear() }}年{{ item.date.toDate().getMonth() }}月{{ item.date.toDate().getDate() }}日
            </b-field>
            <b-field class="mypost-item" label="来店時間" horizontal>
                {{ item.time.toDate().getHours().toString().padStart(2, "0") }}時{{ item.time.toDate().getMinutes().toString().padStart(2, "0") }}分
            </b-field>
            <b-field class="mypost-item" label="来店人数" horizontal>{{ item.member }}</b-field>
            <b-field class="mypost-item" label="おすすめ" horizontal>{{ item.recommend }}</b-field>
        </div>
        <div class="is-flex mypost-items photos">
            <figure class="image is-128x128">
                <img v-bind:src="item.imageUrl[0]">
            </figure>
            <figure class="image is-128x128">
                <img v-bind:src="item.imageUrl[1]">
            </figure>
            <figure class="image is-128x128">
                <img v-bind:src="item.imageUrl[2]">
            </figure>
        </div>
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
    .mypost {
        margin-top: 80px;
        margin-bottom: 80px;
        padding-bottom: 30px;
        border-bottom: 3px double #8c8b8b;
    }
    .mypost-items {
        margin: 0 auto;
    }
    .mypost-item {
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
        margin-right: 0px;
    }
    .image img {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        max-width: 100%;
        height: 150px;
        object-fit: contain;
        border: solid 1px green;
    }
</style>