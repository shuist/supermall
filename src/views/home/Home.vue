<template>
  <div id="home" >
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="views"></recommend-view>
  </div>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar.vue'
  import HomeSwiper from './childrenComponents/homeSwiper.vue'
  import RecommendView from './childrenComponents/RecommendView.vue'
  import {getHomeMultidata} from '../../network/home.js'

  export default{
    name:'Home',
    components:{
      NavBar,
      HomeSwiper,
      RecommendView
    },
    data(){
      return{
        headers:[],
        banners:[
          {
           link:"https://www.tmall.com/wow/brand/act/fashion?acm=lb-zebra-2386-265936.1003.4.410386&scm=1003.4.lb-zebra-2386-265936.OTHER_1_410386&ali_trackid=19_76e251a0c909c0486e16ce76b4bc22cd&spm=875.7931836/B.2016006.d2",
           image:"https://aecpm.alicdn.com/simba/img/TB1W4nPJFXXXXbSXpXXSutbFXXX.jpg",
          },
          {
            link:"https://pages.tmall.com/wow/a/act/tmall/tmc/27426/wupr?spm=875.7931836/B.2016006.d1.6cf94265zdVT8u&pos=1&wh_pid=main-203451&acm=07055-1.1003.2.8329962&scm=1003.2.07055-1.OTHER_1592820569725_8329962",
            image:"https://gju1.alicdn.com/tps///gju4.alicdn.com/tps/i2/2670830951/O1CN01rkHGCe1ItbGY09jTe-2670830951.jpg",
           },
          {
            link:"https://wangwangshipin.tmall.com/?spm=875.7931836/B.2016006.d3.6cf94265zdVT8u&pos=1&turing_bucket=9&acm=&scm=1049.lyg_turing_-1_344.154268.154268-THJH_233404&lygClk=1&impid=e5ppgs2UodX",
            image:"https://aecpm.alicdn.com/simba/img/TB1_JXrLVXXXXbZXVXXSutbFXXX.jpg",
          },
          {
            link:"https://uniqlo.tmall.com/?spm=a221t.1812074.2005984841.30.28cf4208lqmgln&acm=lb-zebra-7777-269861.1003.4.574272&scm=1003.4.lb-zebra-7777-269861.OTHER_14479799580181_574272",
            image:"https://img.alicdn.com/imgextra/i4/196993935/O1CN01zr74Ev1ewH234621Q_!!196993935.jpg",
          }
        ],
        views:[
            {
              link:"",
              image:"https://gd4.alicdn.com/imgextra/i4/700425589/O1CN0172lasX1r9oCwSIOJO_!!700425589.jpg_50x50.jpg_.webp",
              title:"毛毛"
            },
            {
              link:"",
              image:"https://gd3.alicdn.com/imgextra/i3/2481401020/O1CN01fjeJKc1JPCa4jJIBW_!!2481401020.jpg_50x50.jpg_.webp",
              title:"小丽"
            },
            {
              link:"",
              image:"https://gd1.alicdn.com/imgextra/i1/2274560115/O1CN01xq2sZg1Cii83Wg39V_!!2274560115.jpg_50x50.jpg_.webp",
              title:"阿奇"
            },
            {
              link:"",
              image:"https://gd2.alicdn.com/imgextra/i2/1840865025/O1CN01mjmw2r1mzUpeIVgAu_!!1840865025.jpg_50x50.jpg_.webp",
              title:"灰灰"
            }
        ]
      }
    },
    created() {
      //1.request mutlidata
      getHomeMultidata().then(res=>{
        console.log(res);
        this.headers = res.headers;
      })
    }
  }
</script>

<style>
  .home-nav{
    background-color: #FF8198;
    color: #FFFFFF;
  }
</style>
