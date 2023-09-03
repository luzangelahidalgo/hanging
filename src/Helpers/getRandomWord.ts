let words: string[] = [
    'ROSE',
    'AGUCATE',
    'COMPUTADOR',
    'LULU',
    'GAFAS',
    'FRESAS'

];

export function getRandomWord() {

    const randomIndex = Math.floor(Math.random() * words.length);
    return words [randomIndex];

}