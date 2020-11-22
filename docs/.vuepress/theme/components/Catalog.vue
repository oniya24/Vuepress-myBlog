<template>
  <div :style="{ marginTop: '100px'}">
    这是一个目录页
    <div v-for="item in sidebarItems">
      <el-card>
        <p>title: {{item.title}}</p>
        <div v-for="secItem in item.children || []">
          secTitle:
          <span>{{ secItem.title }}</span>
          <el-tag v-for="tag in secItem.frontmatter.tags || []">{{ tag }}</el-tag>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'catalog',
    /**
     * sidebarItems的主要参数和层级
     * [
     *  { title(组名):
     *    children:[
     *       title:(文章名),
     *       frontmatter:(目录具体信息)
     *     ]
     *    }
     * ]
     */
    props: ['sidebarItems'],
    data() {
      return {
        pages: []
      }
    },
    mounted () {
      console.log("fresh");
    },
  }
</script>

<style lang="scss" scoped>

</style>