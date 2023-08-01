<template>
    <section class="about">
        <div class="top">
            <h2>Landing Page Hero Heading</h2>
            <p> PARAGRAPH PARAGRAPH PARAGRAPH PARAGRAPH PARAGRAPH PARAGRAPH PARAGRAPH </p>
            <button class="contact">Contact Us</button>
        </div>
        <div class="comment">
            <div class="content">
            <div class="img">
                <img src="../assets/images/user.png" alt="">
            </div>
            <div class="user-cmt">
                <p>SPEEEEEEEEEEEEEEEEEECH</p>
                <p>-Top G</p>
            </div>
            </div>
            <div class="content">
                <div class="img">
                <img src="../assets/images/user.png" alt="">
            </div>
            <div class="user-cmt">
                <p>SPEEEEEEEEEEEEEEEEEECH</p>
                <p>-Top G</p>
            </div>
            </div>
        </div>
            <div class="feature">
            <div class="left">
                <h2>Feature 1</h2>
                <p>PARAGRAAAAAAAAAAAAAAAH</p>
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
    background: var(--black);
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
.feature .left h2{
    font-size: 2rem;

}
.feature .left p{
    font-size: 1.5rem;
    
}
.feature .right img{
    width: 500px;
}
</style>