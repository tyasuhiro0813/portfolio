<template>
    <section class="section container column is-half">
        <b-field label="店名" horizontal>
            <b-input v-model="name"></b-input>
        </b-field>

        <b-field label="エリア"
            horizontal>
            <b-input v-model="area" maxlength="30">
            </b-input>
        </b-field>

        <b-field label="ジャンル"
            horizontal>
            <b-input v-model="genre" maxlength="30"></b-input>
        </b-field>

        <b-field label="評価" horizontal>
            <b-input v-model="rate">

            </b-input>
        </b-field>

    </section>
</template>

<script>
export default {
    data(){
        return {
            area: "東京",
            genre: "居酒屋",
            rate: ""
        }
    }
}
</script>