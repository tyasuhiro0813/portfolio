<template>
    <section>
        <section class="is-flex">
            <section>
                <b-field label="エリアでソート">
                    <b-select placeholder="Select a area" v-model="selectedArea">
                        <option v-for="info in infos" :key="info.id" :value="info.area">
                            {{ info.area }}
                        </option>
                    </b-select>
                </b-field>
                <b-button type="is-primary" @click="areaSelect">エリアでソート</b-button>
            </section>
            <section>
                <b-field label="ジャンルでソート">
                    <b-select placeholder="Select a genre" v-model="selectedGenre">
                        <option v-for="info in infos" :key="info.id" :value="info.genre">
                            {{ info.genre }}
                        </option>
                    </b-select>
                </b-field>
                <b-button type="is-primary" @click="genreSelect">ジャンルでソート</b-button>
             </section>
             <section>
                <b-button type="is-primary" @click="rateSelect">評価が高い順に表示</b-button>
             </section>
             <b-button type="is-primary" @click="newestDate">最新順に表示</b-button>
             <b-button type="is-primary" @click="reCreated">ソートを解除</b-button>
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
                infos:{},
                selectedArea: "",
                selectedGenre: "",
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
        const docQuery = query(docRef, where("userId", "==", this.$store.state.uid))
        const docSnap = await getDocs(docQuery)

        this.infos = docSnap.docs.map(d => {
            return d.data() 
            })
    },
    methods: {
        async areaSelect(){
            const docRef = collection(db, 'infos')
            const docQuery = query(docRef, where("userId", "==", this.$store.state.uid), where("area", "==", this.selectedArea))
            const docSnap = await getDocs(docQuery)

            this.infos = docSnap.docs.map(d => {
            return d.data() 
            })
            console.log("エリアでソート")
            console.log("selectedArea", this.selectedArea)
        },
        async genreSelect(){
            const docRef = collection(db, 'infos')
            const docQuery = query(docRef, where("userId", "==", this.$store.state.uid), where("genre", "==", this.selectedGenre))
            const docSnap = await getDocs(docQuery)

            this.infos = docSnap.docs.map(d => {
            return d.data() 
            })
            console.log("ジャンルでソート")
            console.log("selectedGenre", this.selectedGenre)
        },
        async rateSelect(){
            const docRef = collection(db, 'infos')
            const docQuery = query(docRef, where("userId", "==", this.$store.state.uid), orderBy("rate", "desc"))
            const docSnap = await getDocs(docQuery)

            this.infos = docSnap.docs.map(d => {
            return d.data() 
            })
            console.log("評価が高い順に表示")
        },
        async newestDate(){
            const docRef = collection(db, 'infos')
            const docQuery = query(docRef, where("userId", "==", this.$store.state.uid), orderBy("date", "desc"))
            const docSnap = await getDocs(docQuery)

            this.infos = docSnap.docs.map(d => {
            return d.data() 
            })
            console.log("新しい順に表示")
        },
        async reCreated(){
            const docRef = collection(db, 'infos')
        const docQuery = query(docRef, where("userId", "==", this.$store.state.uid))
        const docSnap = await getDocs(docQuery)

        this.infos = docSnap.docs.map(d => {
            return d.data() 
            })
        console.log("元に戻りました")
        }

    }

}
</script>