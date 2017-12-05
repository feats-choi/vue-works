<template>
    <div id="app">
        <h1>SSR Render Demo</h1>
        <p>{{ renderedName }}</p>
        <router-link to="/">top</router-link>
        <router-link to="/book">book</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    computed: {
        renderedName: function(){
            return this.$store.state.renderedName
        }
    }
}
</script>