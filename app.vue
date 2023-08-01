<template>
    <div>
        <GlobalAppHeader />
        <NuxtPage />
        <GlobalAppFooter />
    </div>
</template>

<script>
    useHead({
        title: 'Impacto Glancie',
        meta: [
            { name: 'description', content: 'Лучший магазин белья' }
        ],
        bodyAttrs: {
            class: 'test'
        },
    })
    useSeoMeta({

        ogTitle: 'Лучший магазин белья',
        description: 'Лучший магазин белья.',
        ogDescription: 'Лучший магазин белья.',
    })
</script>

<style lang="scss">

</style>