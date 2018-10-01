<template>
  <container class="slider-position">
    <carousel :interval="8000" showControls showIndicators multi slide>
      <carousel-item>
        <row>
          <column md="2">
            <card class="mb-2">
              <card-img src="https://image.tmdb.org/t/p/w1280/lUFK7ElGCk9kVEryDJHICeNdmd1.jpg" alt="Card image cap" waves></card-img>
            </card>
          </column>
          <column md="2" class="clearfix d-none d-md-block">
            <card class="mb-2">
              <card-img src="https://image.tmdb.org/t/p/w1280/u3NvchflcAEAnb1gLOOdGFoRWSm.jpg" alt="Card image cap" waves></card-img>
            </card>
          </column>
          <column md="2" class="clearfix d-none d-md-block">
            <card class="mb-2">
              <card-img src="https://image.tmdb.org/t/p/w1280/7eDvhKCu7jkkKQI37nwYWvXJTzl.jpg" alt="Card image cap" waves></card-img>
            </card>
          </column>
          <column md="2" class="clearfix d-none d-md-block">
            <card class="mb-2">
              <card-img src="https://image.tmdb.org/t/p/w1280/syDObMIKfE6MI5w9DAlofSr0QQl.jpg" alt="Card image cap" waves></card-img>
            </card>
          </column>
          <column md="2" class="clearfix d-none d-md-block">
            <card class="mb-2">
              <card-img src="https://image.tmdb.org/t/p/w1280/iFPCByJjLivNpfHWcF8M7aPNd62.jpg" alt="Card image cap" waves></card-img>
            </card>
          </column>
          <column md="2" class="clearfix d-none d-md-block">
            <card class="mb-2">
              <card-img src="https://image.tmdb.org/t/p/w1280/qIUFg6tzKeK5bUDguonWCAFceNB.jpg" alt="Card image cap" waves></card-img>
            </card>
          </column>
        </row>
      </carousel-item>
      <carousel-item>
        <row>
          <column md="2">
            <card class="mb-2">
              <card-img src="https://image.tmdb.org/t/p/w1280/hzPf4iGKjRpDB3JdsGFbobnGxqe.jpg" alt="Card image cap" waves></card-img>
            </card>
          </column>
          <column md="2" class="clearfix d-none d-md-block">
            <card class="mb-2">
              <card-img src="https://image.tmdb.org/t/p/w1280/5KfFnPRIgxan2eJ7XxMkucpq8VI.jpg" alt="Card image cap" waves></card-img>
            </card>
          </column>
          <column md="2" class="clearfix d-none d-md-block">
            <card class="mb-2">
              <card-img src="https://image.tmdb.org/t/p/w1280/rr15FIIolP52DWsfpmDON6is1ad.jpg" alt="Card image cap" waves></card-img>
            </card>
          </column>
          <column md="2" class="clearfix d-none d-md-block">
            <card class="mb-2">
              <card-img src="https://image.tmdb.org/t/p/w1280/4VEkflsi7zQmBN6vNpihNrmnRzj.jpg" alt="Card image cap" waves></card-img>
            </card>
          </column>
          <column md="2" class="clearfix d-none d-md-block">
            <card class="mb-2">
              <card-img src="https://image.tmdb.org/t/p/w1280/7n4rvSYJFC3agan9GELwGPVjX86.jpg" alt="Card image cap" waves></card-img>
            </card>
          </column>
          <column md="2" class="clearfix d-none d-md-block">
            <card class="mb-2">
              <card-img src="https://image.tmdb.org/t/p/w1280/bDaspvC4WsuLkrU3Uy9zOYSdFhO.jpg" alt="Card image cap" waves></card-img>
            </card>
          </column>
        </row>
      </carousel-item>
      <carousel-item>
        <row>
          <column md="2">
            <card class="mb-2">
              <card-img src="https://image.tmdb.org/t/p/w1280/i5wwUwpturzYPdAYJCD5EDpNtC5.jpg" alt="Card image cap" waves></card-img>
            </card>
          </column>
          <column md="2" class="clearfix d-none d-md-block">
            <card class="mb-2">
              <card-img src="https://image.tmdb.org/t/p/w1280/hDd5Zd9VMOqBeHa2agbnHZ98WWr.jpg" alt="Card image cap" waves></card-img>
            </card>
          </column>
          <column md="2" class="clearfix d-none d-md-block">
            <card class="mb-2">
              <card-img src="https://image.tmdb.org/t/p/w1280/gNaW11QO61PxkeH3OMxc8nohHU0.jpg" alt="Card image cap" waves></card-img>
            </card>
          </column>
          <column md="2" class="clearfix d-none d-md-block">
            <card class="mb-2">
              <card-img src="https://image.tmdb.org/t/p/w1280/ukbLruQbrchScy3jTXgeAz9IWDL.jpg" alt="Card image cap" waves></card-img>
            </card>
          </column>
          <column md="2" class="clearfix d-none d-md-block">
            <card class="mb-2">
              <card-img src="https://image.tmdb.org/t/p/w1280/oHBytBrp37GpB6U4dNthMMMqQUS.jpg" alt="Card image cap" waves></card-img>
            </card>
          </column>
          <column md="2" class="clearfix d-none d-md-block">
            <card class="mb-2">
              <card-img src="https://image.tmdb.org/t/p/w1280/L6U6zH3N39toWXIjvfPjxgRXuG.jpg" alt="Card image cap" waves></card-img>
            </card>
          </column>
        </row>
      </carousel-item>
    </carousel>
  </container>
</template>

<script>
import { Carousel, CarouselItem, CarouselCaption, Container, Row, Column, Card, CardImg, CardBody, CardTitle, CardText, Btn } from 'mdbvue';
import axios from 'axios';
import MovieDetails from "@/components/MovieDetails";

export default {
  data() {
    return {
       movies: {},
    }
  },
   name: 'BestFilmSlider',
    components: {
    Carousel,
    CarouselItem,
    CarouselCaption,
    Container,
    Row,
    Column,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    Btn,
    axios
  },
  created: function() {
    return axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=37381515063aba22627eb415da0adfe3&language=en-US&page=1')
      .then(movies => this.movies = movies.data.results)
      .catch(function (error) {
       // handle error
        console.error(error);
      })
      
  },
  methods:  {

  }
};
</script>

<style scoped>
.slider-position {
  padding-top: 10rem;
}
.carousel-indicators {
  bottom: unset !important;
  top: 100% !important;
  margin-top: 10px !important;
}
</style>