<template>
  <section class="product">
    <div class="left">
      <div class="product_img">
        <img :src="this.$route.params.img" alt="">
      </div>
      <div class="h2">"{{ this.$route.params.id}}"</div>
    </div>
    <div class="right">
      <div class="top">
        <div class="size">
          <p>Size:</p>
          <select name="size" id="size">
            <option value="All">All</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
        </div>
        <div class="qty">
          <p>Quantity:</p>
          <input type="number">
        </div>
        <button class="add_cart" v-on:click="childMethod">Add To Cart</button>
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
  </section>
</template>
<script>

//const productImage = this.$route.param.imgLink;
//const productName = this.$route.param.name;

console.log(hello);

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