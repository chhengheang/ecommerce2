<template>
    <section class="about">
        <div class="top">
            <h2>FUTURE OF SHOPPING</h2>
            <p>WINDD makes it easy for your next shopping-spree. Make your clotheset a Paris Fashion Show. </p>
            <button class="contact">SHOP NOW</button>
        </div>
        <div class="comment">
            <div class="content">
            <div class="img">
                <img src="../assets/images/user.png" alt="">
            </div>
            <div class="user-cmt">
                <p>love shopping at WINDD. It is the best!</p>
                <p>-Top G</p>
            </div>
            </div>
            <div class="content">
                <div class="img">
                <img src="../assets/images/user.png" alt="">
            </div>
            <div class="user-cmt">
                <p>Can't keep my money in my wallet, everything is just too cool not to buy.</p>
                <p>-Top G</p>
            </div>
            </div>
        </div>
            <div class="feature">
            <div class="left">
                <h2>Transparency </h2>
                <p>From the core to the surface, everything is all about standard and quality.</p>
            </div>
            <div class="right">
                <img src="../assets/images/creationofadam.jpg">
            </div>
             </div>


    </section>
</template>



<style scoped>
.top{
    width: 100%;
    align-items: center;
    padding: 70px;
    text-align: center;
    font-size: 1.5rem;
    background: url(../assets/images/green.jpg) no-repeat;
    background-position: center;
    background-size: cover;
}
.top button{
    margin-top: 30px;
    background: transparent;
    cursor: pointer;
    border: 1px solid #000;
    padding: 5px 10px;
    border-radius: 5px;
}
.top button:hover{
    background: url(../assets/images/green.jpg);
    color: var(--white);
}
.comment{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 70px;
    margin-top: 30px;
    margin-bottom: 30px;
    background: url(../assets/images/green.jpg) no-repeat;
    background-size: cover;
}
.comment .content{
    width: 50%;
    display: flex;
    align-items: center;
    gap: 20px;
}
.comment .img img{  
    width: 50px;
}
.feature{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 70px;
    margin-top: 30px;
    margin-bottom: 30px;
    background: url(../assets/images/green.jpg) no-repeat;
    background-size: cover;
}
.top h2{
    font-size: 4rem;
    font-style: italic;
}
.feature .left h2{
    font-size: 4rem;
    font-style: italic;
    margin-bottom: 2rem;

}
.feature .left p{
    font-size: 1.3rem;
    
}
.feature .right img{
    width: 500px;
}
</style>