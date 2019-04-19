<template>
    <el-table
        class="element-reset-table"
        border
        highlight-current-row
        :data="data"
        key="data"
        ref="tableMethods"
        v-loading="loading"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(255, 255, 255, 0.5)"
        :height="height"
        :header-row-class-name="thClassName"
        :row-class-name="rowClassName"
        :row-style="{height: '44px'}"
        @select="select"
        @select-all="selectAll"
        @row-click="rowClick"
        @current-change="handleCurrentChange"
        style="width: 100%;border: 1px solid #e6eaee; border-bottom:0 ; border-radius: 3px;"
    >
        <el-table-column 
            v-if="hasExpand" 
            type="expand"
            width="50" 
            fixed
        >
        </el-table-column>
        <el-table-column 
            v-if="hasChecked" 
            type="selection" 
            width="50" 
            fixed
        >
        </el-table-column>
        <el-table-column 
            v-if="hasNumber" 
            label="序号" 
            width="50" 
            fixed
        >
            <template slot-scope="scope">{{ scope.$index+1 }}</template>
        </el-table-column>
        <template v-for="(item , index) in columns">
            <el-table-column
                v-if="item.operations"
                :item="item"
                :index="index"
                :key="index"
                :prop="item.key"
                :label="item.name"
                :width="item.width"
                :sortable="item.sortable?true:false"
                :formatter="item.formatter?item.formatter:formatterData"
                fixed
                show-overflow-tooltip
            >
                <template slot-scope="scope">
                    <template v-if="item.ctrlType === 'colorIcon'">
                        <el-tooltip
                            v-for="(operate , i) in item.operations"
                            v-show="operate.show===undefined?true:operate.show(scope.row)"
                            :key="i"
                            effect="dark"
                            :content="operate.label"
                            placement="top-start"
                        >
                            <svg
                                class="icon mlr-10"
                                aria-hidden="true"
                                :width="operate.width?operate.width:'36px'"
                                :height="operate.height?operate.height:'36px'"
                                :key="i"
                                @click="operate.func(scope.row, $event )"
                            >
                                <use :href="operate.iconClass" :key="i"></use>
                            </svg>
                        </el-tooltip>
                    </template>

                    <template v-if="item.ctrlType === 'icon'">
                        <el-tooltip
                            v-for="(operate , i) in item.operations"
                            v-show="operate.show===undefined?true:operate.show(scope.row)"
                            :key="i"
                            effect="dark"
                            :content="operate.label"
                            placement="top-start"
                        >
                            <i
                                class="iconfont"
                                :key="i"
                                :class="operate.iconClass"
                                @click="operate.func(scope.row, $event )"
                            ></i>
                        </el-tooltip>
                    </template>

                    <template v-if="item.ctrlType === 'text'">
                        <span
                            v-for="(operate , i) in item.operations"
                            v-show="operate.show===undefined?true:operate.show(scope.row)"
                            :class="operate.textClass(scope.row)"
                            :key="i"
                            @click="operate.func(scope.row, $event )"
                        >{{operate.formatter===undefined?operate.text:operate.formatter(scope.row)}}</span>
                    </template>

                    <template v-if="item.ctrlType === undefined || item.ctrlType === 'btn' ">
                        <el-button
                            v-for="(operate , i ) in item.operations"
                            v-show="operate.show===undefined?true:operate.show(scope.row)"
                            :key="i"
                            size="mini"
                            :disabled="operate.disabledFn===undefined?operate.disabled:operate.disabledFn(scope.row)"
                            :type="operate.styleFn===undefined?operate.type:operate.styleFn(scope.row)"
                            @click="operate.func(scope.row, $event )"
                        >{{operate.formatter===undefined?operate.label:operate.formatter(scope.row)}}</el-button>
                    </template>
                </template>
            </el-table-column>
            <el-table-column
                v-else
                :item="item"
                :index="index"
                :key="index"
                :prop="item.key"
                :label="item.name"
                :width="item.width"
                :sortable="item.sortable?true:false"
                :formatter="item.formatter?item.formatter:formatterData"
                fixed
                show-overflow-tooltip
            ></el-table-column>
        </template>
    </el-table>
</template>

<script>
export default {
    props: {
        data: { type: Array }, // 表格数据
        loading: { type: Boolean, default: false }, // 是否开启加载动画
        columns: { type: Array }, // 表格字段配置  示例 { key: '字段名' , name: '字段的中文描述' , width: '单元格的宽度' , formatter: '格式化函数' , operations: { type: '类型' , label: '操作名字' , func:'操作函数'}}
        thClassName: { type: String, default: 'th-row-classname' },
        rowClassName: { type: String, default: 'row-classname' },
        hasChecked: { type: Boolean, default: false }, //是否支持下拉框
        hasExpand: { type: Boolean, default: false },
        hasNumber: { type: Boolean, default: false },
        height: { type: String | Number, default: 572 },
        event: {
            select: { type: Function },
            selectAll: { type: Function },
            selectionChange: { type: Function },
            rowClick: { type: Function },
            sortChange: { type: Function }
        } // 表格事件
    },
    data() {
        return {
            tableMethods: {} // 通过ref 返回一个table的所有属性和方法
        };
    },
    methods: {
        formatterData(row, column, cellValue) {
            return cellValue;
        },
        select(selection, row) {
            if (this.event && this.event.select) {
                this.event.select(selection, row);
            }
        },
        selectAll(selection) {
            if (this.event && this.event.selectAll) {
                this.event.selectAll(selection);
            }
        },
        selectionChange(selection) {
            if (this.event && this.event.selectionChange) {
                this.event.selectionChange(selection);
            }
        },
        rowClick(row, event, column) {
            if (this.event && this.event.rowClick) {
                this.event.rowClick(row, event, column);
            }
        },
        handleCurrentChange(row) {
            if (row) {
                this.$emit('getRow', row);
            }
        },
        sortChange(row, expandedRows) {
            if (this.event && this.event.sortChange) {
                this.event.sortChange(row, expandedRows);
            }
        }
    },
    mounted() {
        this.tableMethods = this.$refs.tableMethods;
        // this.$refs.tableMethods.setCurrentRow(this.$refs.tableMethods.data[0]);
    }
};
</script>

<style lang="scss" >
.el-table tr.th-row-classname {
    background-color: #f5f8fa;
}
.el-table tr.row-classname {
    height: 44px;
}
.el-table .textYellow {
    background-color: rgba(230, 162, 60, 0.1);
    border-color: rgba(230, 162, 60, 0.2);
    padding: 10px;
    color: #e6a23c;
}
.el-table .textRed {
    background-color: hsla(0, 87%, 69%, 0.1);
    border-color: hsla(0, 87%, 69%, 0.2);
    padding: 10px;
    color: #f56c6c;
}
.el-table .textGreen {
    background-color: rgba(103, 194, 58, 0.1);
    border-color: rgba(103, 194, 58, 0.2);
    padding: 10px;
    color: #67c23a;
}
</style>


