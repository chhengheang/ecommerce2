<template>
    <section class="receipt">
        <div class="invoice">
        <div class="order-id">
            <p> Order #696969 Confirmed</p>
        </div>
        <hr>
        <div class="logo">
            <img src="../assets/images/WINDD1.png">
        </div>
        <div class="message">
            <h2>Thank you for your purchase!</h2><br>
            <p> Hi, Top G! We are getting your order ready to be shipped.</p>
            <p> We will notify you when it has been shipped</p><br>
        </div>
        <hr>
        <h2>Order Summary</h2>
        <div class="section2" v-for="(value, index) in global.cart" :key="index">
            <div class="image">
            <img :src="value.imgLink">
            </div>
            <div class="info"><p>"{{ value.name }}"</p><br>
                                <p>"SIZE"</p></div>
                <p>${{ value.price }}.00</p>
        </div>
        <hr>
        <div class="summary">
        <h2>Summary</h2>
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
      <hr>
      <div class="reserve">
        <img src="../assets/images/copyright.png">
        <p> 2023 WINDD All Right Reserved</p>
      </div>
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
 hr {
      border-top: 1px solid #000;
    }
.receipt{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.receipt .invoice{
    border: 1px solid #000;
    padding: 50px 100px;
}
.receipt .invoice .order-id p{
    font-size: 15px;
    margin-bottom: 5px;
}
.receipt .invoice .logo{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 10px 50px 10px;
}
.receipt .invoice .logo img{
    margin-top: 10px;
    width: 200px;
}
.receipt .invoice .message h2{
    font-size: 15px;
    font-weight: bold;
    font-style: italic;
}
.receipt .invoice .message p{
    font-size: 12px;
}
.receipt .invoice h2{
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 15px;
}
.receipt .invoice .section2{
    width: 100%;
    display: flex;
    align-items: flex-start;
    align-items: center;
    justify-content:space-between;
    gap: 5px;
    margin-bottom: 20px;
}
.receipt .invoice .section2 .info p{
    font-size: 12px;
}
.receipt .invoice .section2 .img{
    margin: 10px;
}
.receipt .invoice .section2 img{
    border: 1px solid #000;
    width: 100px;
    padding: 10px;
}

.summary {
      padding: 10px;
      display: flex;
      flex-direction: column;
      gap: .5rem;
    }

    .summary h2 {
      font-weight: bold;
      font-size: 2rem;
    }

    .summary .two-text {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: bold;
    }
.receipt .invoice .reserve{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
}
.receipt .invoice .reserve p{
    font-weight: bold;
    font-style: italic;
}
.receipt .invoice .reserve img{
    width: 10px;
}
</style>