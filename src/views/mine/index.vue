<template>
    <div id="main">
        <top title="我的瞄瞄"></top>
        <div id="content">
            <login></login>
        </div>
        <bottom></bottom>
    </div>
</template>

<script>
    import top from '@/components/header';
    import bottom from '@/components/tabbar';
    import login from '@/components/login';

    export default {
        name: "mine",
        components: {
            top,
            bottom,
            login
        },
        data() {
            return {};
        },
        watch: {},
        created() {
        },
        methods: {},
        computed: {}
    };
</script>

<style lang="scss" scoped>

</style>