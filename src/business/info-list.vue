<template>
<div class="info-list-main">

    <div class="top-filter-arra">
        <div class="item">
            <div class="label">户号</div>
            <i-input size='small' class="input-arra" />
        </div>
        <div class="item">
            <div class="label">计量点编码</div>
            <i-input size='small' class="input-arra" />
        </div>
        <div class="item">
            <div class="label">供电电压</div>
            <i-input size='small' class="input-arra" />
        </div>
        <div class="item">
            <div class="label">用电类别</div>
            <i-input size='small' class="input-arra" />
        </div>
        <div class="item">
            <div class="label">定价策略</div>
            <i-input size='small' class="input-arra" />
        </div>
        <div class="item">
            <div class="label">峰谷执行标志</div>
            <i-input size='small' class="input-arra" />
        </div>
        <div class="search-button">查询</div>
    </div>

    <div class="bottom-table-arra">
        <i-table :border="true" :draggable="true" :loading="false" :highlight-row="true" :columns="columns1" :data="data1"></i-table>
    </div>

    <div class="bottom-page-selector">
        <div class="start">首页</div>
        <i-page :total="100" prev-text="上一页" next-text="下一页" />
        <div class="end">末页</div>
    </div>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            columns1: [{
                    title: '户号',
                    key: 'name'
                },
                {
                    title: '户名',
                    key: 'age'
                },
                {
                    title: '供电电压（kV）',
                    key: 'address'
                },
                {
                    title: '用户分类',
                    key: 'address'
                },
                {
                    title: '用电类别',
                    key: 'address'
                },
                {
                    title: '行业分类',
                    key: 'address'
                },
                {
                    title: '合同容量',
                    key: 'address'
                },
                {
                    title: '运行容量',
                    key: 'address'
                },
                {
                    title: '用户状态',
                    key: 'address'
                },
                {
                    title: '计量点编码',
                    key: 'address'
                },
                {
                    title: '计量点名称',
                    key: 'address'
                },
                {
                    title: '定价策略类型',
                    key: 'address'
                },
                {
                    title: '基本电费计算方式',
                    key: 'address'
                },
                {
                    title: '电价名称',
                    key: 'address'
                },
                {
                    title: '电价码',
                    key: 'address'
                },
                {
                    title: '峰谷标志',
                    key: 'address'
                },
                {
                    title: '功率因数考核',
                    key: 'address'
                },
                {
                    title: '信息来源',
                    key: 'address'
                },
            ],
            data1: [{
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    date: '2016-10-03'
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01'
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    date: '2016-10-02'
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04'
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.info-list-main {
    background-image: url(../assets/img/info-list/bg.jpg);
    min-height: 628px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

.top-filter-arra {
    height: 80px;
    display: flex;
    align-items: center;
    justify-self: start;
    flex-wrap: wrap;

    .item {
        margin-left: 20px;
        color: #ffffff;
        font-size: 12px;
        display: flex;
        align-items: center;

        .input-arra {
            margin-left: 6px;
            width: 140px;
            background-color: transparent;
        }

    }

    .search-button {
        width: 67px;
        height: 26px;
        background-image: url(../assets/img/info-list/bt-search.png);
        font-weight: 700;
        font-style: normal;
        font-size: 12px;
        color: #4CD7D8;
        line-height: 26px;
        margin-left: 20px;
        cursor: pointer;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        user-select: none;
    }

    .search-button:hover {
        color: #2d8cf0;
    }

    .search-button:active {
        opacity: 0.8;
    }
}

.bottom-table-arra {
    padding: 0px 20px;
}

.bottom-page-selector {
    margin: 25px 20px;
    display: flex;
    justify-content: flex-start;
    color: #BCBCBC;
    align-items: center;

    .start {
        margin-right: 20px;
        width: 84px;
        height: 22px;
        background-image: url(../assets/img/info-list/bt-page-nav.png);
        text-align: center;
        line-height: 22px;
        font-weight: 400;
        font-style: normal;
        font-size: 12px;
        cursor: pointer;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        user-select: none;
    }

    .end {
        margin-left: 20px;
        width: 84px;
        height: 22px;
        background-image: url(../assets/img/info-list/bt-page-nav.png);
        text-align: center;
        line-height: 22px;
        font-weight: 400;
        font-style: normal;
        font-size: 12px;
        cursor: pointer;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        user-select: none;
    }

    .start:hover,
    .end:hover {
        color: #2d8cf0;
    }

    .start:active,
    .end:active {
        opacity: 0.8;
    }
}
</style><style scoped>
.input-arra>>>input {
    background-color: transparent;
}

.info-list-main>>>.ivu-table td {
    background-color: transparent;
}

.info-list-main>>>.ivu-table {
    background-color: #000034;
    color: #BCBCBC;
    font-size: 12px;
    font-weight: 400;
    font-style: normal;
    opacity: 0.8;
}

.info-list-main>>>.ivu-table th {
    background-color: #000034;
    opacity: 0.8;
}

.info-list-main>>>.ivu-table-border th,
.info-list-main>>>.ivu-table-border td {
    border-right: 1px solid #333333;
}

.info-list-main>>>.ivu-table:before,
.info-list-main>>>.ivu-table-border:after {
    background-color: #333333;
}

.info-list-main>>>.ivu-table th,
.info-list-main>>>.ivu-table td {
    border-bottom: 1px solid #333333;
}

.info-list-main>>>.ivu-table-wrapper-with-border {
    border: 1px solid #333333;
    border-bottom: 0;
    border-right: 0;
}

.info-list-main>>>.ivu-page-prev,
.info-list-main>>>.ivu-page-next {
    width: 84px;
    height: 22px;
    background-image: url(../assets/img/info-list/bt-page-nav.png);
    text-align: center;
    line-height: 22px;
    font-weight: 400;
    font-style: normal;
    font-size: 12px;
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border: none;
    border-radius: 0;
}

.info-list-main>>>.ivu-page-prev {
    margin-right: 35px;
}

.info-list-main>>>.ivu-page-next {
    margin-left: 35px;
}

.info-list-main>>>.ivu-page-prev a,
.info-list-main>>>.ivu-page-next a {
    font-size: 12px;
    color: #BCBCBC;
}

.info-list-main>>>.ivu-page-prev:active a,
.info-list-main>>>.ivu-page-next:active a {
    color: #2d8cf0;
    opacity: 0.8;
}

.info-list-main>>>.ivu-page-item {
    background-image: url(../assets/img/info-list/bt-page-number.png);
    width: 56px;
    height: 22px;
    line-height: 22px;
    border-radius: 0;
    border: none;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

.info-list-main>>>.ivu-page-disabled a {
    color: gray;
    opacity: 1;
}

.info-list-main>>>.ivu-page-disabled:active a {
    color: gray;
    opacity: 1;
}

.info-list-main>>>.ivu-page-item a {
    font-size: 12px;
    color: #BCBCBC;
}

.info-list-main>>>.ivu-page-item-active a,
.info-list-main>>>.ivu-page-item-active:hover a {
    color: #2d8cf0;
}

.info-list-main>>>.ivu-page {
    white-space: nowrap;
}
</style>
