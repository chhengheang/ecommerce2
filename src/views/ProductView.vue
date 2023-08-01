
<template>
  <div> 
   <Header/>
   <Product hello/>
   <Footer/>
   
  </div>
 </template>
 <script >
   import Product from "../components/Product.vue";
   import Header from "../components/Header.vue";
   import Footer from "../components/Footer.vue";

   export default {
  data:()=>{
    return{
      hello:"hello"
    }
  }
}
 </script>
 