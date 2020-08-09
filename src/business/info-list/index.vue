<template>
<div class="info-list-main">
    <div class="top-filter-arra">
        <div class="item">
            <div class="label">户号</div>
            <i-input size="small" class="input-arra" />
        </div>
        <div class="item">
            <div class="label">计量点编码</div>
            <i-input size="small" class="input-arra" />
        </div>
        <div class="item">
            <div class="label">供电电压</div>
            <i-input size="small" class="input-arra" />
        </div>
        <div class="item">
            <div class="label">用电类别</div>
            <i-input size="small" class="input-arra" />
        </div>
        <div class="item">
            <div class="label">定价策略</div>
            <i-input size="small" class="input-arra" />
        </div>
        <div class="item">
            <div class="label">峰谷执行标志</div>
            <i-input size="small" class="input-arra" />
        </div>
        <div class="search-button">查询</div>
    </div>

    <div class="bottom-table-arra">
        <i-table :border="true" :draggable="true" :loading="tableLoading" :highlight-row="true" :columns="tableColumns" :data="tableData"></i-table>
    </div>

    <div class="bottom-page-selector">
        <div @click="jumptoPageIndex('start')" class="start">首页</div>
        <i-page :page-size="pageSize" :current="pageIndex" @on-change="changePageIndex" :total="totalPage" prev-text="上一页" next-text="下一页" />
        <div @click="jumptoPageIndex('end')" class="end">末页</div>
    </div>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            tableColumns: [{
                    title: "户号",
                    key: "accountNumber",
                },
                {
                    title: "户名",
                    key: "accountName",
                },
                {
                    title: "供电电压（kV）",
                    key: "powerSupplyVoltage",
                },
                {
                    title: "用户分类",
                    key: "userClassification",
                },
                {
                    title: "用电类别",
                    key: "powerConsumptionCategory",
                },
                {
                    title: "行业分类",
                    key: "industryClassification",
                },
                {
                    title: "合同容量",
                    key: "contractCapacity",
                },
                {
                    title: "运行容量",
                    key: "operatingCapacity",
                },
                {
                    title: "用户状态",
                    key: "userStatus",
                },
                {
                    title: "计量点编码",
                    key: "codeOfMeasuringPoint",
                },
                {
                    title: "计量点名称",
                    key: "nameOfMeasuringPoint",
                },
                {
                    title: "定价策略类型",
                    key: "pricingStrategyType",
                },
                {
                    title: "基本电费计算方式",
                    key: "basicTariffCalculationMethod",
                },
                {
                    title: "电价名称",
                    key: "nameOfElectricityPrice",
                },
                {
                    title: "电价码",
                    key: "electricityPriceCode",
                },
                {
                    title: "峰谷标志",
                    key: "peakValleySign",
                },
                {
                    title: "功率因数考核",
                    key: "powerFactorAssessment",
                },
                {
                    title: "信息来源",
                    key: "informationSources",
                },
            ],
            tableData: [],
            tableLoading: false,
            pageIndex: 1,
            pageSize: 20,
            totalPage: 0,
            // 原始数据，直接从服务器上获取的数据
            orgData: [],
        };
    },
    created: function () {
        this.getOrgData();
    },
    methods: {
        getOrgData() {
            this.showLoading();
            this.$http_get('infoPage', 'getTableData', {}).then(resp => {
                this.orgData = resp;
                this.closeLoading();
            }, () => {
                this.closeLoading();
            }).catch(() => {
                this.closeLoading();
            })
        },
        showLoading() {
            this.tableLoading = true;
        },
        closeLoading() {
            this.tableLoading = false;
        },
        changePageIndex(index) {
            this.pageIndex = index;
        },
        jumptoPageIndex(position) {
            if (position === 'start') {
                this.pageIndex = 1;
                this.computedTableData();
            } else if (position === 'end') {
                this.computedTableData(true);
            }
        },
        computedTableData(isEndPage) {
            console.log(1)
            let tableData = [];
            let temp = []
            // eslint-disable-next-line no-constant-condition
            if (false) {
                // 有过滤条件先执行过滤逻辑
                temp = this.orgData;
            } else {
                temp = this.orgData;
            }
            // 计算过滤后的数据大小
            this.totalPage = temp.length;
            if (isEndPage) {
                let pageIndex = Math.ceil(this.totalPage / this.pageSize);
                this.pageIndex = pageIndex <= 0 ? 1 : pageIndex;
            }
            // 计算本页展示的数据
            let start = (this.pageIndex - 1) * this.pageSize;
            let end = this.pageIndex * this.pageSize;
            for (let i = start; i < end; i++) {
                if (temp[i]) {
                    tableData.push(temp[i]);
                }
            }
            this.tableData = tableData;
        }
    },
};
</script>

<style lang="less" scoped>
.info-list-main {
    background-image: url(../../assets/img/info-list/bg.jpg);
    min-height: 628px;
    background-repeat: no-repeat;
    background-size: 100% 102%;
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
        background-image: url(../../assets/img/info-list/bt-search.png);
        font-weight: 700;
        font-style: normal;
        font-size: 12px;
        color: #4cd7d8;
        line-height: 26px;
        margin-left: 20px;
        cursor: pointer;
        background-repeat: no-repeat;
        background-size: 100% 102%;
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
    color: #bcbcbc;
    align-items: center;

    .start {
        margin-right: 20px;
        width: 84px;
        height: 22px;
        background-image: url(../../assets/img/info-list/bt-page-nav.png);
        text-align: center;
        line-height: 22px;
        font-weight: 400;
        font-style: normal;
        font-size: 12px;
        cursor: pointer;
        background-repeat: no-repeat;
        background-size: 100% 102%;
        user-select: none;
    }

    .end {
        margin-left: 20px;
        width: 84px;
        height: 22px;
        background-image: url(../../assets/img/info-list/bt-page-nav.png);
        text-align: center;
        line-height: 22px;
        font-weight: 400;
        font-style: normal;
        font-size: 12px;
        cursor: pointer;
        background-repeat: no-repeat;
        background-size: 100% 102%;
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
    color: #bcbcbc;
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
    background-image: url(../../assets/img/info-list/bt-page-nav.png);
    text-align: center;
    line-height: 22px;
    font-weight: 400;
    font-style: normal;
    font-size: 12px;
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: 100% 102%;
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
    color: #bcbcbc;
}

.info-list-main>>>.ivu-page-prev:active a,
.info-list-main>>>.ivu-page-next:active a {
    color: #2d8cf0;
    opacity: 0.8;
}

.info-list-main>>>.ivu-page-item {
    background-image: url(../../assets/img/info-list/bt-page-number.png);
    width: 56px;
    height: 22px;
    line-height: 22px;
    border-radius: 0;
    border: none;
    background-repeat: no-repeat;
    background-size: 100% 102%;
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
    color: #bcbcbc;
}

.info-list-main>>>.ivu-page-item-active a,
.info-list-main>>>.ivu-page-item-active:hover a {
    color: #2d8cf0;
}

.info-list-main>>>.ivu-page {
    white-space: nowrap;
}
</style>
