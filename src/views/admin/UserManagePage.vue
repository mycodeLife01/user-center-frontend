<template>
  <div id="userManagePage">
    <a-input-search
      style="width: 300px; margin-bottom: 20px"
      v-model:value="searchValue"
      placeholder="请输入搜索内容"
      enter-button="Search"
      size="large"
      @search="onSearch"
    />
    <a-table :columns="columns" :data-source="data">
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'createTime'">
          {{ dayjs(record.createTime).format('YYYY-MM-DD HH:mm:ss') }}
        </template>
        <template v-else-if="column.dataIndex === 'userRole'">
          <div v-if="record.userRole === 1">
            <a-tag color="green">管理员</a-tag>
          </div>
          <div v-else>
            <a-tag color="blue">普通用户</a-tag>
          </div>
        </template>
        <template v-else-if="column.dataIndex === 'avatarUrl'">
          <a-image :src="record.avatarUrl" :width="120"></a-image>
        </template>
        <template v-else-if="column.key === 'action'">
          <a-button danger @click="deleteUser(record.id)">删除</a-button>
        </template>
      </template>
    </a-table>
  </div>
</template>
<script lang="ts" setup>
import {userDelete, userSearch} from "@/api/user.ts";
import {ref} from "vue";
import {message} from "ant-design-vue";
import dayjs from "dayjs";

const deleteUser = async (id: number) => {
  console.log(id);
  const res = await userDelete(id);
  if (res.data.code === 0) {
    message.success("删除成功");
  } else {
    message.error("删除失败");
  }
}
const searchValue = ref("");
const onSearch = () => {
  fetchData(searchValue.value);
}
const columns = [
  {
    title: 'id',
    dataIndex: 'id',
  },
  {
    title: '用户名',
    dataIndex: 'username',
  },
  {
    title: '头像',
    dataIndex: 'avatarUrl',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
  },
  {
    title: '用户权限',
    dataIndex: 'userRole',
  },
  {
    title: '操作',
    key: 'action',
  },
];
const data = ref([])
const fetchData = async (username = "") => {
  const res = await userSearch(username);
  if (res.data.data) {
    data.value = res.data.data;
  } else {
    message.error("获取用户数据失败");
  }
}
fetchData()
</script>

