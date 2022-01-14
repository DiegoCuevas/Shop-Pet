<template>
  <div>
    <div class="w-1/6 text-center text-2xl">{{categoryName}}</div>
    <div class="grid grid-cols-4 p-10 gap-10">
      <div v-for="(e, k) in dataFiltered" :key="k">
        
        <Card :element="e" @addProduct="addProduct" />
      </div>
    </div>
  </div>
</template>
<script>
import Card from "./Card.vue";
export default {
  name: "Home",
  components: {
    Card,
  },
  props: {
    categoryId: { type: Number },
    categoryName: { type: String },
  },
  data() {
    return {
      data: [],
      dataFiltered: [],
    };
  },
  watch: {
    categoryId() {
      this.filterCategories(this.data);
    },
  },
  mounted() {
    this.getProducts();
  },
  
  methods: {
    filterCategories(data) {
      this.dataFiltered = data.filter((e) => e.category.id === this.categoryId);
      console.log(data);
    },
    getProducts() {
      this.axios
        .get("http://sva.talana.com:8000/api/product/")
        .then((response) => {
          this.data = response.data;
          this.dataFiltered = response.data
          this.dataFiltered.forEach((element) => { element.number = 0 })
        });
    },
    addProduct(product, count) {
      this.$emit("addProduct", product, count);
    },
   
  },
};
</script>