<template>
    <div class="city_body">
        <div class="city_list">
            <div class="city_hot">
                <h2>热门城市</h2>
                <ul class="clearfix">
                    <li v-for="hotObj in hotList">
                        {{hotObj.name}}
                    </li>
                </ul>
            </div>
            <div class="city_sort" ref="citySort">
                <div v-for="indexObj in cityList" :key="indexObj.index">
                    <h2>{{indexObj.index}}</h2>
                    <ul>
                        <li v-for="cityObj in indexObj.list" :key="cityObj.id">
                            {{cityObj.name}}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="city_index">
                <ul>
                    <li v-for="(indexObj, index) in cityList" @touchstart="handleToIndex(index)">
                        {{indexObj.index}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "city",
        data() {
            return {
                cityList: [],
                hotList: []
            };
        },
        watch: {},
        created() {
        },
        mounted() {
            this.loadData();
        },
        methods: {
            handleToIndex(index) {
                let h2 = this.$refs.citySort.getElementsByTagName('h2');
                this.$refs.citySort.parentNode.scrollTop = h2[index].offsetTop;
            },
            async loadData() {
                let {data: {data: {cities}, status, msg}} = await this.axios.get('/api/cityList')
                if (status == 0) {
                    let {hotList, cityList} = this.formatData(cities);
                    this.hotList = hotList;
                    this.cityList = cityList;
                } else {
                    console.log(msg)
                }
            },
            formatData(cities) {
                let cityList = [];
                let cityIndex = {};
                let hotList = [];

                let indexNumber = 0;
                for (let i = 0; i < cities.length; i++) {
                    let firstLetter = cities[i].py.substring(0, 1).toUpperCase();
                    //保存数据
                    let indexName = firstLetter;
                    let cityObject = {name: cities[i].nm, id: cities[i].id};
                    if (cityIndex[firstLetter] == undefined || cityIndex[firstLetter] == null) {
                        //保存索引值
                        cityIndex[firstLetter] = indexNumber++;
                        let indexObject = {
                            index: indexName,
                            list: [cityObject]
                        }
                        cityList.push(indexObject);
                    } else {
                        let index = cityIndex[firstLetter];
                        let indexObject = cityList[index];
                        indexObject.list.push(cityObject);
                    }

                    if (1 == cities[i].isHot) {
                        hotList.push(cityObject);
                    }
                }

                cityList.sort((a, b) => {
                    let aIndex = a.index;
                    let bIndex = b.index;
                    return aIndex > bIndex ? 1 : aIndex == bIndex ? 0 : -1;
                })

                return {hotList, cityList};
            }
        },
        computed: {}
    };
</script>

<style lang="scss" scoped>
    #content .city_body {
        margin-top: 45px;
        display: flex;
        width: 100%;
        /*position: absolute;*/
        top: 0;
        bottom: 0;
    }

    .city_body .city_list {
        flex: 1;
        overflow: auto;
        background: #FFF5F0;
    }

    .city_body .city_list::-webkit-scrollbar {
        background-color: transparent;
        width: 0;
    }

    .city_body .city_hot {
        margin-top: 20px;
    }

    .city_body .city_hot h2 {
        padding-left: 15px;
        line-height: 30px;
        font-size: 14px;
        background: #F0F0F0;
        font-weight: normal;
    }

    .city_body .city_hot ul li {
        float: left;
        background: #fff;
        width: 29%;
        height: 33px;
        margin-top: 15px;
        margin-left: 3%;
        padding: 0 4px;
        border: 1px solid #e6e6e6;
        border-radius: 3px;
        line-height: 33px;
        text-align: center;
        box-sizing: border-box;
    }

    .city_body .city_sort div {
        margin-top: 20px;
    }

    .city_body .city_sort h2 {
        padding-left: 15px;
        line-height: 30px;
        font-size: 14px;
        background: #F0F0F0;
        font-weight: normal;
    }

    .city_body .city_sort ul {
        padding-left: 10px;
        margin-top: 10px;
    }

    .city_body .city_sort ul li {
        line-height: 30px;
        line-height: 30px;
    }

    .city_body .city_index {
        width: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        border-left: 1px #e6e6e6 solid;
    }
</style>