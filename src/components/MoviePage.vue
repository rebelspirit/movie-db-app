<template>
  <container class="wrapper">
    <h2 class="h1-responsive font-weight-bold text-center my-5 text-white">Самые популярные фильмы</h2>
    <p class="text-center w-responsive mx-auto mb-5 text-white">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <row class="my-5 reverse-item flex-item-reverse" v-for="movie in movies">
      <column lg="5" class="my-4">
        <view-wrapper class="img-size rounded z-depth-2 mb-lg-0 mb-4" hover>
          <i class="fa fa-star fa-2x favorite" :class="{active: localData.includes(movie.id)}" @click="addToFavorites(movie.id)"></i>
          <img class="img-fluid" v-bind:src="'https://image.tmdb.org/t/p/w1280' + movie.poster_path" alt="Sample image" />
          <a>
            <md-mask overlay="white-slight" waves/>
          </a>
        </view-wrapper>
      </column>
      <column lg="7" class="text-left my-4">
        <section class="d-flex">
        <fa icon="youtube-play" class="pr-2"/>
        <a class="mx-1" v-for="genre in movie.genres" :key="genre.id" @click="searchByGenre(genre.id)">
          <h6 class="font-weight-bold mb-3 text-capitalize">
            {{ genre.name }}
          </h6>
        </a>    
        </section>

        <h3 class="font-weight-bold mb-3 p-0 text-white">
          <strong>{{movie.title}}</strong>
        </h3>
        <p class='text-white'>{{movie.overview}}</p>
        <a>
          <h6 class="font-weight-bold mb-3">
            <fa icon="play-circle" class="pr-2" />Смотреть трейлер
          </h6>
        </a>
        <p class='text-white'>от
          <a>
            <strong>Christopher Nolan, Jonathan Nolan </strong>
          </a>, {{movie.release_date}}</p>
       <p><i class="fa fa-star mr-2 "></i>Рейтинг:
          <strong>{{movie.vote_average}}</strong>
        </p>
        <p class='text-white'>В главных ролях:
          <a>
            <strong>Matthew McConaughey, Jessica Chastain, Anne Hathaway, Michael Caine, Casey Affleck </strong>
          </a>
        </p>
        
          <router-link v-bind:to="`/details/${movie.id}`" class="text-white"><btn size="md" class="mb-lg-0 mb-4 waves-light">Подробней</btn> </router-link>

      </column>
    </row>

  </container>
</template>

<script>
import { Container, Row, Column, Card, CardBody, MdMask, Fa, ViewWrapper, Btn } from 'mdbvue';
import axios from 'axios';
import MovieDetails from "@/components/MovieDetails";
import { loadMoviesData } from '@/components/MovieDetails';

const favorites = localStorage.getItem('favorites')
let currentPage = 1
let maxPage = 0
let movies = []
let genres = []
let url = 'https://api.themoviedb.org/3/movie/popular?api_key=37381515063aba22627eb415da0adfe3&language=ru&region=UA'

export function loadMovies() {
  if (!maxPage || currentPage <= maxPage) {
    return axios.get(`${url}&page=${currentPage}`)
      .then(res => {
        currentPage++
        maxPage = res.data.total_pages
        return res.data.results.forEach((movie) => {
          movies.push({
            ...movie,
            genres: movie.genre_ids.map((id) => genres.find((genre) => genre.id === id))
          })}
        )
      })
  }
}

function loadGenres() {
  return axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=37381515063aba22627eb415da0adfe3&language=ru`)
    .then(res => genres = res.data.genres)
}

export default {
  name: 'MoviePage',
  data() {
    return {
       movies: [],
       localData: [],
    }
  }, 
  components: {
    Container,
    Row,
    Column,
    Card,
    CardBody,
    MdMask,
    Fa,
    ViewWrapper,
    Btn,
    axios,
    MovieDetails,
  },
  created: function() {
    loadGenres().then((genres) => loadMovies().then(() => {
      this.movies = movies
    }))
  },
  mounted() {
        //console.log($route.params);
  },
  methods: {
    searchByGenre: function(genreId) {
      currentPage = 1
      url = `https://api.themoviedb.org/3/discover/movie?api_key=37381515063aba22627eb415da0adfe3&language=ru&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=${genreId}`
      movies = []
      
      loadMovies()
        .then(() => this.movies = movies)
        .then(() => window.scroll(0, 0))
        .catch(function (error) {
        // handle error
          console.error(error);
        })
    },
    addToFavorites: function(movieId) {

      if(this.localData.includes(movieId)) {
        this.localData = this.localData.filter((id) => id !== movieId)
      } else {
        this.localData.push(movieId)
      }

      let localData = JSON.stringify(this.localData)
      console.log(localData)
      localStorage.setItem("movie", localData)
      console.log(`Что записало в localStorage: ${localData}`)

    },
    consoleClick: function(id){
      console.log(id);
    }

  }
}
</script>

<style scoped>
.on-scroll {
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;

}
.img-size {
  max-width: 350px;
  max-height: 475px;
  transition: transform .5s ease,box-shadow .5s ease;
  transform: translateZ(0);
  position: relative;
}
.favorite {
  position: absolute;
  left: 15px;
  top: 15px; 
  color: gold;
  z-index: 2;
  cursor: pointer;
  filter: drop-shadow(1px 1px 1px black);
}
.favorite:hover{
  color: red;
}

.active{
  color: red;
}
.img-size:hover {
  transition: transform .5s ease,box-shadow .5s ease;
  transform: scale(1.03);
}
.reverse-item {
  color: #fc6262 !important;
}
.reverse-item:nth-child(3n+2) {
  color: #ff7043 !important;
}

.reverse-item:nth-child(3n+3) {
  color: #ffd86f !important;
}

.btn-default{
  background: linear-gradient(40deg,#ffd86f,#fc6262) !important;
}
.flex-item-reverse:nth-child(even) {
    -webkit-box-orient: horizontal !important;
    -webkit-box-direction: reverse !important;
    flex-direction: row-reverse !important;
}
.wrapper {
  padding-bottom: 5rem !important;
}

</style>
