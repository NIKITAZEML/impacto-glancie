<script setup>
    const { city } = useRoute().params;
</script>

<template>
    <main>
        <div class="container">
            <h1>
                Выбранный город {{ city }}
            </h1>
        </div>
    </main>
</template>

<script>
    export default {
        name: "[city]"
    }
</script>



<style scoped>

</style>