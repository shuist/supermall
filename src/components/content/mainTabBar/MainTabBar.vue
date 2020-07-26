<template>
  <TabBar>
    <TabBarItem path="/home" activeColor="deeppink">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" />
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" />
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category" activeColor="deeppink">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" />
      <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" />
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path="/shopcart" activeColor="deeppink">
      <img slot="item-icon" src="~assets/img/tabbar/shopchart.svg" />
      <img slot="item-icon-active" src="~assets/img/tabbar/shopchart_active.svg" />
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path="/profile" activeColor="deeppink">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" />
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" />
      <div slot="item-text">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
  import TabBar from '../../common/tabbar/TabBar.vue'
  import TabBarItem from '../../common/tabbar/TabbarItem.vue'

  export default{
    name:"MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
</style>
