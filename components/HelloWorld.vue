<template>
    <div>
        <p>{{ message }}</p>
        <p>{{ composedMessage }}</p>
        <p v-if="false">show true content</p>
        <p v-else>show false content</p>
        <ul v-for="item in ['vue', 'react', 'angular']">
            <li>{{item}}</li>
        </ul>
        <button v-on:click="alertTrigger">v-click button</button>
        <button @click="alertTrigger">@click button</button>

        <other-component :parentData="parentData"></other-component>
    </div>
</template>

<script>
import OtherComponent from './OtherComponent';

export default {
    data: function(){
       return {
           message: 'Hello, World',
           message_0: 'Hi, ',
           message_1: 'there~!',
           parentData: 'This data is come from parent component~'
       };
    },
    computed: {
        composedMessage: function(){
            return this.message_0 + this.message_1;
        }
    },
    methods: {
        alertTrigger: function(){
            alert('alert!!')
        }
    },
    components: { OtherComponent }
}
</script>

<style scoped>
* {
    color: red;
}
</style>