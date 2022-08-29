<template>
    <section>
        <Mypost></Mypost>
        <hr>
        <Mypost></Mypost>
        <hr>
        <Mypost></Mypost>
    </section>
</template>

<script>
import Mypost from '~/components/Mypost.vue'
export default {
    components: {
        Mypost
    },
    mounted() {
        console.log("userID" ,this.$store.state.uid)
    }
}
</script>