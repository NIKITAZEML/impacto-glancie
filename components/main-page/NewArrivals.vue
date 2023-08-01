<script setup lang="ts">
    const { pending, data: products, error } = useFetch('http://127.0.0.1:8000/api/products', {
        lazy: true,
    })
</script>
<template>
    <section class="new-arrivals-section">
        <div class="new-arrivals-heading-wrapper">
            <h3>
                новые поступления
            </h3>
            <NuxtLink no-prefetch to="/catalog">
                <span class="view-all">
                    Смотреть все
                </span>
            </NuxtLink>
        </div>
        <div class="new-arrivals-section-wrapper">
            <template v-for="(item, index) of products" :key="item.id">
                <div class="new-arrival" v-if="index <= 5">
                    <NuxtLink :to="'/catalog/product'+item.id" >
                        <img :src="item.image" alt="new" class="image__new-arrival">
                    </NuxtLink>
                    <div class="hot__new-arrival">
                        HOT!
                    </div>
                    <div class="like__new-arrival">
                        <transition name="fade">
                            <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.4134 4.58753C19.9121 4.08434 19.3164 3.68508 18.6606 3.41266C18.0047 3.14023 17.3015 3 16.5914 3C15.8812 3 15.178 3.14023 14.5222 3.41266C13.8663 3.68508 13.2707 4.08434 12.7694 4.58753L12 5.36717L11.2306 4.58753C10.7293 4.08434 10.1337 3.68508 9.47781 3.41266C8.82195 3.14023 8.11878 3 7.40863 3C6.69847 3 5.9953 3.14023 5.33944 3.41266C4.68358 3.68508 4.08793 4.08434 3.58665 4.58753C1.46832 6.70656 1.33842 10.2849 4.00631 13.0037L12 21L19.9937 13.0037C22.6616 10.2849 22.5317 6.70656 20.4134 4.58753Z" stroke="#333934" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </transition>
                        <transition name="fade">
                            <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.4134 4.58753C19.9121 4.08434 19.3164 3.68508 18.6606 3.41266C18.0047 3.14023 17.3015 3 16.5914 3C15.8812 3 15.178 3.14023 14.5222 3.41266C13.8663 3.68508 13.2707 4.08434 12.7694 4.58753L12 5.36717L11.2306 4.58753C10.7293 4.08434 10.1337 3.68508 9.47781 3.41266C8.82195 3.14023 8.11878 3 7.40863 3C6.69847 3 5.9953 3.14023 5.33944 3.41266C4.68358 3.68508 4.08793 4.08434 3.58665 4.58753C1.46832 6.70656 1.33842 10.2849 4.00631 13.0037L12 21L19.9937 13.0037C22.6616 10.2849 22.5317 6.70656 20.4134 4.58753Z" fill="#11442A" stroke="#11442A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </transition>
                    </div>
                    <div class="name__new-arrival">
                        {{ item.name }}
                    </div>
                    <div class="price-wrapper__new-arrival">
                        <div class="price__new-arrival">
                            {{ item.price }} ₽
                        </div>
                        <svg class="cart__new-arrival" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="#333934" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3 6H21" stroke="#333934" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="#333934" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </template>
        </div>
    </section>
</template>

<script lang="ts">
    export default {
        name: "NewArrivals",
        data: ()=>({

        }),
    }
</script>

<style lang="scss">
    @import "assets/scss/global";

    .new-arrivals-section {
        margin-bottom: size(70, 1920);
        .new-arrivals-heading-wrapper {
            display: flex;
            /*width: size(1280, 1920);*/
            justify-content: space-between;
            align-items: center;
            h3 {
                margin-bottom: size(50, 1920);
            }
            
            .view-all{
                color: #70756E;
            }
        }

        .new-arrivals-section-wrapper {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            .new-arrival {
                width: size(300, 1920);
                margin-bottom: size(30, 1920);
                position: relative;

                .image__new-arrival {
                    width: size(300, 1920);
                }

                .hot__new-arrival {
                    position: absolute;
                    left: size(20, 1920);
                    top: size(20, 1920);
                    width: size(70, 1920);
                    height: size(40, 1920);
                    text-transform: uppercase;
                    color: #fff;
                    font-size: size(20, 1920);
                    background-color: $main-green;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .like__new-arrival {
                    position: absolute;
                    right: size(20, 1920);
                    top: size(20, 1920);

                    svg {
                        cursor: pointer;
                    }
                    
                    svg:last-child{
                        display: none;
                    }

                }


                .name__new-arrival {
                    text-transform: uppercase;
                    font-size: size(20, 1920);
                    margin-top: size(10, 1920);
                    margin-bottom: size(12, 1920);
                }

                .price-wrapper__new-arrival {
                    display: flex;
                    justify-content: space-between;

                    .price__new-arrival {
                        text-transform: uppercase;
                        font-size: size(24, 1920);
                        color: $main-green;
                    }
                }
            }

            .new-arrival:first-child, .new-arrival:last-child {
                width: size(630, 1920);

                .image__new-arrival {
                    width: size(630, 1920);
                    object-fit: cover;
                }
            }
        }
    }

    @media screen and (max-width: 1366px){
        .new-arrivals-section {
            margin-bottom: size(70, 1366);
            h3{
                margin-bottom: size(50, 1366);
            }

            .new-arrivals-section-wrapper {
                .new-arrival {
                    width: size(300, 1366);
                    margin-bottom: size(30, 1366);

                    .image__new-arrival {
                        width: size(300, 1366);
                    }

                    .hot__new-arrival {
                        left: size(20, 1366);
                        top: size(20, 1366);
                        width: size(70, 1366);
                        height: size(40, 1366);
                        font-size: size(20, 1366);
                    }

                    .like__new-arrival {
                        right: size(20, 1366);
                        top: size(20, 1366);
                    }


                    .name__new-arrival {
                        font-size: size(20, 1366);
                        margin-top: size(10, 1366);
                        margin-bottom: size(12, 1366);
                    }

                    .price-wrapper__new-arrival {
                        .price__new-arrival {
                            font-size: size(24, 1366);
                        }
                    }
                }

                .new-arrival:first-child, .new-arrival:last-child {
                    width: size(630, 1366);

                    .image__new-arrival {
                        width: size(630, 1366);
                    }
                }
            }
        }
    }

    @media screen and (max-width: 768px){
        .new-arrivals-section {
            margin-bottom: size(70, 768);

            h3{
                margin-bottom: size(50, 768);
            }

            .new-arrivals-section-wrapper {
                .new-arrival {
                    width: size(220, 768);
                    margin-bottom: size(30, 768);

                    .image__new-arrival {
                        width: size(220, 768);
                        height: size(350, 768);
                    }

                    .hot__new-arrival {
                        left: size(20, 768);
                        top: size(20, 768);
                        width: size(70, 768);
                        height: size(40, 768);
                        font-size: size(20, 768);
                    }

                    .like__new-arrival {
                        right: size(20, 768);
                        top: size(20, 768);
                    }


                    .name__new-arrival {
                        font-size: size(20, 768);
                        margin-top: size(10, 768);
                        margin-bottom: size(12, 768);
                    }

                    .price-wrapper__new-arrival {
                        .price__new-arrival {
                            font-size: size(24, 768);
                        }
                    }
                }

                .new-arrival:first-child, .new-arrival:last-child {
                    width: size(220, 768);


                    .image__new-arrival {
                        width: size(220, 768);
                        height: size(350, 768);
                    }
                }
            }
        }
    }

    @media screen and (max-width: 360px){
        .new-arrivals-section {
            margin-bottom: size(70, 360);

            h3{
                margin-bottom: size(50, 360);
            }

            .new-arrivals-section-wrapper {
                .new-arrival {
                    width: size(320, 360);
                    margin-bottom: size(30, 360);

                    .image__new-arrival {
                        width: size(320, 360);
                        height: size(350, 360);
                    }

                    .hot__new-arrival {
                        left: size(20, 360);
                        top: size(20, 360);
                        width: size(70, 360);
                        height: size(40, 360);
                        font-size: size(20, 360);
                    }

                    .like__new-arrival {
                        right: size(20, 360);
                        top: size(20, 360);
                    }


                    .name__new-arrival {
                        font-size: size(20, 360);
                        margin-top: size(10, 360);
                        margin-bottom: size(12, 360);
                    }

                    .price-wrapper__new-arrival {
                        .price__new-arrival {
                            font-size: size(24, 360);
                        }
                    }
                }

                .new-arrival:first-child, .new-arrival:last-child {
                    width: size(320, 360);


                    .image__new-arrival {
                        width: size(320, 360);
                        height: size(350, 360);
                    }
                }
            }
        }
    }
</style>