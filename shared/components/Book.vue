<template>
    <p>This is Book Component Content!</p>
</template>

<script>
export default {
    name: 'book',
    preFetchData: function(store){
        store.commit('showLoading');
        return new Promise(function(resolve) {
            setTimeout(function () {
                store.commit('changeRenderedName', 'preFetching is fired in Book Vue!');
                resolve();
            }, 1000);
        });
    }
}
</script>

<style scoped>
* {
    color: #03a9f4;
}
</style>