<template>
<div class="footer">
      <div class="btn-footer">Cambodia | English | $USD</div>
      <div class="find_us">
         Find Us:
         <div>
            <img src="../assets/images/facebook.png" alt="">
            <img src="../assets/images/twitter-sign.png" alt="">
            <img src="../assets/images/instagram.png" alt="">
         </div>
      </div>
      <div class="find_us">
         Download Our App:
         <div>
            <img src="../assets/images/apple.png" alt="">
            <img src="../assets/images/android-logo.png" alt="">

         </div>
      </div>
      <div class="btn-footer">Subscribe</div>
   </div>
</template>
<style scoped>
.footer {
         background: white;
         margin-top: 3rem;
         margin-bottom: 3rem;
         padding: 0 10%;
         display: flex;
         align-items: center;
         justify-content: space-between;

      }

      .btn-footer {
         font-size: 17px;
         padding: 10px 17px;
         border: 1px solid #000;

      }

      .find_us {
         font-size: 17px;
         display: flex;
         align-items: center;
         justify-content: center;
         gap: 10px;
      }

      .find_us img {
        margin-right: 5px;
         width: 30px;
      }
 </style>