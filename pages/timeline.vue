<template>
    <section>
        <section class="container is-flex sort-area">
            <div class="sort-items">
                <b-field class="sort-item" label="エリアでソート">
                    <b-select placeholder="Select a area" v-model="selectedArea">
                        <option v-for="area in areas" :key="area.id" :value="area">
                            {{ area }}
                        </option>
                    </b-select>
                </b-field>
                <b-button type="is-success is-light" @click="areaSelect">エリアでソート</b-button>
            </div>
            <div class="sort-items">
                <b-field class="sort-item" label="ジャンルでソート">
                    <b-select placeholder="Select a genre" v-model="selectedGenre">
                        <option v-for="genre in genres" :key="genre.id" :value="genre">
                            {{ genre }}
                        </option>
                    </b-select>
                </b-field>
                <b-button type="is-success is-light" @click="genreSelect">ジャンルでソート</b-button>
             </div>
             <div class="is-flex sort-items">
                <b-field class="sort-item" label="評価が高い順に並べ替え">
                    <b-button class="item" type="is-success is-light" @click="rateSelect">評価が高い順に表示</b-button>
                </b-field>
             </div>
            <div class="is-flex sort-items">
                <b-field class="sort-item" label="最新順に並べ替え">
                    <b-button class="item" type="is-success is-light" @click="newestDate">最新順に表示</b-button>
                </b-field>
            </div>
            <div class="is-flex sort-items">
                <b-field class="sort-item" label="ソート・並べ替えを解除">
                    <b-button class="item" type="is-success is-light" @click="reCreated">ソート・並べ替えを解除</b-button>
                </b-field>
            </div>
        </section>
        <section>
            <Timeline v-for="info in infos" :key="info.id" :item="info"></Timeline>
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
                areas:[],
                genres:[],
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
        const docQuery = query(docRef, where("share", "==", true))
        const docSnap = await getDocs(docQuery)

        this.infos = docSnap.docs.map(d => {
            return d.data() 
            })
        
        const areas = this.infos.map(info => {
            return info.area
        })
        this.areas = Array.from(new Set(areas))
        console.log(this.areas)

        const genres = this.infos.map(info => {
            return info.genre
        })
        this.genres = Array.from(new Set(genres))
        console.log(this.genres)
    },
    computed: {
        whereQueris(){
            const whereQueryArray = []

            if(this.selectedGenre){
                whereQueryArray.push(where("genre", "==", this.selectedGenre))
            }
            if(this.selectedArea){
                whereQueryArray.push(where("area", "==", this.selectedArea))
            }

            return whereQueryArray
        }
    },
    methods: {
        async areaSelect(){
            if(this.selectedArea == "") {
                alert("エリアを選択してください")
            } else if(this.selectedGenre !== "") {
                const docRef = collection(db, 'infos')
                console.log("初期", this.infos)
                const docQuery = query(docRef, where("share", "==", true), where("genre", "==", this.selectedGenre), where("area", "==", this.selectedArea))
                const docSnap = await getDocs(docQuery)

                this.infos = docSnap.docs.map(d => {
                return d.data() 
                })
                console.log("エリアとジャンルでソート")
                console.log("selectedGenre", this.selectedGenre)
                console.log("selectedArea", this.selectedArea)
            } else {
                const docRef = collection(db, 'infos')
                console.log("初期", this.infos)
                const docQuery = query(docRef, where("share", "==", true), where("area", "==", this.selectedArea))
                const docSnap = await getDocs(docQuery)

                this.infos = docSnap.docs.map(d => {
                return d.data() 
                })
                console.log("エリアでソート")
                console.log("selectedArea", this.selectedArea)
            }
        },
        async genreSelect(){
            if(this.selectedGenre == "") {
                alert("ジャンルを選択してください")
            } else if(this.selectedArea !== "") {
                const docRef = collection(db, 'infos')
                const docQuery = query(docRef, where("share", "==", true), where("area", "==", this.selectedArea), where("genre", "==", this.selectedGenre))
                const docSnap = await getDocs(docQuery)

                this.infos = docSnap.docs.map(d => {
                return d.data() 
                })
                console.log("ジャンルとエリアでソート")
                console.log("selectedArea", this.selectedArea)
                console.log("selectedGenre", this.selectedGenre)
            } else {
                const docRef = collection(db, 'infos')
                const docQuery = query(docRef, where("share", "==", true), where("genre", "==", this.selectedGenre))
                const docSnap = await getDocs(docQuery)

                this.infos = docSnap.docs.map(d => {
                return d.data() 
                })
                console.log("ジャンルでソート")
                console.log("selectedGenre", this.selectedGenre)
                console.log(this.infos)
            }
        },
        async rateSelect(){
            const docRef = collection(db, 'infos')
            const docQuery = query(
                docRef,
                where("share", "==", true),
                ...this.whereQueris,
                orderBy("rate", "desc"))
            const docSnap = await getDocs(docQuery)

            this.infos = docSnap.docs.map(d => {
            return d.data() 
            })
        },
        // async rateSelect(){
        //     if(this.selectedArea !== "" && this.selectedGenre !== "") {
        //         const docRef = collection(db, 'infos')
        //         const docQuery = query(docRef, where("userId", "==", this.$store.state.uid), where("share", "==", true), where("area", "==", this.selectedArea), where("genre", "==", this.selectedGenre), orderBy("rate", "desc"))
        //         const docSnap = await getDocs(docQuery)

        //         this.infos = docSnap.docs.map(d => {
        //         return d.data() 
        //         })
        //         console.log(`${this.selectedArea}, ${this.selectedGenre}で評価が高い順に表示`)
        //     } else if(this.selectedArea !== "" && this.selectedGenre == "") {
        //         const docRef = collection(db, 'infos')
        //         const docQuery = query(docRef, where("userId", "==", this.$store.state.uid), where("share", "==", true), where("area", "==", this.selectedArea), orderBy("rate", "desc"))
        //         const docSnap = await getDocs(docQuery)

        //         this.infos = docSnap.docs.map(d => {
        //         return d.data() 
        //         })
        //         console.log(`${this.selectedArea}で評価が高い順に表示`)
        //     } else if(this.selectedArea == "" && this.selectedGenre !== "") {
        //         const docRef = collection(db, 'infos')
        //         const docQuery = query(docRef, where("userId", "==", this.$store.state.uid), where("share", "==", true), where("genre", "==", this.selectedGenre), orderBy("rate", "desc"))
        //         const docSnap = await getDocs(docQuery)

        //         this.infos = docSnap.docs.map(d => {
        //         return d.data() 
        //         })
        //         console.log(`${this.selectedGenre}で評価が高い順に表示`)
        //     } else {
        //         const docRef = collection(db, 'infos')
        //         const docQuery = query(docRef, where("userId", "==", this.$store.state.uid), where("share", "==", true), orderBy("rate", "desc"))
        //         const docSnap = await getDocs(docQuery)

        //         this.infos = docSnap.docs.map(d => {
        //         return d.data() 
        //         })
        //         console.log("評価が高い順に表示")
        //     }
        // },
        async newestDate(){
                const docRef = collection(db, 'infos')
                const docQuery = query(
                    docRef,
                    where("share", "==", true),
                    ...this.whereQueris,
                    orderBy("date", "desc"))
                const docSnap = await getDocs(docQuery)

                this.infos = docSnap.docs.map(d => {
                return d.data() 
                })
        },
        // async newestDate(){
        //     if(this.selectedArea !== "" && this.selectedGenre !== "") {
        //         const docRef = collection(db, 'infos')
        //         const docQuery = query(docRef, where("userId", "==", this.$store.state.uid), where("share", "==", true), where("area", "==", this.selectedArea), where("genre", "==", this.selectedGenre), orderBy("date", "desc"))
        //         const docSnap = await getDocs(docQuery)

        //         this.infos = docSnap.docs.map(d => {
        //         return d.data() 
        //         })
        //         console.log(`${this.selectedArea}, ${this.selectedGenre}で新しい順に表示`)
        //     } else if(this.selectedArea !== "" && this.selectedGenre == "") {
        //         const docRef = collection(db, 'infos')
        //         const docQuery = query(docRef, where("userId", "==", this.$store.state.uid), where("share", "==", true), where("area", "==", this.selectedArea), orderBy("date", "desc"))
        //         const docSnap = await getDocs(docQuery)

        //         this.infos = docSnap.docs.map(d => {
        //         return d.data() 
        //         })
        //         console.log(`${this.selectedArea}で新しい順に表示`)
        //     } else if(this.selectedArea == "" && this.selectedGenre !== "") {
        //         const docRef = collection(db, 'infos')
        //         const docQuery = query(docRef, where("userId", "==", this.$store.state.uid), where("share", "==", true), where("genre", "==", this.selectedGenre), orderBy("date", "desc"))
        //         const docSnap = await getDocs(docQuery)

        //         this.infos = docSnap.docs.map(d => {
        //         return d.data() 
        //         })
        //         console.log(`${this.selectedGenre}で新しい順に表示`)
        //     } else {
        //         const docRef = collection(db, 'infos')
        //         const docQuery = query(docRef, where("userId", "==", this.$store.state.uid), where("share", "==", true), orderBy("date", "desc"))
        //         const docSnap = await getDocs(docQuery)

        //         this.infos = docSnap.docs.map(d => {
        //         return d.data() 
        //         })
        //         console.log(`${this.selectedGenre}で新しい順に表示`)   
        //     }
        // },
        async reCreated(){
            this.selectedArea = ""
            this.selectedGenre = ""
            const docRef = collection(db, 'infos')
            const docQuery = query(docRef, where("share", "==", true))
            const docSnap = await getDocs(docQuery)

            this.infos = docSnap.docs.map(d => {
                return d.data() 
                })
            console.log("元に戻りました")
        }
    }
}
</script>

<style>
    .sort-area {
        text-align: center;
        margin: 20px auto;
    }
    .sort-items {
        margin-bottom: 0;
        align-items: flex-end;
    }
    .sort-item {
        width: 235px;
        margin-bottom: 0;
    }
    .item {
        margin-top: 52px;
    }
</style>