<template>
    <div>
        {{message}}
    </div>
</template>

<script>
    export default {
        name: "index",
        computed:{
            message(){
                return this.$store.getters.getToken;
            }
        }
    }
</script>

<style scoped>

</style>