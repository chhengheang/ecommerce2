<template>
    <section class="cart">
    <div class="left">
      <h2>Your Cart</h2>
      <hr>
      <div class="item-table">
        <div class="item">Item</div>
        <div class="item">Price</div>
        <div class="item">Quantity</div>
      </div>
      <hr>
      <div class="item-table" v-for="(value, index) in global.cart" :key="index">
        <div class="product">
          <div class="img">
            <img :src="value.imgLink" alt="">
          </div>
          <div class="inner-text">
            <div class="title">{{ value.name }}</div>
            <div class="title"></div>
          </div>
        </div>
        <div class="item">${{ value.price }}.00</div>
        <div class="item">1</div>
      </div>
      <hr>
      <div class="bottom">
        <div class="text">Subtotal: ${{ getLastItem(sumPrice(global.cart)) }}.00</div>
      </div>
    </div>
    <div class="right">
      <div class="summary">
        <h2>Summery (1 item)</h2>
        <div class="two-text">
          <p>Subtotal</p>
          <p>${{ getLastItem(sumPrice(global.cart)) }}.00</p>
        </div>
        <p>Shipping</p>
        <p>Est. Taxes</p>
        <hr>
        <div class="two-text">
          <p>Total</p>
          <p>${{ getLastItem(sumPrice(global.cart)) }}.00</p>
        </div>
      </div>
      <router-link to="/checkout">
      <button>Checkout</button>
    </router-link>
    </div>
  </section>
</template>
<script>


import global from "../global";
import { ref , reactive } from "vue";

var totals = [];  

export default{
  setup(){
    const countCart = ref(0);

    return {global,countCart};
  },
  methods: {
    sumPrice: function(items) {    
      items.forEach(total=>{
        const allPrice = total.price + total.price
        totals.push(allPrice)
      })
      return totals;
    },
    getLastItem: function(Items) {
      const lastItem = Items[Items.length - 1];
      return lastItem;
    },
  },
  
}

</script>
<style scoped>
.cart {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 2rem;
      height: 80dvh;
    }

    .left {
      border: 1px solid #000;
      width: 75%;
      padding: 40px;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .left h2 {
      font-size: 6rem;
      font-weight: bold;
      font-style: italic;
    }

    .left .item-table {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      font-size: 15px;
    }

    .left .item-table .item:first-child,
    .left .item-table .product {
      width: 60%;
    }

    .left .item-table .item:nth-child(2) {
      width: 35%;
    }

    .left .item-table .product {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
    }

    .left .item-table .product .img {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      background:rgba(150, 135, 135, .5);;
    }

    .left .item-table .product .img img {
      width: 80px;
    }

    .left .bottom {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      font-size: 15px;
    }

    .right .summary {
      padding: 10px;
      background: rgba(150, 135, 135, .5);;
      display: flex;
      flex-direction: column;
      gap: .5rem;
      border: 1px solid #000;
    }

    hr {
      border-top: 1px solid #000;
    }

    .right {
      width: 25%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 15px;
    }

    .right .summary h2 {
      font-weight: bold;
      font-size: 2rem;
    }

    .right .summary .two-text {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .right button {
      width: 100%;
      padding: 10px 20px;
      cursor: pointer;
      background-color: green;
      font-size: 15px;
    }
</style>