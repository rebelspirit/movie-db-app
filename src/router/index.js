import Vue from 'vue';
import Router from 'vue-router';
import MoviePage from "@/components/MoviePage";
import MovieDetails from "@/components/MovieDetails";

Vue.use(Router);

const routes = [

{	path: '/', component: MoviePage  },
{	path: '/details/:id', component: MovieDetails  },

];

const router =  new Router({
  routes,
});

export default router;