<template>
  <div class="modal-backdrop">
    <div class="bg-white w-2/4 rounded overflow-hidden shadow-lg my-2">
      <header class="relative p-5 justify-between">
        <slot name="header">
          Producto Agregado
        </slot>
        <button
          type="button"
          class="absolute top-0 right-0 px-5 py-3 text-2xl"
          @click="close"
        >
          x
        </button>
      </header>

      <section class="modal-body">
        <slot name="body">
          <div class="flex">
            <img class="w-1/2" :src="element.photo" alt="image">
              
            <div class="flex flex-col w-1/2">
              <div class="my-4 w-4/5 flex justify-between ">
                <span class="">Nombre:</span>
                <span class="">{{element.name}}</span>
              </div>
              <div class="my-4 w-4/5 flex justify-between ">
                <span class="">Codigo:</span>
                <span class="text-center">{{element.code}}</span>
              </div>
              <div class="my-4 w-4/5 flex justify-between ">
                <span>Precio: </span>
                <span>
                  ${{element.price}}
                </span>

              </div>
              <div class="my-4 w-4/5 flex justify-between ">
                <span>Cantidad:</span>
                <div class=" w-12 flex justify-between">
                  <span @click="$emit('min')">-</span>
                    {{ count }}
                  <span @click="$emit('sum')">+</span>
                </div>
              </div>
            </div>
          </div>
          <p class="text-grey-darker text-base multiline px-10 my-4">
                {{element.description}}
          </p>
        </slot>
       </section>

      <footer class="p-5 flex justify-center items-center">
        <button @click="close" class="mx-4">
          Seguir comprando
        </button>
        <button
          @click="addProduct"
          class="mx-4"
        >
          Agregar al carrito
        </button>
      </footer>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Modal',
    props: {
      element: {
        type: Object,
        required: true,
      },
      count: {
        type: Number,
        required: true,
      },
    },
    data() {
      return {
      };
    },
    methods: {
      close() {
        this.$emit('close');
      },
      addProduct() {
        this.$emit('addProduct',this.element, this.count);
        this.$emit('close');
      },
    },
  };
</script>
<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .multiline {   
    overflow:hidden;
    line-height: 3rem;
    max-height: 10rem;
    -webkit-box-orient: vertical;
    display: block;
    display: -webkit-box;
    overflow: hidden !important;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4;
  }
  

  .modal-footer {
    padding: 10px;
  }

  

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }


</style>