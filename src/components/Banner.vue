<template>
    <section class="home" id="home">

<div class="swiper home-slider">

   <div class="swiper-wrapper">

      <section class="swiper-slide slide">
         <div class="content">
            <h3>Shopping Essential</h3>
            <p>Wind as a shopping platform where you can buy any next-Gen clothings from footwears to jackets.
              All with authenticity and class.
            </p>
            <a href="#about" class="btn">shop now</a>
            <a href="#about" class="btn">learn more</a>
         </div>
      </section>

   </div>
   <section class="services" id="services">

<div class="box-container">

   <router-link to="/product" class="box">
      <img src="../assets/images/shirt.png" alt="">
   </router-link>
   <div class="box">
      <img src="../assets/images/shoes.png" alt="">
   </div>
   <div class="box">
      <img src="../assets/images/trousers.png" alt="">
   </div>
   <div class="box">
      <img src="../assets/images/jacket.png" alt="">
   </div>
   <div class="box">
      <img src="../assets/images/hawaiian-shirt.png" alt="">
   </div>
   <div class="box">
      <img src="../assets/images/see_more.png" alt="">
   </div>


</div>

</section>

</div>

</section>
</template>
<script setup>
import { routerViewLocationKey } from 'vue-router';


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
    background: url("../assets/images/hero.jpg") no-repeat;
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
  background: linear-gradient(90deg, var(--white), transparent);
}

.home .slide .content {
  width: 50rem;
  position: relative;
}

.home .slide .content h3 {
  font-size: 6rem;
  color: var(--black);
  text-transform: capitalize;
  text-transform: uppercase;
}

.home .slide .content p {
  font-size: 1.4rem;
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

</style>