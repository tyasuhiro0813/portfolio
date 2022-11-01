<template>
    <section>
        <h1>お問い合わせ</h1>
        <p>以下のフォームにお問い合わせ事項を記入し、「送信」ボタンを押してください</p>
        <p>お問い合わせを受領しましたら、内容を確認させていただき、5営業日以内にメールにてご返信させていただきます。</p>
        <section>
            <b-field label="お名前" horizontal>
                    <b-input v-model="name"></b-input>
            </b-field>
            <b-field label="メールアドレス" horizontal>
                    <b-input type="email" v-model="email"></b-input>
            </b-field>
            <b-field label="お問い合わせ内容" horizontal>
                    <b-input type="textarea" v-model="contact"></b-input>
            </b-field>
        </section>
        <section class="is-flex">
            <p class="control column is-half is-flex is-justify-content-right">
                <b-button label="送信" type="is-primary " size="is-medium" @click="send"></b-button>
            </p>
        </section>
    </section>
</template>

<script>
    export default {
        data(){
            return {
                name: "",
                email: "",
                contact: ""
            }
        },
        methods: {
            send() {
                
            }
        }
    }
</script>