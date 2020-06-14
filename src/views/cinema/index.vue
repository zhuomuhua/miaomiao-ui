<template>
    <div id="main">
        <top title="瞄瞄影院"></top>
        <div id="content">
            <div class="cinema_menu">
                <div class="city_switch">
                    全城 <i class="iconfont icon-lower-triangle"></i>
                </div>
                <div class="brand_swtich">
                    品牌 <i class="iconfont icon-lower-triangle"></i>
                </div>
                <div class="feature_switch">
                    特色 <i class="iconfont icon-lower-triangle"></i>
                </div>
            </div>
        </div>
        <cilist></cilist>
        <bottom></bottom>
    </div>
</template>

<script>
    import top from '@/components/header';
    import bottom from '@/components/tabbar';
    import cilist from '@/components/cilist';

    export default {
        name: "cinema",
        components: {
            top,
            bottom,
            cilist
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