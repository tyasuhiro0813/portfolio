<template>
    <section>
        <Mypost v-for="info in infos" :key="info.id" :item="info"></Mypost>
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
        const docQuery = query(docRef, where("share", "==", true))
        const docSnap = await getDocs(docQuery)

        this.infos = docSnap.docs.map(d => {
            return d.data() 
            })
    }

}
</script>