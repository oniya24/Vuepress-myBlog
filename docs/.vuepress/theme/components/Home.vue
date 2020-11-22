<template>
  <div class="home">
    <el-card class="header" shadow="never">
      header
    </el-card>
    <el-card class="body" shadow="never">
      body
      
    </el-card>
    <el-card class="footer" shadow="never">
      footer
    </el-card>
  </div>
</template>

<script>
// import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from "@SearchBox";
export default {
  name: "home",
  data() {
    return {
      radio: "1",
      active: 0,
    };
  },
  components: {
    // AlgoliaSearchBox,
    SearchBox,
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
    },
  },
  mounted() {
    console.log(this.$site);
    console.log(this.$page);
  },
};
</script>

<style lang="scss" scoped>
	.home{
		padding: 3.6rem 2rem 0;
    max-width: 960px;
    margin: 0px auto;
    display: block;
	}
</style>
