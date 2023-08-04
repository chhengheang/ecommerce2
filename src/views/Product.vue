<template>
  <section class="product">
    <div class="left">
      <div class="product_img">
        <img v-for="p in products.filter(p => p.id == this.$route.params.id)" :src="p.imgLink" alt="">
      </div>
      <div class="h3" v-for="p in products.filter(p => p.id == this.$route.params.id)">${{ p.price }}</div>
      <div class="h2" v-for="p in products.filter(p => p.id == this.$route.params.id)">"{{ p.name }}"</div>
      
    </div>
    <div class="right">
      <div class="top">
        <div class="size">
          <p>Size:</p>
          <select name="size" id="size" v-model="modelSize">
            <option v-for="s in size" v-bind:value="{ id: s.id, text: s.size }">
         {{ s.size }}
       </option>
          </select>
        </div>
        <div class="qty">
          <p>Quantity:</p>
          <input type="number">
        </div>
        <button class="add_cart" v-for="p in products.filter(p => p.id == this.$route.params.id)" v-on:click="global.cart.push(p)">Add To Cart</button>
        <div>HII {{ global.cart.length }}</div>
        <div class="bot">
          <button>Sizing Chart</button>
        </div>
      </div>
      <div class="bottom">
        <p>Product you might like!</p>
        <div class="p_img">
          <div class="img">
            <img src="../assets/images/tie.png" alt="">
          </div>
          <div class="img">
            <img src="../assets/images/socks.png" alt="">
          </div>
          <button>
            <img src="../assets/images/see_more.png" alt="">
          </button>
        </div>
      </div>
    </div>
    <div></div>
  </section>
</template>
<script>

import global from "../global";
import { ref , reactive } from "vue";

import img1 from "../assets/images/shirt.png";
import img2 from "../assets/images/shoes.png";
import img3 from "../assets/images/trousers.png";
import img4 from "../assets/images/jacket.png";
import img5 from "../assets/images/hawaiian-shirt.png";
import img6 from "../assets/images/see_more.png";

export default{
  setup(){
    const countCart = ref(0);

    return {global,countCart};
  },
  data: ()=>{
    return{
      products : [
      {
        imgLink: img1, id: 1, price: 90, name: "SHIRT"
      },{
        imgLink: img2, id: 2, price: 120,name: "JEAN"
      },{
        imgLink: img3, id: 3, price: 59,name: "PANT"
      },{
        imgLink: img4, id: 4, price: 1900,name: "SWEATER"
      },{
        imgLink: img5, id: 5, price: 60,name: "JACKET"
      },{
        imgLink: img6, id: 6, price: 200,name: "SHOES"
      }
    ],
    size : [
      { id: 1, size: "ALL" },
      { id: 2, size: "X" },
      { id: 3, size: "L" },
      { id: 4, size: "M" },
      { id: 5, size: "S" }
    ]
    }
}
}
</script>
<style scoped>
.product {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 2rem;
      height: 80dvh;
    }

    .left,
    .right {
      width: 50%;
    }

    .left .product_img {
      background: rgba(150, 135, 135, .5);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 75px;
      border: 1px solid #000;
    }
    .left .product_img img{
      width: 350px;
    }

    .left .h2 {
      font-style: italic;
      font-weight: 900;
      font-size: 4rem;
    }

    .left .h3 {
      text-align: right;
      font-style: normal;
      font-weight: 900;
      font-size: 3rem;
    }

    .right {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .right .top {
      border: 1px solid #000;
      padding: 10px 20px;
    }

    .right .top .size,
    .right .top .qty {
      border: 1px solid #000;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 5px;
      font-size: 17px;
      margin-bottom: 1rem;
    }

    .right .top .qty input {
      padding-left: 10px;
      width: 100%;
    }

    .right .top .add_cart {
      background: rgba(182, 71, 71, 0.5);
      width: 100%;
      padding: 10px 5px;
      border: 1px solid #000;
      font-size: 17px;
      margin-bottom: 1rem;
      cursor: pointer;
    }

    .right .top .bot {
      display: flex;
      align-items: flex-end;
      justify-content: end;

    }

    .right .top .bot button {
      font-size: 12px;
      font-weight: bolder;
      background: transparent;
      cursor: pointer;
    }

    .bottom p {
      font-size: 15px;
    }

    .bottom .p_img {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1.5rem;
    }

    .bottom .p_img .img {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 75px;
      border: 1px solid #000;
      background: rgba(150, 135, 135, .5);
    }
    .bottom .p_img img {
     width: 100px;
    }

    .bottom .p_img button {
      background: transparent;
    }

    .bottom .p_img button img {
      background: transparent;
      border: none;
      width: 80px;
    }</style>