<script setup lang="ts">
    const { pending, data: news, error } = useFetch('http://127.0.0.1:8000/api/news', {
        lazy: true,
    })

</script>

<template>
    <section class="main-news">
        <h3>
            Наши новости
        </h3>
        <div v-if="pending">
            Loading ...
        </div>
        <div class="main-news-wrapper" v-else>
            <template v-for="(item, index) in news" :key="item.id">
                <article class="main-news-article" v-if="index <= 2">
                    <NuxtLink no-prefetch :to="'/blog/'+item.id" >
                        <img :src='item.image' alt="">
                    </NuxtLink>
                    <time datetime="2001-05-15" class="post-date">
                        {{ item.create_date }}
                    </time>
                    <p class="news-heading">
                        {{ item.name }}
                    </p>
                    <NuxtLink no-prefetch to="blog" >
                        <button v-if="index === 2 " class="to-blog-btn grey-btn">
                            Перейти в блог
                        </button>
                    </NuxtLink>
                </article>
            </template>
        </div>
    </section>
</template>


<script lang="ts">

    export default {
        name: "MainNews",
    }
</script>

<style lang="scss" scoped>
    @import "assets/scss/global";

    .main-news {

        h3 {
            margin-bottom: size(50, 1920);
        }

        .main-news-wrapper {
            display: flex;
            justify-content: space-between;

            .main-news-article {
                width: size(410, 1920);
                height: size(590, 1920);

                img {
                    width: size(410, 1920);
                    height: size(499, 1920);
                    object-fit: cover;
                }

                .post-date {
                    color: $iml-black-txt;
                    display: block;
                    letter-spacing: size(0.4, 1920);
                    font-size: size(16, 1920);
                    margin-top: size(20, 1920);
                    margin-bottom: size(20, 1920);
                }

                .news-heading {
                    text-transform: uppercase;
                    font-size: size(24, 1920);
                    color: $iml-black-txt;
                }
            }

            .main-news-article:last-child {
                img {
                    height: size(420, 1920);
                }

                .to-blog-btn {
                    margin-top: size(27, 1920);
                    width: size(410, 1920);
                    letter-spacing: size(0.5, 1920);
                    text-transform: uppercase;
                    font-size: size(20, 1920);
                }
            }
        }
    }

    @media screen and (max-width: 1366px) {
        .main-news {
            h3 {
                margin-bottom: size(50, 1366);
            }

            .main-news-wrapper {

                .main-news-article {
                    width: size(410, 1366);
                    height: size(590, 1366);

                    img {
                        width: size(410, 1366);
                        height: size(499, 1366);
                    }

                    .post-date {
                        letter-spacing: size(0.4, 1366);
                        font-size: size(16, 1366);
                        margin-top: size(20, 1366);
                        margin-bottom: size(20, 1366);
                    }

                    .news-heading {
                        font-size: size(24, 1366);
                    }
                }

                .main-news-article:last-child {
                    img {
                        height: size(420, 1366);
                    }

                    .to-blog-btn {
                        margin-top: size(27, 1366);
                        width: size(410, 1366);
                        letter-spacing: size(0.5, 1366);
                        font-size: size(20, 1366);
                    }
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        .main-news {
            h3 {
                margin-bottom: size(50, 768);
            }

            .main-news-wrapper {

                .main-news-article {
                    width: size(220, 768);
                    height: auto;

                    img {
                        width: size(220, 768);
                        height: size(470, 768);
                    }

                    .post-date {
                        letter-spacing: size(0.4, 768);
                        font-size: size(16, 768);
                        margin-top: size(20, 768);
                        margin-bottom: size(20, 768);
                    }

                    .news-heading {
                        font-size: size(24, 768);
                    }
                }

                .main-news-article:last-child {
                    img {
                        height: size(380, 768);
                    }

                    .to-blog-btn {
                        margin-top: size(27, 768);
                        width: size(220, 768);
                        letter-spacing: size(0.5, 768);
                        font-size: size(20, 768);
                    }
                }
            }
        }
    }

    @media screen and (max-width: 360px) {
        .main-news {
            h3 {
                margin-bottom: size(50, 360);
            }

            .main-news-wrapper {

                flex-direction: column;

                .main-news-article {
                    width: size(320, 360);
                    height: auto;
                    margin-bottom: size(20, 320);

                    img {
                        width: size(320, 360);
                        height: size(284, 360);
                    }

                    .post-date {
                        letter-spacing: size(0.4, 360);
                        font-size: size(16, 360);
                        margin-top: size(20, 360);
                        margin-bottom: size(20, 360);
                    }

                    .news-heading {
                        font-size: size(24, 360);
                    }
                }

                .main-news-article:last-child {
                    img {
                        height: size(380, 360);
                    }

                    .to-blog-btn {
                        margin-top: size(27, 360);
                        width: size(320, 360);
                        letter-spacing: size(0.5, 360);
                        font-size: size(20, 360);
                        padding-top: size(16, 360);
                        padding-bottom: size(16, 360);
                    }
                }
            }
        }
    }
</style>