<template>
    <section class="is-flex">
        <section class="control column is-half is-justify-content-center">
            <section>
                店名：{{ name }}
            </section>
            <section>
                エリア：{{ area }}
            </section>
            <section>
                ジャンル：{{ genre }}
            </section>
            <section>
                評価：{{ rate }}
            </section>
        </section>
        <section class="control column is-half is-justify-content-center">
            <section>
                行った日：{{ date }}
            </section>
            <section>
                行った時間帯：{{ time }}
            </section>
            <section>
                人数：{{ number }}
            </section>
            <section>
                おすすめ：{{ recommend }}
            </section>
        </section>
    </section>
</template>

<script>
export default {
    
}
</script>