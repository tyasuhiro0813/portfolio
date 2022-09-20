<template>
    <section class="is-flex">
        <section class="control column is-half is-justify-content-center">
            <section>
                    <b-field label="店名" horizontal>{{ item.name }}</b-field>
                    <b-field label="エリア" horizontal>{{ item.area }}</b-field>
                    <b-field label="ジャンル" horizontal>{{ item.genre }}</b-field>
                    <b-field label="評価" horizontal><b-rate v-model="item.rate" :disabled="isDisabled"></b-rate></b-field>
                    <b-field label="来店日" horizontal>
                        {{ item.date.toDate().getFullYear() }}年{{ item.date.toDate().getMonth() }}月{{ item.date.toDate().getDate() }}日
                    </b-field>
                    <b-field label="来店時間" horizontal>
                        {{ item.time.toDate().getHours().toString().padStart(2, "0") }}時{{ item.time.toDate().getMinutes().toString().padStart(2, "0") }}分
                    </b-field>
                    <b-field label="来店人数" horizontal>{{ item.member }}</b-field>
                    <b-field label="おすすめ" horizontal>{{ item.recommend }}</b-field>
            </section>
        </section>
        <section class="is-flex">
            <figure class="image is-128x128">
                <img v-bind:src="item.imageUrl">
            </figure>
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