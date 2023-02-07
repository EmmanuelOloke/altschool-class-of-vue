<template>
  <h1>Color Picker Game</h1>

  <div>{{ message }}</div>

  <button v-for="color in colors" :key="color" @click="matchColor(color)">
    {{ color }}
  </button>
</template>

<script>
import { ref, reactive } from "@vue/reactivity";
import { useColorPickerGame } from '../composables/color-picker-game.js';

export default {
  setup() {
    const colorsArray = ["green", "red", "blue", "purple"];

    const { colors, message, matchColor } = useColorPickerGame(colorsArray);

    return { colors, message, matchColor };
  },
};
</script>

<style></style>
