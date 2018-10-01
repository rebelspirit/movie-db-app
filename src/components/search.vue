<template>
  <container class="search-style">
  <form class="form-inline">
    <input 
      class="form-control mr-sm-2" 
      type="text" 
      placeholder="Найти фильм" 
      aria-label="Search"
      @keyup="searchMovies"
      @blur="clearSearch"
    >
  </form>
  <ul class="dropdown-list">
    <row class="row-style" v-for="movie in searchedMovies">
    <column lg="3" class="text-left">
      <img class="img-fluid img-size" v-bind:src="'https://image.tmdb.org/t/p/w1280' + movie.poster_path" alt="Sample image" />
    </column>
    <column lg="9" class="text-left">
      <h6 class="mt-4 text-white">
      {{ movie.title }}
      </h6>
      <p class="font-italic">{{ movie.original_title }}</p>
      <p><i class="fa fa-star mr-2 text-warning"></i>Рейтинг:
          <strong>{{movie.vote_average}}</strong>
      </p>
    </column>
    </row>
  </ul>
  </container>
</template>

<script>
import { Container, Row, Column, Card, CardBody, MdMask, Fa, ViewWrapper, Btn, } from 'mdbvue';
import axios from 'axios';

export default {
  name: 'search',
  data() {
    return {
       searchedMovies: [],
       timeout: null,
    }
  }, 
  components: {
    axios,
    Container,
    Column,
    Row,
  },
  methods:  {
    clearSearch: function() {
      this.searchedMovies = []
    },
    searchMovies: function(event) {
      const query = event.target.value
      if (this.timeout) {
        clearTimeout(this.timeout)
        this.clearSearch()
      }
      this.timeout = setTimeout(() => {
        if(query) {
          return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=37381515063aba22627eb415da0adfe3&language=ru&query=${query}&include_adult=false&region=ua`)
          .then(searchedMovies => this.searchedMovies = searchedMovies.data.results)
        }
      }, 500)
    }
  }
}
</script>

<style scoped>
.search-style{
  max-width: 45%;
  position: relative;
}
input {
  width: 100% !important;
  outline: none !important;
  background-color: #17161b;
  border-bottom: 1px solid white !important;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-radius: 0;
  color: white;
}
input:focus {
  outline: none !important;
  box-shadow: none !important;
  background-color: #17161b;
  border-bottom: 1px solid white !important;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-radius: 0;
  border-bottom-color: #fc6262 !important;
  color: white;
}
.dropdown-list {
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  max-height: 500px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  color: #fff;
  background-color: #17161b;
  opacity: .97;
  overflow-y: scroll;
  overflow-x: hidden;
}

.img-size {
  max-width: 175px;
  max-height: 150px;
}
.row-style {
    border-bottom: 1px solid grey;
}
</style>
