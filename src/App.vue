<template>
  <div class="custom-grid w-full border border-black">
    <div class="text-center text-xl my-5">logo</div>
    <Nav  :products="products" @min="min" @sum="sum" />
    <Sidebar :categories="categories" @changeCategory="changeCategory" />
    <Home :categoryId="categoryId" @addProduct="addProduct" :categoryName="categoryName" />
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Sidebar from "./components/Sidebar.vue";
import Nav from "./components/Nav.vue";

export default {
  name: 'App',
  data() {
    return {
      categories: [],
      categoryId: null,
      categoryName: null,
      products: [],
    };
  },
  components: {
    Home,
    Sidebar,
    Nav,
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    getCategories() {
      this.axios
        .get("http://sva.talana.com:8000/api/product-category/")
        .then((response) => {
          this.categories = response.data;
        });
    },
    changeCategory(id, name) {
      this.categoryId = id;
      this.categoryName = name;
    },
    min(k) {
      console.log(this.products[k].number)
      if (this.products[k].number > 0) {
        this.products[k].number -= 1;
        console.log(this.products[k].number)
      }
    },
    sum(k) {
      this.products[k].number += 1;
      console.log(this.products[k].number)
    },
    addProduct(product, number) {
      let ids = this.products.map((e) => e.id);
      if( ids.includes(product) ){
        this.products.forEach((e) => {
          if(e.id === product){
            e.number += number;
          }
        })
      }else{
        product.number = number;
        this.products.push(product);
      }
    },
  },
}
</script>

<style>
  .custom-grid{
    display: inline-grid;
    grid-template-columns: auto 1fr;
    grid-gap: 10px;
    justify-content: start;
  }
</style>