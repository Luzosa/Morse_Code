import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'morse'
})
export class MorsePipe implements PipeTransform {

  morseCode: string = " ";
  
  transform(value: string, ...args: unknown[]): unknown {
    return this.convertToMorse(value);
  }

  convertToMorse(text: string){
    console.log(text.length);
    
  for ( let index = 0; index < text.length; index++) {
      console.log(text.charAt(index));
      switch(text.charAt(index)){
        case "a":
          this.morseCode += ". - ";
        break;
        case "b":
          this.morseCode += "- . . . ";
        break;
        case "c":
          this.morseCode += "- . - . ";
        break;
        case "d":
          this.morseCode += "- . . ";
        break;
        case "e":
          this.morseCode += ". ";
        break;
        case "f":
          this.morseCode += ". . - . ";
        break;
        case "g":
          this.morseCode += "- - . ";
        break;
        case "h":
          this.morseCode += ". . . . ";
        break;
        case "i":
          this.morseCode += ". . ";
        break;
        case "j":
          this.morseCode += ". - - - ";
        break;
        case "k":
          this.morseCode += "- . - ";
        break;
        case "l":
          this.morseCode += ". - . . ";
        break;
        case "m":
          this.morseCode += "- - ";
        break;
        case "n":
          this.morseCode += "- . ";
        break;
        case "o":
          this.morseCode += "- - - ";
        break;
        case "p":
          this.morseCode += ". - - . ";
        break;
        case "q":
          this.morseCode += "- - . - ";
        break;
        case "r":
          this.morseCode += ". - . ";
        break;
        case "s":
          this.morseCode += ". . . ";
        break;
        case "t":
          this.morseCode += "- ";
        break;
        case "u":
          this.morseCode += ". . - ";
        break;
        case "v":
          this.morseCode += ". . . - ";
        break;
        case "w":
          this.morseCode += ". - - ";
        break;
        case "x":
          this.morseCode += "- . . - ";
        break;
        case "y":
          this.morseCode += "- . - - ";
        break;
        case "z":
          this.morseCode += "- - . . ";
        break;
        case " ":
          this.morseCode += " ";
          break;
      }

    }
    console.log(this.morseCode);
    
    return this.morseCode;
  }
}
