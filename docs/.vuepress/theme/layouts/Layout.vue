<template>
  <ParentLayout>
    <!-- <template #sidebar-top>
      <CarbonAds />
    </template>
    <template #page-bottom>
      <CategoryPage />
    </template> -->
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
export default {
  name: 'Layout',
  components: {
    ParentLayout,
  }
}
</script>