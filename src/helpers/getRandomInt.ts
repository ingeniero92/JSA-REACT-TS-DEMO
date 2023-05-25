export const getRandomInt = ( min: number = 0, max: number = Number.MAX_SAFE_INTEGER ) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}