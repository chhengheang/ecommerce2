<template>
    <header class="header">
<router-link to="/">
<a href="#" class="logo"><img src="../assets/images/WINDD.png"></a>
</router-link>
<div class="icons search_wrapper">
   <i class="fas fa-search"></i>
   <input class="search_bar" type="text" placeholder="Search for ..." />
</div>

<nav class="navbar">
  <router-link to="/"> 
  <a href="#home">Home</a>
</router-link>
   <a href="#about">About</a>
   <a href="#services">Services</a>
   <a href="#projects">
      <i class="fas fa-shopping-cart"></i>
      Cart <span>(0)</span>
   </a>
   <a class="btnn sign_up" href="#pricing">Sign Up</a>
   <a class="btnn login" href="#contact">Login</a>
</nav>

</header>
</template>
<script setup>

</script>
<style lang="scss">
@import "../assets/style.scss";
</style>
<style scoped>
.search_wrapper {
      padding-left: 10px;
      width: 230px;
      display: flex;
      align-items: center;
      border: 1px solid #000;
      border-radius: 30px;
   }

   .search_wrapper .fas {
      font-size: 15px;
   }

   .search_bar {
      background-color: transparent;
      padding: 10px;
   }

   .search_bar ::placeholder {
      color: rgba(0, 0, 0, 0.1);
   }

   .btnn {
      padding: 7px 20px;
      border: 1px solid #000;
      border-radius: 5px;

   }

   .sign_up,
   .login {
      font-weight: bold;
   }

   .login {
      padding: 7px 27px;
      border: 1px solid #333;
      background: #333;
      color: #fff !important;
   }
   .header {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  -webkit-box-shadow: var(--box-shadow);
  box-shadow: var(--box-shadow);
  padding: 1.5rem 10%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  z-index: 1000;
  background: var(--white);
}

.header .logo {
  margin-bottom: -15px;
  font-size: 2.5rem;
  color: var(--black);
  text-transform: capitalize;
}

.header .logo span {
  color: var(--yellow);
}

.header .navbar a {
  font-size: 2rem;
  color: var(--black);
  text-transform: capitalize;
  margin: 0 1rem;
}

.header .navbar a:first-child {
  margin: 0 4rem;
}
.header .navbar a:nth-child(2) {
  margin: 0 4rem;
}

.header .navbar a:nth-child(3) {
  margin: 0 4rem;
}

.header .navbar a:hover {
  color: var(--yellow);
}

.header .icons div {
  height: 5rem;
  width: 5rem;
  line-height: 5rem;
  font-size: 2rem;
  background: var(--light-bg);
  color: var(--black);
  cursor: pointer;
  text-align: center;
  margin-left: 0.3rem;
}

.header .icons div:hover {
  background: var(--black);
  color: var(--white);
}

.header #menu-btn {
  display: none;
}

.header .search-form {
  position: absolute;
  top: 120%;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 70rem;
  background: var(--white);
  -webkit-box-shadow: var(--box-shadow);
  box-shadow: var(--box-shadow);
  padding: 1rem;
  display: none;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 1rem;
  -webkit-animation: fadeIn 0.2s linear;
  animation: fadeIn 0.2s linear;
}

.header .search-form.active {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.header .search-form input {
  width: 100%;
  padding: 1.2rem 1.4rem;
  background: var(--light-bg);
  font-size: 1.6rem;
  color: var(--light-color);
}

.header .search-form label {
  font-size: 2.5rem;
  color: var(--black);
  cursor: pointer;
  margin: 0 1rem;
}

.header .search-form label:hover {
  color: var(--yellow);
}

.header .login-form {
  position: absolute;
  top: 120%;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 40rem;
  background: var(--white);
  -webkit-box-shadow: var(--box-shadow);
  box-shadow: var(--box-shadow);
  padding: 2rem;
  text-align: center;
  -webkit-animation: fadeIn 0.2s linear;
  animation: fadeIn 0.2s linear;
  display: none;
}

.header .login-form.active {
  display: block;
}

.header .login-form h3 {
  font-size: 2.5rem;
  color: var(--black);
  text-transform: capitalize;
  padding-bottom: 1rem;
  text-transform: uppercase;
}

.header .login-form .box {
  width: 100%;
  padding: 1.2rem 1.4rem;
  background: var(--light-bg);
  font-size: 1.6rem;
  color: var(--light-color);
  margin: 0.7rem 0;
}

.header .login-form .flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 0.5rem;
  padding-top: 1.5rem;
  padding-bottom: 1rem;
}

.header .login-form .flex label {
  font-size: 1.5rem;
  color: var(--light-color);
  cursor: pointer;
}

.header .login-form .flex a {
  font-size: 1.5rem;
  color: var(--light-color);
  margin-left: auto;
}

.header .login-form .flex a:hover {
  color: var(--yellow);
  text-decoration: underline;
}

.header .login-form .btn {
  width: 100%;
}

.header .login-form p {
  font-size: 1.5rem;
  color: var(--light-color);
  line-height: 2;
  padding-top: 1.5rem;
}

.header .login-form p a {
  color: var(--yellow);
}

.header .login-form p a:hover {
  text-decoration: underline;
}
@media (max-width: 1200px) {
  .header {
    padding: 1.5rem 2rem;
  }
  section {
    padding: 3rem 5%;
  }
}

@media (max-width: 991px) {
  html {
    font-size: 55%;
  }
  section {
    padding: 3rem 2rem;
  }
  .header #menu-btn {
    display: inline-block;
  }
  .header .navbar {
    position: absolute;
    top: 99%;
    left: 0;
    right: 0;
    background: var(--white);
    border-top: var(--border);
    border-bottom: var(--border);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    -webkit-transition: 0.2s linear;
    transition: 0.2s linear;
  }
  .header .navbar.active {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  .header .navbar a {
    display: block;
    margin: 2rem;
  }
}

@media (max-width: 768px) {
  .header .search-form {
    width: 90%;
  }
  .header .login-form {
    width: 90%;
  }
  .home .slide {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .home .slide .content {
    text-align: center;
  }
  .home .slide .content h3 {
    font-size: 3rem;
  }
}

@media (max-width: 450px) {
  html {
    font-size: 50%;
  }
  .about .row .content h3 {
    font-size: 2.5rem;
  }
}
/*# sourceMappingURL=style.css.map */

</style>