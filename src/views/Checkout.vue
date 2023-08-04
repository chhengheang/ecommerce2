<template>
  <section class="checkout">
        <div class="left">
            <hr>
            <div class="shipping">
                Shipping address:
                <input type="text">
            </div>
            <hr>
            <div class="shipping">
                Shipping method:
                <input type="text">
            </div>
            <hr>
            <div class="payment-method">
                <div class="payment">Payment method: </div>
                <div class="img"><img src="../assets/images/visa.png"> 
                                <img src="../assets/images/master.png">
            </div>
            </div>
            <div class="card-number"><input type="text" placeholder="Card number"></div>
            <div class="card-info">
                <div class="card-detail"><input type="text" placeholder="Name on card"></div>
                <div class="card-detail"><input type="text" placeholder="MM/YY"></div>
                <div class="card-detail"><input type="text" placeholder="CVV"></div>
            </div>
            <hr>
            <div class="billing-address">
                <div class="billing">Billing Address: </div>
                <div class="shipping"> <input class="option" type="radio" name="billing">Same as shipping address  </div>
                <div class="shipping"> <input class="option" type="radio" name="billing">New billing address </div>
            </div>
            <hr>
            <div class="complete">
            <router-link to="/cart"> <p> &#60; Return to Customer Information</p> </router-link>
            <RouterLink to="/thanks"><button>Complete  Order</button></RouterLink>
            
            </div>
        </div>
        <div class="right">
      <div class="summary">
        <h2>Summery (1 item)</h2>
        <div class="two-text">
          <p>Subtotal</p>
          <p>$60.00</p>
        </div>
        <p>Shipping</p>
        <p>Est. Taxes</p>
        <hr>
        <div class="two-text">
          <p>Total</p>
          <p>$60.00</p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
 hr {
      border-top: 1px solid #000;
    }
.checkout {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 2rem;
      height: 80dvh;
    }
.left{
    border: 1px solid #000;
      width: 70%;
      padding: 40px;
      display: flex;
      flex-direction: column;
      gap: 1rem;
}
.left .shipping {
    font-size: 1.5rem;
    font-weight: bold;
}

.left .payment-method{
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    font-size: 1.5rem;
    font-weight: bold;
}
.left .payment-method .img img{
   width: 30px;
}
.left .card-number{
    font-size: 1.5rem;
    border: 1px solid #000;
    padding: 5px 10px;
}
.left .card-info{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-size: 1.5rem;
    font-weight: bold;
    gap: 2rem;
}
.left .card-info .card-detail{
    border: 1px solid #000;
    padding: 5px 10px;
}
.left .card-info .card-detail:first-child{
    width: 40%;
}
.left .card-info .card-detail:nth-child(2){
    width: 35%;
}
.left .card-info .card-detail:last-child{
    width: 25%;
}
.left .billing-address .billing{
    font-size: 1.5rem;
    font-weight: bold;
}
.left .billing-address .shipping{
    width: 100%;
    border: 1px solid #000;
    font-weight: normal;
    font-size: 1.5rem;
    padding: 5px 10px;
    margin-bottom: 10px;
}
.left .billing-address .shipping .option{
    margin-right: 7px;
}

.left .complete{
   display: flex;
   justify-content: space-between;
   align-items: center;
}
.left .complete p{
    color: black;
    cursor: pointer;
    font-size: 15px;
    font-weight: bold;
}
.left .complete button{
    border: 1px solid #000;
    padding: 7px 35px;
    cursor: pointer ;
    font-size: 15px;
    background-color: #A1B5C8;
}

.right .summary {
      padding: 10px;
      background: rgba(150, 135, 135, .5);;
      display: flex;
      flex-direction: column;
      gap: .5rem;
      border: 1px solid #000;
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
</style>