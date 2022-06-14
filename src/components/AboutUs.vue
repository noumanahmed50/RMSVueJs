<template class="body">
    <div>
        <div class="about-section">
  <h1>About Us </h1>
  <p>I am a Dev with 1.5 years experience</p>
  <p>I work with <br> HTML 5-CSS 3-JAVA SCRIPT-REACT.JS-VUE.JS-<br>
      LARAVEL 8-PYTHON-REACT NATIVE-ANDROID</p>
</div>

<h2 style="text-align:center">My Self</h2>
<div class="row">
  <div class="column">
    <div class="card">
        <img class="logo" src="../assets/nomi1.jpg" style="width:40%" />
      <div class="container">
        <h2>Nouman Ahmed Awan</h2>
        <p class="title">CEO & Founder</p>
        <p>Dev at UDC media Bharia  town Islamabad</p>
        <p>noumanahmedawan50@gmail.com</p>
        
      </div>
    </div>
  </div>

  
  
  <div class="column">
    <div class="card">
        <img class="logo" src="../assets/nomi2.jpg" style="width:40% " />
      <div class="container">
        <h2>Nouman Ahmed Awan</h2>
        <p class="title">CEO & Founder</p>
        <p>Dev at UDC media Bharia  town Islamabad</p>
        <p>noumanahmedawan50@gmail.com</p>
        
      </div>
    </div>
  </div>



  <div class="column">
    <div class="card">
        <img class="logo" src="../assets/nouman.jpg" style="width:40% " />
      <div class="container">
        <h2>Nouman Ahmed Awan</h2>
        <p class="title">CEO & Founder</p>
        <p>Dev at UDC media Bharia  town Islamabad</p>
        <p>noumanahmedawan50@gmail.com</p>
        
      </div>
    </div>
  </div>
</div>

    </div>
</template>
<style>
.body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #474e5d;
  color: white;
}

.container {
  padding: 0 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
</style>