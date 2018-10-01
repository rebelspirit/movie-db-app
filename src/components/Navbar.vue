<template>
<!--Navbar-->
<nav class="navbar navbar-expand-lg navbar-dark navbar-bcg fixed-top scrolling-navbar">

    <!-- Navbar brand -->
    <router-link class="navbar-brand" to="/">Watching Film<span class="badge amber darken-2 ml-1">Beta</span></router-link>

    <!-- Collapse button -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Collapsible content -->
    <div class="collapse navbar-collapse" id="basicExampleNav">

        <!-- Links -->
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link" href="#">Категории
                    <span class="sr-only">(current)</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Фильмы</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Сериалы</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Телешоу</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Мультфильмы</a>
            </li>

        </ul>
        <search/>
        <!-- Links -->
        <form class="form-inline ">
          <button class="btn btn-sm btn-color" type="button">Регистрация</button>
          <button class="btn btn-sm btn-color" type="button">Войти</button>
        </form>
    </div>
    <!-- Collapsible content -->

</nav>
<!--/.Navbar-->
</template>

<script>
import search from "@/components/search";

export default {
  name: 'navbar',
    components: {
    search,
  }, 
  data () {
    return {
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  font-weight: normal;
  padding-top: 20px;
  padding-bottom: 30px;
}
p {
  color: #969696;
  margin-bottom: 0;
  font-size: 14px;
}
.btn-color {
  background: linear-gradient(40deg,#e2aa12,#fc6262) !important;
}
.btn-color:nth-child(2){
  background: linear-gradient(40deg,#fc6262,#e2aa12) !important;
}
.navbar-bcg {
  background: #17161b;
}
.navbar-brand {
  color: #ff9800;
}
</style>
