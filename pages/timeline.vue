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

        const genres = this.infos.map(info => {
            return info.genre
        })
        this.genres = Array.from(new Set(genres))
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
                const docQuery = query(docRef, where("share", "==", true), where("genre", "==", this.selectedGenre), where("area", "==", this.selectedArea))
                const docSnap = await getDocs(docQuery)

                this.infos = docSnap.docs.map(d => {
                return d.data() 
                })
            } else {
                const docRef = collection(db, 'infos')
                const docQuery = query(docRef, where("share", "==", true), where("area", "==", this.selectedArea))
                const docSnap = await getDocs(docQuery)

                this.infos = docSnap.docs.map(d => {
                return d.data() 
                })
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
            } else {
                const docRef = collection(db, 'infos')
                const docQuery = query(docRef, where("share", "==", true), where("genre", "==", this.selectedGenre))
                const docSnap = await getDocs(docQuery)

                this.infos = docSnap.docs.map(d => {
                return d.data() 
                })
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
        async reCreated(){
            this.selectedArea = ""
            this.selectedGenre = ""
            const docRef = collection(db, 'infos')
            const docQuery = query(docRef, where("share", "==", true))
            const docSnap = await getDocs(docQuery)

            this.infos = docSnap.docs.map(d => {
                return d.data() 
                })
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