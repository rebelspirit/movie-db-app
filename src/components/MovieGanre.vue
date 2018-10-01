<template>
  <container class="d-flex">
    <fa icon="youtube-play" class="pr-2"/>
    <a class="mx-1">
       <h6 class="font-weight-bold mb-3 text-capitalize">
        {{ }}
      </h6>
    </a>
  </container>
</template>

<script>
import { Container, Row, Column, Card, CardBody, MdMask, Fa, ViewWrapper, Btn } from 'mdbvue';
import axios from 'axios';

export default {
  name: 'MovieGanre',
  data() {
    return {
       moviesDetail: [],
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
  },
  created: function() {
      
  },
  mounted() {
    console.log(this);
    
  },
  methods: {
    indexOfMovies: function(data) {
      console.log(data);
    },
    loadMoviesData: function(id) {
      axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=37381515063aba22627eb415da0adfe3&language=ru`)
        .then(response => {
          
          let data = response.data
          this.moviesDetail.push(data)
          console.log(this.moviesDetail);
        })
        .catch(function (error) {
        // handle error
          console.error(error);
        })
    },
    nestedDataToString(data) {
      let nestedArray = [], resultString;
      data.forEach((item) => nestedArray.push(item.name));
      resultString = nestedArray.join(', ');
      return resultString;
    }
  }
};
</script>

<style scoped>


</style>
