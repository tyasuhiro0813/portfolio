<template>
    <section>
        <section class="is-flex section container column">
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

            <section class="section container column is-half">
                <b-field label="来店日" horizontal>
                    <b-input v-model="date"></b-input>
                </b-field>

                <b-field label="来店時間"
                    horizontal>
                    <b-input v-model="time" maxlength="30">
                    </b-input>
                </b-field>

                <b-field label="来店人数"
                    horizontal>
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
            recommend: ""
        }
    }
}
</script>