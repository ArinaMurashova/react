export const matrix3 = (digit1: number, digit5: number, digit9: number, digit2: number, digit6: number, digit7: number, digit3: number, digit4: number, digit8: number) => {
    return (digit1 * digit5 * digit9 + digit2 * digit6 * digit7 + digit3 * digit4 * digit8) - (digit7 * digit5 * digit3 + digit8 * digit6 * digit1 + digit9 * digit4 * digit2);
}