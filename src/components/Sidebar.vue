<template>
  <div>
    <div class=" text-center text-2xl my-5">Categorias: </div>
    <div v-for="(category, k) in categories" :key="k" class="cursor-pointer select-none ml-8 my-5 text-lg" @click="change(category)">{{category.name}}</div>
  </div>
</template>
<script>
export default {
  name: "Sidebar",
  props: {
    name: { type: String },
    categories: { type: Array },
  },
  
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
    change(category){
      this.$emit('changeCategory',category.id, category.name)
    }
  },
};
</script>