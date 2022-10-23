<template>
    
    <section>
        <section class="is-flex">
            <section>
                <b-loading is-full-page v-show="isLoading"></b-loading>
            </section>
            <section class="section container column is-half shop-infos">
                <b-field class="shop-info" label="店名" horizontal>
                    <b-input v-model="name"></b-input>
                </b-field>

                <b-field class="shop-info" label="エリア" horizontal>
                    <b-input v-model="area"></b-input>
                </b-field>

                <b-field class="shop-info" label="ジャンル" horizontal>
                    <b-input v-model="genre"></b-input>
                </b-field>

                <b-field class="shop-info" label="おすすめ" horizontal>
                    <b-input v-model="recommend"></b-input>
                </b-field>

                <b-field class="shop-info" label="投稿画像" horizontal>
                    <input type="file" ref="preview" @change="uploadFile">
                </b-field>
            </section>

            <section class="section container column is-half shop-infos">
                <b-field class="shop-info" label="来店日" horizontal>
                    <b-datepicker v-model="date"></b-datepicker>
                </b-field>

                <b-field class="shop-info" label="来店時間" horizontal>
                    <b-timepicker v-model="time"></b-timepicker>
                </b-field>

                <b-field class="shop-info" label="来店人数" horizontal>
                    <b-input v-model="member"></b-input>
                </b-field>

                <b-field class="shop-info rates" label="評価" horizontal>
                    <b-rate v-model="rate"></b-rate>
                </b-field>
                
                <div class="is-flex food-photos">
                    <div v-if="url" class="is-flex image is-128x128 food-photo">
                        <img :src="url">
                    </div>
                    <div v-if="url" class="is-flex image is-128x128 food-photo">
                        <img :src="url">
                    </div>
                    <div v-if="url" class="is-flex image is-128x128 food-photo">
                        <img :src="url">
                    </div>
                </div>
            </section>
        </section>
        
        <section class="is-flex">
            <p class="control column is-half is-flex is-justify-content-right">
                <b-button label="お店を登録" type="is-success is-light" size="is-medium" @click="register"></b-button>
            </p>
            <p class="control column is-half is-flex is-justify-content-left">
                <b-switch type="is-dark" v-model="share"> タイムラインで他のユーザーにシェア </b-switch>
            </p>
        </section>
        
    </section>
</template>

<script>
import { collection, doc, setDoc } from "firebase/firestore"
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage"
import { db, storage } from "../plugins/firebase"

export default {
    data(){
        return {
            name: "",
            area: "",
            genre: "",
            rate: 0,
            date: new Date(),
            time: new Date(),
            member: "",
            recommend: "",
            share: false,
            fileImg: null,
            url: "",
            isLoading: false,
            userName: this.$store.state.uname,
        }
    },
    mounted() {
        const sessionStorageID = sessionStorage.getItem('portfolioID')
        const sessionStorageUser = sessionStorage.getItem('portfolioUser')
        console.log("userID" ,this.$store.state.uid)
        console.log("userName", sessionStorageUser)
        console.log("portfolioID", sessionStorageID)
    },
    methods: {
        async register(){
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
            // console.log(this.name, this.rate, this.date, this.time, this.share)
            this.isLoading = true
            console.log(this.isLoading)
            
            // firestoreへデータ追加
            const docRef = doc(collection(db, 'infos'))

            let imageUrl = ""

            if(this.fileImg){
                // storageに画像をあげる
                const imageRef = storageRef(storage, `images/${docRef.id}`)
                await uploadBytes(imageRef, this.fileImg)

                imageUrl = await getDownloadURL(imageRef)
            }


            await setDoc(docRef, {
                id: docRef.id,
                userId: this.$store.state.uid,
                name: this.name,
                area: this.area,
                genre: this.genre,
                rate: this.rate,
                date: this.date,
                time: this.time,
                member: this.member,
                recommend: this.recommend,
                share: this.share,
                imageUrl: imageUrl,
                userName: this.$store.state.uname,
            })
            console.log('Document written with ID: ', docRef.id)

            this.isLoading = false
            alert("お店を登録しました。")
            this.$router.push("/mypage")

        },
        uploadFile(){
            const file = this.$refs.preview
            const fileImg = file.files[0]
            if(!fileImg) {
                return
            }
            this.fileImg = fileImg

            const reader = new FileReader()

            reader.onload = (e) => {
                this.url = e.target.result
            }

            reader.readAsDataURL(fileImg)
        }
    }
}
</script>

<style>
    .shop-infos {
        padding-bottom: 0;
        padding-top: 0;
        margin-bottom: 20px;
        margin-top: 20px;
    }
    .shop-info {
        margin: 10px 0;
        padding: 10px 0;
    }
    .food-photos {
        align-items: center;
    }
    .food-photo {
        min-width: 150px;
        margin: 0 auto;
    }
    .rates {
        margin-top: 20px;
    }
</style>