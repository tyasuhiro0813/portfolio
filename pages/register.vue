<template>
    <section>
        <section class="is-flex section container column">
            <section class="section container column is-half">
                <b-field label="店名" horizontal>
                    <b-input v-model="name"></b-input>
                </b-field>

                <b-field label="エリア" horizontal>
                    <b-input v-model="area" maxlength="30">
                    </b-input>
                </b-field>

                <b-field label="ジャンル" horizontal>
                    <b-input v-model="genre" maxlength="30"></b-input>
                </b-field>

                <b-field label="評価" horizontal>
                    <b-rate v-model="rate"></b-rate>
                </b-field>
            </section>

            <section class="section container column is-half">
                <b-field label="来店日" horizontal>
                    <b-datepicker v-model="date"></b-datepicker>
                </b-field>

                <b-field label="来店時間" horizontal>
                    <b-timepicker v-model="time"></b-timepicker>
                </b-field>

                <b-field label="来店人数" horizontal>
                    <b-input v-model="member" maxlength="30"></b-input>
                </b-field>

                <b-field label="おすすめ" horizontal>
                    <b-input v-model="recommend">

                    </b-input>
                </b-field>
            </section>
        </section>
        
        <section class="is-flex">
            <p class="control column is-half is-flex is-justify-content-right">
                <b-button label="お店を登録" type="is-primary " size="is-medium" @click="register"/>
            </p>
            <p class="control column is-half is-flex is-justify-content-left">
                <b-switch v-model="share"> タイムラインでシェア </b-switch>
            </p>
        </section>
    </section>
</template>

<script>
export default {
    data(){
        return {
            name: "",
            area: "",
            genre: "",
            rate: "",
            date: "",
            time: "",
            member: "",
            recommend: "",
            share: false
        }
    },
    methods: {
        register(){
            if(this.name === "") {
                alert("未入力項目があります。")
                return
            }
            if(this.area === "") {
                alert("未入力項目があります。")
                return
            }
            if(this.genre === "") {
                alert("未入力項目があります。")
                return
            }
            if(this.rate === "") {
                alert("未入力項目があります。")
                return
            }
            if(this.date === "") {
                alert("未入力項目があります。")
                return
            }
            if(this.time === "") {
                alert("未入力項目があります。")
                return
            }
            if(this.member === "") {
                alert("未入力項目があります。")
                return
            }
            if(this.recommend === "") {
                alert("未入力項目があります。")
                return
            }
            console.log(this.name, this.rate, this.date, this.time, this.share)
        }
    }
}
</script>