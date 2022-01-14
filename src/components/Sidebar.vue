<template>
  <div>
    <div class=" text-center text-2xl my-5">Categorias: </div>
    <div v-for="(e, k) in categories" :key="k" class="">{{e.name}}</div>
  </div>
</template>
<script>
export default {
  name: "Home",
  props: {
    categories: [],
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
  },
};
</script>