<script setup lang="ts">
    const { pending, data: allNews, error } = useFetch('http://127.0.0.1:8000/api/news', {
        lazy: true,
    })

</script>
<template>
    <main>
        <div class="container">
            <h3>
                Блог
            </h3>
            <article>
                <div class="main-news-wrapper">
                    <article v-for="(item, index) in allNews" :key="allNews.id" class="main-news-article">
                        <img :src='item.image' alt="">
                        <time datetime="2001-05-15" class="post-date">
                            {{ item.create_date }}
                        </time>
                        <p class="news-heading">
                            {{ item.name }}
                        </p>
                    </article>
                </div>
            </article>
        </div>
    </main>
</template>

<script lang="ts">

    export default {
        name: "index",
        data: ()=>({
        }),
    }
</script>

<style scoped>

</style>