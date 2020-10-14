<template>
  <div>
    <!-- Search

    params参数: {{$route.params.keyWord}}   ---  {{keyWord}}
    <br>
    query参数: {{$route.query.keyWord2}}   ---  {{keyWord2}} -->
    <TypeNav></TypeNav>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props:['keyWord','keyWord2']
}
</script>

<style lang="less" scoped>

</style>
