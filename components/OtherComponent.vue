<template>
    <div>
        Other Component!
        <p>{{parentData}}</p>
    </div>
</template>

<script>
export default {
    props: {
        parentData: String
    }
}
</script>

<style scoped>
* {
    color: blue;
}
</style>