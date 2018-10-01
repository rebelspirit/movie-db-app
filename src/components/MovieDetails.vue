<template>
  <container class="wrapper">
    <img class="header-image" v-bind:src="'https://image.tmdb.org/t/p/w1280' + moviesDetail.backdrop_path" alt="">
    <row class="mx-5 d-flex row-style mb-5 mt-3">
      <column lg="5" class="my-5">
        <view-wrapper class="img-size rounded z-depth-2 mb-lg-0 mb-4" hover>
          <img class="img-fluid" v-bind:src="'https://image.tmdb.org/t/p/w1280' + moviesDetail.poster_path" alt="Sample image" />
          <a>
            <md-mask overlay="white-slight" waves/>
          </a>
        </view-wrapper>
      </column>
      <column lg="6" class="text-left my-5">
        <section class="d-flex">
        <fa icon="youtube-play" class="pr-2"/>
        <a class="mx-1" v-for="genre in moviesDetail.genres" :key="genre.id" @click="searchByGenre(genre.id)">
          <h6 class="font-weight-bold mb-3 text-capitalize">
            {{ genre.name }}
          </h6>
        </a>    
        </section>
        <h3 class="font-weight-bold mb-3 p-0 text-white">
          <strong>{{ moviesDetail.title }}</strong>
        </h3>
        <h6 class="font-weight-light mb-3 p-0 grey-text font-italic">
          Original: {{ moviesDetail.original_title }} 
        </h6>
        <p class='text-white'>{{ moviesDetail.overview }}</p>
        <a>
          <h6 class="font-weight-bold mb-3">
            <fa icon="play-circle" class="pr-2" />Смотреть трейлер
          </h6>
        </a>
        <p class='text-white'>от
          <a>
            <strong>Christopher Nolan, Jonathan Nolan </strong>
          </a>, {{ moviesDetail.release_date }}</p>
       <p><i class="fa fa-star mr-2 "></i>Рейтинг:
          <strong>{{ moviesDetail.vote_average}}</strong>
        </p>
        <p class='text-white'>В главных ролях:
          <a>
            <strong>Matthew McConaughey, Jessica Chastain, Anne Hathaway, Michael Caine, Casey Affleck </strong>
          </a>
        </p>
        <p class='text-white'>Компании: 
          <a v-for="company in moviesDetail.production_companies" :key="company.id"> 
            <strong>{{ company.name }} / </strong>
          </a>
        </p>
        <p class='text-white'>Снят в: 
          <a v-for="country in moviesDetail.production_countries"> 
            <strong>{{ country.name }} </strong>
          </a>
        </p>
        <p class='text-white'>Бюджет: 
          <a> 
            <strong>{{ moviesDetail.budget }} $</strong>
          </a>
        </p>
      </column>
    </row>
    <h3 class="font-weight-bold mb-5 p-0 text-white">
      <strong>Похожие материалы</strong>
    </h3>
    <row>
    <column md="2" v-for="movie in relatedMovies">
      <card class="mb-2">
         <card-img v-bind:src="'https://image.tmdb.org/t/p/w1280' + movie.poster_path" alt="Card image cap" waves></card-img>
       </card>
    </column>
    </row>
  </container>
</template>

<script>
import { Container, Row, Column, Card, CardBody, MdMask, Fa, ViewWrapper, Btn, CardImg, CardTitle,
    CardText, } from 'mdbvue';
import axios from 'axios';

export default {
  name: 'MovieDetails',
  data() {
    return {

      moviesDetail: null,
      relatedMovies: [],
    };
  },
  components: {
    Container,
    Row,
    Column,
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardText,
    MdMask,
    Fa,
    ViewWrapper,
    Btn,
  },
  created() {
    this.loadMoviesData(this.$route.params.id)
    this.getRelated(this.$route.params.id)

  },
  mounted() {
    //console.log($route.params);
  },
  methods: {
    loadMoviesData: function(id) {
      axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=37381515063aba22627eb415da0adfe3&language=ru`)
        .then(res => this.moviesDetail = res.data)
        .catch(function (error) {
        // handle error
          console.error(error);
        })
    },
    getRelated: function (id) {
      axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=37381515063aba22627eb415da0adfe3&language=ru`)
        .then(res => this.relatedMovies = res.data.results)
        .then(() => this.relatedMovies.splice(-2, 2))
    }
  }
};
</script>

<style scoped>
.wrapper {
  min-height: 100vh;
  padding-bottom: 10rem;
}
.img-size {
  max-width: 350px;
  max-height: 475px;
  transition: transform .5s ease,box-shadow .5s ease;
  transform: translateZ(0);
}
.img-size:hover {
  transition: transform .5s ease,box-shadow .5s ease;
  transform: scale(1.03);
}
.row-style {
  color: #ffc929
}
.header-image {
  max-height: 100%;
  width: 100%;
  position: absolute;
  opacity: 0.1;
  top: 0;
  left: 0;

  background-color: #081c24;
  z-index: 0;
}
.favorite {
  position: absolute;
  left: 15px;
  top: 15px; 
  color: gold;
  z-index: 2;
  cursor: pointer;
}
.favorite:hover{
  color: red;
}

.active{
  color: red;
}
</style>
