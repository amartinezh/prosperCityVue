<template>
<div class=" h-screen bg-white-400 flex justify-center py-16">
    <div class="w-1/3">
        <div class="p-4 text-right shadow-2xl rounded-t-lg bg-green-100">
            <p class="font-semibold text-gray-700 h-6">{{ getOperation }}</p>
            <p class="font-bold text-3xl text-gray-900 my-2">{{getResul}}</p>
        </div>
        <div class="grid grid-cols-4 grid-rows-5 shadow-2xl rounded-b-lg">

            <button class="h-16 text-xl text-white font-semibold bg-green-500 border-green-400
            col-span-2 hover:bg-green-600" @click="clickAC('7')">AC</button>
            <button class="h-16 text-xl text-white font-semibold bg-green-500 border-green-400
            hover:bg-green-600 " @click="clickDEL()">DEL</button>
            <button class="h-16 text-xl text-white font-semibold bg-gray-700 border-gray-600
            hover:bg-gray-800" @click="click('÷')">÷</button>

             <button class="h-16 text-xl text-white font-semibold bg-green-500 border-green-400
             hover:bg-green-600 " @click="click('7')">7</button>
             <button class="h-16 text-xl text-white font-semibold bg-green-500 border-green-400
             hover:bg-green-600"  @click="click('8')">8</button>
             <button class="h-16 text-xl text-white font-semibold bg-green-500 border-green-400
             hover:bg-green-600"  @click="click('9')">9</button>
             <button class="h-16 text-xl text-white font-semibold bg-gray-700 border-gray-600
             hover:bg-gray-800" @click="click('x')">x</button>

             <button class="h-16 text-xl text-white font-semibold bg-green-500 border-green-400
             hover:bg-green-600" @click="click('4')">4</button>
             <button class="h-16 text-xl text-white font-semibold bg-green-500 border-green-400
             hover:bg-green-600" @click="click('5')">5</button>
             <button class="h-16 text-xl text-white font-semibold bg-green-500 border-green-400
             hover:bg-green-600" @click="click('6')">6</button>
             <button class="h-16 text-xl text-white font-semibold bg-gray-700 border-gray-600
             hover:bg-gray-800" @click="click('-')"> - </button>

             <button class="h-16 text-xl text-white font-semibold bg-green-500 border-green-400
             hover:bg-green-600" @click="click('1')">1</button>
             <button class="h-16 text-xl text-white font-semibold bg-green-500 border-green-400
             hover:bg-green-600" @click="click('2')">2</button>
             <button class="h-16 text-xl text-white font-semibold bg-green-500 border-green-400
             hover:bg-green-600" @click="click('3')">3</button>
             <button class="h-16 text-xl text-white font-semibold bg-gray-700 border-gray-600
             hover:bg-gray-800" @click="click('+')">  +</button>

             <button class="h-16 text-xl text-white font-semibold bg-green-500 border-green-400
             col-span-2 hover:bg-green-600" @click="click('0')">0</button>
             <button class="h-16 text-xl text-white font-semibold bg-green-500 border-green-400
             hover:bg-green-600" @click="click('.')">.</button>
             <button class="h-16 text-xl text-white font-semibold bg-gray-700  border-gray-600
             hover:bg-gray-800 rounded-br-lg" @click="clickResult()">=</button>
        </div>
    </div>
</div>

</template>

<script>

export default {
  data() {
    return {
      getOperation: '',
      getResul: '0',
    };
  },
  methods: {
    clickAC() {
      this.getResul = '0';
      this.getOperation = '0';
    },
    clickDEL() {
      if (this.getResul.length > 1) {
        this.getResul = this.getResul.substring(0, this.getResul.length - 1);
      } else {
        this.getResul = '0';
        this.getOperation = '0';
      }
    },
    click(par) {
      if (this.getResul === '0') {
        this.getResul = par;
      } else {
        this.getResul += par;
      }
    },
    clickResult() {
      let operation = this.getResul;
      this.getOperation = operation;

      operation = operation.replace('x', '*');
      operation = operation.replace('÷', '/');
      // this.getResul = eval(operation);
    },

  },
};
</script>

<style scoped>
button{
border: 1px solid;
}

</style>
