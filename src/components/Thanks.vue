<template>
   <section class="thanks">
    <div class="left">
    <div class="thank">
        <div class="image"> <img src="../assets/images/checked.png"></div>
        <div class="thank-message">
            <h2>Order #696969</h2>
            <p>Thank you, Top G!</p>
        </div>
    </div>
        <hr>
        <div class="message">
            <p> Your order is confirmed.</p>
            <p>We have accepted your order and we are getting it shipped as soon as possible</p>
        </div>
        <hr>
        <h2>Customer Information</h2>
        <hr>
        <div class="info1">
            <div class="shipping-adds">
                <p>Shiping Address:</p>
                <p> Top G</p>
                <p> 111st, Dubai Abu Dhabi</p>
            </div>
            <div class="billing-adds">
                <p>Billing Address:</p>
                <p> Top G</p>
                <p> 111st, Dubai Abu Dhabi</p>
            </div>
        </div>
        <div class="info2">
            <div class="shipping-method">
                <p>Shipping Method</p>
                <p>UPS Ground(Estimated shipping time of 6-9 days)</p>
            </div>
            <div class="payment-method">
                <p>Payment Method</p>
                <p>Visa card(Ending 2069)-$62.69</p>
            </div>
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
      <RouterLink to="/receipt"><button> View your receipt</button></RouterLink>
        
    </div>
   </section>
  </template>
  <style scoped>
   hr {
        border-top: 1px solid #000;
      }
.thanks{
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
.left .thank{
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
}
.left .thank .image img{
    width: 70px;
}
.left .thank .thank-message p{
    font-size: 20px;
}
.left .message{
    font-size: 12px;
}
.left .info1 {
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-size: 12px;
}
.left .info2 {
    width: 75%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    font-size: 12px;
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
    .right button{
      width: 100%;
      padding: 10px 20px;
      cursor: pointer;
      background-color: green;
      font-size: 15px;
    }
  </style>