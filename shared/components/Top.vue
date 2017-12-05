<template>
    <p>This is Top Component Content!</p>
</template>

<script>
export default {
    name: 'top',
    preFetchData: function(store){
        store.commit('showLoading');
        return new Promise(function(resolve) {
            setTimeout(function() {
                store.commit('changeRenderedName', 'preFetching is fired in Top Vue!');
                resolve();
            }, 1000)
        });
    }
}
</script>

<style scoped>
* {
    color: red;
}
</style>