<template>
<!-- Footer -->
<footer class="page-footer fixed-bottom font-small unique-color-dark">

    <div class="bottom-color-style">
      <div class="container">

        <!-- Grid row-->
        <div class="row py-4 d-flex align-items-center">

          <!-- Grid column -->
          <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0 d-flex justify-content-between">
            <div class="footer-color">
            <i class="fa fa-star mr-1"></i>Popular
            </div>
            <div class="footer-color">
            <i class="fa fa-line-chart mr-1"></i>Top rated
            </div>
            <div class="footer-color">
            <i class="fa fa-television mr-1"></i>Upcoming</div>
            <div class="footer-color">
            <i class="fa fa-toggle-right mr-1"></i>Now playing
            </div>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-6 col-lg-7 text-center text-md-right">

            <!-- Facebook -->
            <a class="fb-ic">
              <i class="fa fa-facebook white-text mr-4"> </i>
            </a>
            <!-- Twitter -->
            <a class="tw-ic">
              <i class="fa fa-twitter white-text mr-4"> </i>
            </a>
            <!-- Google +-->
            <a class="gplus-ic">
              <i class="fa fa-google-plus white-text mr-4"> </i>
            </a>
            <!--Linkedin -->
            <a class="li-ic">
              <i class="fa fa-linkedin white-text mr-4"> </i>
            </a>
            <!--Instagram-->
            <a class="ins-ic">
              <i class="fa fa-instagram white-text"> </i>
            </a>

          </div>
          <!-- Grid column -->

        </div>
        <!-- Grid row-->

      </div>
    </div>

    <!-- Copyright -->
    <div class="footer-copyright text-center py-3">© 2018 Copyright:
      <a href="#"> WatchingFilm.com</a>
    </div>
    <!-- Copyright -->

  </footer>
  <!-- Footer -->
</template>

<script>
export default {
  name: 'bottom',
  data () {
    return {
      msg: ''
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer-color:hover {
  color: black !important;
  cursor: pointer;
}
.bottom-color-style {
  background: linear-gradient(40deg,#e2aa12,#fc6262) !important;
}
.bottom-line-style {
  background-color: #fc6262;
}
</style>
