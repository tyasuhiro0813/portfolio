<template>
    <section class="is-flex">
        <section class="control column is-half is-justify-content-center">
            <section>
                店名： {{ name }}
            </section>
            <section>
                エリア： {{ area }}
            </section>
            <section>
                ジャンル： {{ genre }}
            </section>
            <section>
                評価： {{ rate }}
            </section>
        </section>
        <section class="is-flex">
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
            <figure class="image is-128x128">
                <img
                src="~/assets/ramen.JPG"
                >
            </figure>
        </section>
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
export default {
    data(){
        return {
            name: "",
            area: "東京",
            genre: "居酒屋",
            rate: "",
            date: "2022/08/24",
            time: "19:00",
            number: "4",
            recommend: ""
        }
    }
}
</script>