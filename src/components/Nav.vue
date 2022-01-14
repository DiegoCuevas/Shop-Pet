<template>
  <div class=" h-16 ">
    <div class="flex justify-end h-full items-center">
      <div @click="toggleShopppinCar" class="cursor-pointer mx-10 bg-black border-white rounded-lg w-52 h-10 text-center py-2 text-white">
        Carrito de Compras
      </div>
    </div>
    <div class="w-1/3 h-80 absolute right-0 border-black bg-white flex flex-col justify-between" v-if="show">
      <div class="border pl-5 my-5">Resumen de Compra</div>
      <div
        v-for="(product, k) in products"
        :key="k"
        class="flex items-center justify-between p-2"
      >
        <div class="flex flex-col">
          <span class="mx-2">{{ product.name }}</span>
          <span class="mx-2">${{ product.price }}</span>
        </div>
        <div>
          <span @click="min(k)" class="border px-5 mx-2 cursor-pointer">-</span>
          <span>{{ product.number }}</span>
          <span @click="add(k)" class="border px-5 mx-2 cursor-pointer">+</span>
        </div>
        <div>${{ product.number > 0 ? product.price * product.number : product.price }}</div>
      </div>
      <div class="mx-5">total: ${{total}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Nav",
  props: {
    products: { type: Array },
  },
  data() {
    return {
      show: false,
      total: 0
    };
  },
  mounted() {
  },
  methods: {
    toggleShopppinCar() {
      this.show = !this.show;
      this.sumTotal()
    },
    min(i){
      this.$emit('min', i);
      this.$forceUpdate();
      this.sumTotal()
    },
    add(i){
      this.$emit('sum', i)
      this.$forceUpdate();
      this.sumTotal()
    },
    sumTotal(){
      this.products.forEach(product => {
        this.total += product.number > 0 ? product.price * product.number : product.price
      })
    }
  },
};
</script>