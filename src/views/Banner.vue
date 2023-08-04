<template>
    <section class="home" id="home">

<div class="swiper home-slider">

   <div class="swiper-wrapper">

      <section class="swiper-slide slide">
         <div class="content">
            <h3>Shopping Essential</h3>
            <p>WINDD, a shopping platform where you can buy clothings, from footwears to jackets. Anything exists Here
              All with authenticity and class.
            </p>
            <a href="/" class="btn">shop now</a>
            <RouterLink to="/about">
            <a href="/about" class="btn">learn more</a>
            </RouterLink>
         </div>
         <div class="artwork">
            <img src="../assets/images/1.avif" alt="">
         </div>
      </section>
      

   </div>
<section class="services" id="services">

  <div class="box-container" >

    <div class="box" v-for="(value, index) in products" :key="index">
      <router-link :to="{ name: 'product', params:{ id: value.id }} " >
        <img :src="value.imgLink" v-bind:alt="value.id">
      </router-link>
    </div>

  </div>

</section>

</div>

</section>
</template>
<script >
import img1 from "../assets/images/shirt.png";
import img2 from "../assets/images/shoes.png";
import img3 from "../assets/images/trousers.png";
import img4 from "../assets/images/jacket.png";
import img5 from "../assets/images/hawaiian-shirt.png";
import img6 from "../assets/images/see_more.png";
import { RouterLink } from "vue-router";


export default{
    data: () => {
        return {
            products: [
                {
                    imgLink: img1, id: 1, price: 90, name: "SHIRT"
                }, {
                    imgLink: img2, id: 2, price: 120, name: "JEAN"
                }, {
                    imgLink: img3, id: 3, price: 59, name: "PANT"
                }, {
                    imgLink: img4, id: 4, price: 1900, name: "SWEATER"
                }, {
                    imgLink: img5, id: 5, price: 60, name: "JACKET"
                }, {
                    imgLink: img6, id: 6, price: 200, name: "SHOES"
                }
            ]
        };
    },
    components: { RouterLink }
}

</script>
<style scoped>
.services {
  background: var(--light-bg);
}

.services .box-container {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(15rem, 1fr)) [auto-fit];
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 2rem;
}

.services .box-container .box {
  text-align: center;
  padding: 4rem 2rem;
  background: var(--white);
  -webkit-box-shadow: var(--box-shadow);
  box-shadow: var(--box-shadow);
  border: var(--border);
}

.services .box-container .box:last-child {
  border: none;
  background: transparent;
  box-shadow: none;
}
.services .box-container .box:last-child {
  transform: translateY(0);
}

.services .box-container .box:hover img {
  -webkit-transform: translateY(-1rem);
  transform: translateY(-1rem);
}

.services .box-container .box img {
  height: 7rem;
  margin-bottom: 0.5rem;
  -webkit-transition: 0.2s linear;
  transition: 0.2s linear;
}

.services .box-container .box h3 {
  font-size: 1.7rem;
  color: var(--black);
  text-transform: capitalize;
  padding: 1rem 0;
}

.services .box-container .box p {
  font-size: 1.4rem;
  color: var(--light-color);
  line-height: 2;
}
.btn {
    border: 1px solid #000;
    border-radius: 5px;
    background: transparent;
    color: #000;
    font-weight: bold;
    margin-right: 5px;
}
.btn:hover{
    background-color: #888;
}
.home {
  padding: 0;
}

.home .slide {
  background-image: url(../assets/images/blue.png) ;
  min-height: 60rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  background-size: cover !important;
  background-position: center !important;
}

.home .slide::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(var(--white)),
    to(transparent)
  );
  background: linear-gradient(90deg,var(--white), transparent);
}

.home .slide .content {
  width: 50rem;
  position: relative;
}

.home .slide .content h3 {
  font-size: 10rem;
  color: var(--black);
  text-transform: capitalize;
  text-transform: uppercase;
}

.home .slide .content p {
  font-size: 1.5rem;
  color: var(--light-color);
  line-height: 2;
  padding: 1rem 0;
}

.home .swiper-button-next,
.home .swiper-button-prev {
  top: initial;
  bottom: 0;
  left: initial;
  right: 0;
  height: 7rem;
  width: 7rem;
  line-height: 7rem;
  background: var(--white);
}

.home .swiper-button-next:hover,
.home .swiper-button-prev:hover {
  background: var(--yellow);
}

.home .swiper-button-next::after,
.home .swiper-button-prev::after {
  font-size: 2rem;
  color: var(--black);
}

.home .swiper-button-prev {
  right: 7rem;
}
.home .slide .artwork{
  border: 10px solid #000;
  display: flex;
  width: 400px;
  align-items: flex-end;
  position: relative;
  margin-left: 300px;
}
.home .slide .artwork img{
  width: 700px;
}
</style>