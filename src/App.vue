<template>
  <div>
    <Header/>
    <router-link to="/"></router-link>
    <router-link to="/about"></router-link>
    <router-link to="/cart"></router-link>
    <router-link to="/product/:id" ></router-link>
    <router-link to="/checkout"></router-link>
    <router-link to="/thanks"></router-link>
    <router-link to="/receipt"></router-link>
    <router-view/>
    <Footer/>
  </div>
</template>
<script>
import Header from "./views/Header.vue"
import Footer from "./views/Footer.vue";

import img1 from "./assets/images/shirt.png";
import img2 from "./assets/images/shoes.png";
import img3 from "./assets/images/trousers.png";
import img4 from "./assets/images/jacket.png";
import img5 from "./assets/images/hawaiian-shirt.png";
import img6 from "./assets/images/see_more.png";


export default{
  data: ()=>{
    return{
      products : [
      {
        imgLink: img1, id: 1
      },{
        imgLink: img2, id: 2
      },{
        imgLink: img3, id: 3
      },{
        imgLink: img4, id: 4
      },{
        imgLink: img5, id: 5
      },{
        imgLink: img6, id: 6
      }
    ]
    }
  },components:{
    Footer,
    Header,
}
}

</script>

