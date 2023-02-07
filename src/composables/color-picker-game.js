import { ref } from 'vue';

export const useColorPickerGame = (arrOfColors) => {
    let message = ref('Pick a Color...');

    const matchColor = (value) => {
        const randomNumber = Math.floor(Math.random() * 3) + 1;

        if (colors[randomNumber] === value) {
            message.value = `You win... [answer: ${colors[randomNumber]}]`;
            return;
          }
    
          message.value = `You loose [answer: ${colors[randomNumber]}]`;

        // colors[randomNumber] === value ?
        //   message.value = `You win... [Right Answer: ${arrOfColors[randomNumber]}]` :

        //   message.value = `You lose... [Right Answer: ${arrOfColors[randomNumber]}]`;
    };

    return { message, arrOfColors, matchColor };
}