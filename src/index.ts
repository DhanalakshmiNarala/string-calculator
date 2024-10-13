import * as readline from 'readline';
import { StringCalculator } from './services/stringCalculator';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter input string: ', (input: string) => {
  try {
    const calculator = new StringCalculator();
    const sum = calculator.add(input);
    console.log(`Sum: ${sum}`);
    rl.close();
  } catch (error) {
    console.log('Error: ', error);
  }
});
