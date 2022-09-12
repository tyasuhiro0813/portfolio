<template>
    <section class="is-flex">
        <section class="control column is-half is-justify-content-center">
            <section v-for="info in infos" :key="info">
                    店名： {{ info.name }}<br>
                    エリア： {{ info.area }}<br>
                    ジャンル： {{ info.genre }}<br>
            </section>
            <!-- <section v-for="area in areas" :key="area">
                エリア： {{ area }}
            </section>
            <section v-for="genre in genres" :key="genre">
                ジャンル： {{ genre }}
            </section> -->
            <!-- <section>
                店名： {{ name[1] }}
            </section>
            <section>
                エリア： {{ area[1] }}
            </section>
            <section>
                ジャンル： {{ genre[1] }}
            </section>
            <section class="is-flex">
                評価： <b-rate v-model="rate"></b-rate>
            </section> -->
        </section>
        <!-- <section class="is-flex">
            <figure class="image is-128x128">
                <img v-bind:src="url">
            </figure>
            <figure class="image is-128x128">
                <img
                src="~/assets/ramen.JPG"
                >
            </figure>
            <figure class="image is-128x128">
                <img
                src="~/assets/ramen.JPG"
                >
            </figure>
        </section> -->
        <!-- <section class="control column is-half is-justify-content-center">
            <section>
                行った日： {{ date }}
            </section>
            <section>
                行った時間帯： {{ time }}
            </section>
            <section>
                人数： {{ number }}
            </section>
            <section>
                おすすめ： {{ recommend }}
            </section>
        </section> -->
    </section>
</template>

<script>
import { collection, getDocs } from "firebase/firestore"
import { db } from "../plugins/firebase"

export default {
    data(){
        // return {
        //         name: "",
        //         area: "",
        //         genre: "",
        //         rate: "",
        //         date: "",
        //         time: "",
        //         number: "",
        //         recommend: "",
        //         url: "",
                
        // }
        return {
                infos:[
                        {
                            name: "",
                            area: "",
                            genre: ""
                        },
                        {
                            name: "",
                            area: "",
                            genre: ""
                        }
                ]
        }
    },
    async created () {
        const docRef = collection(db, 'infos')
        const docSnap = await getDocs(docRef)

        // docSnap.forEach((doc) => {
        //     this.name = doc.data().name
        //     this.area = doc.data().area
        //     this.genre = doc.data().genre
        //     this.rate = doc.data().rate
        //     this.url = doc.data().imageUrl
        
        //     console.log(doc.id, "=>", doc.data())
        //     console.log(this.name)
        //     console.log(doc)
        // })
        console.log(docSnap.docs.length)
        console.log(docSnap.docs[1].data().name)

        length = docSnap.docs.length
        for(let i=0; i < length; i++){
            this.infos[i].name = docSnap.docs[i].data().name
            this.infos[i].area = docSnap.docs[i].data().area
            this.infos[i].genre = docSnap.docs[i].data().genre
        }
        console.log(`店名：${this.infos[0].name}`)
        console.log(`エリア：${this.infos[0].area}`)
        console.log(`店名：${this.infos[1].name}`)
        console.log(`エリア：${this.infos[1].area}`)
        
    }
}
</script>