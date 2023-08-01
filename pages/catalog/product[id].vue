<script setup>
    const { id } = useRoute().params;
    const { pending, data: product, error } = useFetch(`http://127.0.0.1:8000/api/products/${id}`, {
    })
</script>

<template>
    <main>
        <div class="container">
            <h1>
               {{ product.name }}
            </h1>
            <div class="new-arrival" >

                    <img :src="'../'+product.image" alt="new" class="image__new-arrival">


                <div class="like__new-arrival">

                </div>
                <div class="name__new-arrival">
                    {{ product.name }}
                </div>
                <div class="price-wrapper__new-arrival">
                    <div class="price__new-arrival">
                        {{ product.price }} ₽
                    </div>

                </div>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        name: "product[id]"
    }
</script>


<style lang="scss" scoped>
    @import "assets/scss/global";

    h1{
        font-size: size(52, 1920);
    }


</style>