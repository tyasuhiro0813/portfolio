<template>
    
    <section>
        <section class="is-flex">
            <section>
                <b-loading is-full-page v-show="isLoading"></b-loading>
            </section>
            <section class="section container column is-half shop-infos">
                <b-field class="shop-info" label="店名" horizontal>
                    <b-input placeholder="鳥貴族" v-model="name"></b-input>
                </b-field>

                <b-field class="shop-info" label="エリア" horizontal>
                    <b-input placeholder="東京　新宿" v-model="area"></b-input>
                </b-field>

                <b-field class="shop-info" label="ジャンル" horizontal>
                    <b-input placeholder="居酒屋" v-model="genre"></b-input>
                </b-field>

                <b-field class="shop-info" label="おすすめ" horizontal>
                    <b-input placeholder="やきとり" v-model="recommend"></b-input>
                </b-field>

                <b-field class="shop-info" label="投稿画像1" horizontal>
                    <input type="file" ref="preview0" @change="uploadFile(0)">
                </b-field>
                <b-field v-if="addedImagesFilesNum >= 1" class="shop-info" label="投稿画像2" horizontal>
                    <input type="file" ref="preview1" @change="uploadFile(1)">
                </b-field>
                <b-field v-if="addedImagesFilesNum >= 2" class="shop-info" label="投稿画像3" horizontal>
                    <input type="file" ref="preview2" @change="uploadFile(2)">
                </b-field>
            </section>

            <section class="section container column is-half shop-infos">
                <div>
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
                </div>
                <div class="is-flex food-photos">
                    <div v-if="urls[0]" class="image is-128x128 food-photo">
                        <img :src="urls[0]">
                    </div>
                    <div v-if="urls[1]" class="image is-128x128 food-photo">
                        <img :src="urls[1]">
                    </div>
                    <div v-if="urls[2]" class="image is-128x128 food-photo">
                        <img :src="urls[2]">
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
            fileImgs: [], //複数個を想定して初期値を配列に変更
            urls: [], //同上
            addedImagesFilesNum: 0, //画像を何枚アップしたかを数えて、アップロードボタンを次々にだす
            isLoading: false,
            userName: this.$store.state.uname,
        }
    },
    mounted() {
        const sessionStorageID = sessionStorage.getItem('portfolioID')
        const sessionStorageUser = sessionStorage.getItem('portfolioUser')
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
            this.isLoading = true
            // firestoreへデータ追加
            const docRef = doc(collection(db, 'infos'))

            let imageUrls = []

            if(this.fileImgs.length > 0){
                //画像が1枚以上あるとき、storageにアップロードをする
                // 画像の個数分だけアップロードの作業が必要になるので、map文で処理する。
                // storageに画像をあげる
                imageUrls = await Promise.all(this.fileImgs.map(async (file, index) => {
                    let imageRef = storageRef(storage, `images/${ docRef.id }_${ index }`)
                    //refの文字列は被ると上書きになってしまうので、インデックス番号をつかって分ける
                    await uploadBytes(imageRef, file) //それぞれのrefに向けてアップロード
                    let imageUrl = await getDownloadURL(imageRef)
                    return imageUrl

                }))
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
                imageUrl: imageUrls,
                userName: this.$store.state.uname,
            })
            this.isLoading = false
            alert("お店を登録しました。")
            this.$router.push("/mypage")

        },
        uploadFile(num){
            //画像をURL化したあと、urlsの配列に追加していくようなロジックに変更。引数に数字をいれることで何番目の画像かわかるようにする
            const file = this.$refs[`preview${ num }`]
            const fileImg = file.files[0]
            if(!fileImg) {
                return
            }
            this.fileImgs[num] = fileImg

            const reader = new FileReader()

            reader.onload = (e) => {
                this.urls[num] = e.target.result
                this.addedImagesFilesNum++ //次のアップロードボタンを表示させる
            }

            reader.readAsDataURL(fileImg)
            // これで、配列のnum番目に画像のurlが入ることになる
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
    .rates {
        margin-top: 20px;
    }
    .food-photos {
        margin-top: 35px;
    }
    .food-photo {
        margin: 0 auto;
        position: relative;
    }
    .food-photo img {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        max-width: 100%;
        height: 160px;
        object-fit: contain;
    }
    .switch input[type=checkbox]:checked + .check.is-dark {
        background: #267853 !important;
    }
</style>