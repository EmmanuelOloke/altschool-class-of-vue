import { ref } from 'vue';

export const useColorPickerGame = (arrOfColors) => {
    const colors = arrOfColors;
    let message = ref('Pick a Color...');

    const matchColor = (value) => {
        const randomNumber = Math.floor(Math.random() * 4); // Get a random number between 0 and 3 inclusive.

        colors[randomNumber] === value
        ? (message.value = `You win... [Right Answer: ${arrOfColors[randomNumber]}]`)
        : (message.value = `You lose... [Right Answer: ${arrOfColors[randomNumber]}]`);
    };

    return { message, colors, matchColor };
}