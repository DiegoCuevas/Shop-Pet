<template>
  <div class="border w-full h-full shadow-xl flex justify-center items-center">
    <div class="h-full w-full flex flex-col justify-between items-center">
      <div class="h-full w-full flex justify-center items-center">
        <img :src="element.photo" class="w-64" />
      </div>
      <div class="p-2 h-2/4 flex flex-col justify-end">
        <div class="w-full">
          <span class="mx-">Nombre:</span>
          <span class="mx-2">{{ element.name }}</span>
        </div>
        <div class="">
          <span class="mx-1">Precio:</span>
          <span class="mx-1">${{ element.price }}</span>
        </div>
        <div class="cursor-pointer select-none flex justify-between w-full">
          <div class="mx-2 py-2">
            <span @click="min">-</span>
            {{ count }}
            <span @click="sum">+</span>
          </div>
          <span @click="showModal" class="py-2">Agregar al carrito</span>
        </div>
        <Modal v-if="isModalVisible" @close="closeModal" @addProduct="addProduct" :element="element" :count="count" @min="min" @sum="sum" />
      </div>
    </div>
  </div>
</template>
<script>
import Modal from "./modal/Modal.vue";
export default {
  name: "Card",
  components: {
    Modal,
  },
  props: {
    element: { type: Object },
  },
  data() {
    return {
      isModalVisible: false,
      count: 0,
    };
  },
  watch: {},
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    sum() {
      this.count += 1;
    },
    addProduct(element, count) {
      this.$emit('addProduct', element, count)
      this.count = 0
    },
    min() {
      if (this.count > 0) {
        this.count -= 1;
      }
    },
  },
};
</script>
