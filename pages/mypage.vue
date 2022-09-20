<template>
    <section>
        <section class="is-flex">
             <b-button type="is-primary" @click="areaSelect">エリアで絞る</b-button>
             <b-button type="is-primary" @click="genreSelect">ジャンルで絞る</b-button>
             <b-button type="is-primary" @click="rateSelect">評価が高い順に表示</b-button>
        </section>
        <section>
        <Mypost v-for="info in infos" :key="info.id" :item="info"></Mypost>
        </section>
    </section>
</template>

<script>
import Mypost from '~/components/Mypost.vue'
import { collection, getDocs, where, query, orderBy } from "firebase/firestore"
import { db } from "../plugins/firebase"



export default {
    data(){
        return {
                infos:{}
        }
    },
    components: {
        Mypost
    },
    mounted() {
        console.log("userID" ,this.$store.state.uid)
    },
    async created () {
        const docRef = collection(db, 'infos')
        const sessionStorageID = sessionStorage.getItem('ID')
        const docQuery = query(docRef, where("userId", "==", sessionStorageID))
        const docSnap = await getDocs(docQuery)

        this.infos = docSnap.docs.map(d => {
            return d.data() 
            })
    },
    methods: {
        areaSelect(){
            
        },
        genreSelect(){

        },
        rateSelect(){

        }
    }

}
</script>