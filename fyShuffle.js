/**
 * A JavaScript implementation of the [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle) for generating a truly random, unbiased permutation of a finite sequence.
 * @author Dominik Bošnjak
 * @arg elementSet {any[]}
 * @returns elementSet in a randomized order.
 */
export function fyShuffle(elementSet) {
    const randomizedSet = elementSet;
    let
        n = elementSet.length,
        i;
    while (n > 0) {
        i = Math.floor(Math.random() * n--);
        randomizedSet.push(elementSet.splice(i, 1)[0]);
    };
    return randomizedSet;
};
