<template>
	<div>
		<ParentPage :sidebarItems="sidebarItems">
			<template slot="top" >
				<catalog v-if="isCatalog" :sidebarItems="sidebarItems"></catalog>
			</template>
			<!-- <template slot="bottom">

			</template> -->
		</ParentPage>
	</div>
	
</template>

<script>
import ParentPage from "@parent-theme/components/Page.vue"
import Catalog from './Catalog.vue'
export default {
  components: {
		ParentPage,
		Catalog
	},
	data() {
		return {
			isCatalog: false
		}
	},
	props: ['sidebarItems'],
	methods: {
		freshIsCatalog() {
			console.log(this.sidebarItems)
			console.log(this.$page.path.indexOf('html') == '-1') // 通过判断是否是html来判断是不是目录页
			this.isCatalog = this.$page.path.indexOf('html') == '-1' 
		}
	},
	mounted () {
		this.freshIsCatalog()
	},
	updated () {
		this.freshIsCatalog()
	},
};
</script>

<style lang="scss" scoped></style>
