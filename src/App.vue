<template>
  <div id="app">
    <navbar/>
    <BestFilmSlider/>
    <router-view></router-view>
    <bottom/>
  </div>
</template>

<script>
import navbar from '@/components/Navbar';
import bottom from '@/components/bottom';
import MoviePage from '@/components/MoviePage';
import BestFilmSlider from '@/components/BestFilmSlider';
import MovieDetails from "@/components/MovieDetails";
import axios from 'axios';
import { loadMovies } from './components/MoviePage.vue';

export default {
  name: 'App',
  components: {
    navbar, bottom, MoviePage, BestFilmSlider, MovieDetails,
  },
  created: function(){

  },
  methods: {
    onScroll: function() {
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          loadMovies()
        }
      }
    },
    afterLeave(){
      document.querySelector('body').scrollTop = 0;
    },
  },
  mounted() {
    this.onScroll();
  }
}   
</script> 

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #17161b;
}

.controls-top {
  display: none;
}
.carousel-indicators {
  bottom: -2rem;
}
// router view transition
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}
.fade-enter-active {
  transition-delay: 0.25s;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
