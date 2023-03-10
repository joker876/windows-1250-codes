const CHAR_MAP: [string, number][] = [
    ['�', -1 ],
    ['€', 0x80],
    ['‚', 0x82],
    ['„', 0x84],
    ['…', 0x85],
    ['†', 0x86 ],
    ['‡', 0x87 ],
    ['‰', 0x89 ],
    ['Š', 0x8a ],
    ['‹', 0x8b ],
    ['Ś', 0x8c ],
    ['Ť', 0x8d ],
    ['Ž', 0x8e ],
    ['Ź', 0x8f ],
    ['‘', 0x91 ],
    ['’', 0x92 ],
    ['“', 0x93 ],
    ['”', 0x94 ],
    ['•', 0x95 ],
    ['–', 0x96 ],
    ['—', 0x97 ],
    ['™', 0x99 ],
    ['š', 0x9a ],
    ['›', 0x9b ],
    ['ś', 0x9c ],
    ['ť', 0x9d ],
    ['ž', 0x9e ],
    ['ź', 0x9f ],
    [' ', 0xA0 ],
    ['ˇ', 0xA1 ],
    ['˘', 0xA2 ],
    ['Ł', 0xA3 ],
    ['¤', 0xA4 ],
    ['Ą', 0xA5 ],
    ['¦', 0xA6 ],
    ['§', 0xA7 ],
    ['¨', 0xA8 ],
    ['©', 0xA9 ],
    ['Ş', 0xAa ],
    ['«', 0xAb ],
    ['¬', 0xAc ],
    ['­', 0xAd ], //SHY character
    ['®', 0xAe ],
    ['Ż', 0xAf ],
    ['°', 0xB0 ],
    ['±', 0xB1 ],
    ['˛', 0xB2 ],
    ['ł', 0xB3 ],
    ['´', 0xB4 ],
    ['µ', 0xB5 ],
    ['¶', 0xB6 ],
    ['·', 0xB7 ],
    ['¸', 0xB8 ],
    ['ą', 0xB9 ],
    ['ş', 0xBa ],
    ['»', 0xBb ],
    ['Ľ', 0xBc ],
    ['˝', 0xBd ],
    ['ľ', 0xBe ],
    ['ż', 0xBf ],
    ['Ŕ', 0xC0 ],
    ['Á', 0xC1 ],
    ['Â', 0xC2 ],
    ['Ă', 0xC3 ],
    ['Ä', 0xC4 ],
    ['Ĺ', 0xC5 ],
    ['Ć', 0xC6 ],
    ['Ç', 0xC7 ],
    ['Č', 0xC8 ],
    ['É', 0xC9 ],
    ['Ę', 0xCa ],
    ['Ë', 0xCb ],
    ['Ě', 0xCc ],
    ['Í', 0xCd ],
    ['Î', 0xCe ],
    ['Ď', 0xCf ],
    ['Đ', 0xD0 ],
    ['Ń', 0xD1 ],
    ['Ň', 0xD2 ],
    ['Ó', 0xD3 ],
    ['Ô', 0xD4 ],
    ['Ő', 0xD5 ],
    ['Ö', 0xD6 ],
    ['×', 0xD7 ],
    ['Ř', 0xD8 ],
    ['Ů', 0xD9 ],
    ['Ú', 0xDa ],
    ['Ű', 0xDb ],
    ['Ü', 0xDc ],
    ['Ý', 0xDd ],
    ['Ţ', 0xDe ],
    ['ß', 0xDf ],
    ['ŕ', 0xE0 ],
    ['á', 0xE1 ],
    ['â', 0xE2 ],
    ['ă', 0xE3 ],
    ['ä', 0xE4 ],
    ['ĺ', 0xE5 ],
    ['ć', 0xE6 ],
    ['ç', 0xE7 ],
    ['č', 0xE8 ],
    ['é', 0xE9 ],
    ['ę', 0xEa ],
    ['ë', 0xEb ],
    ['ě', 0xEc ],
    ['í', 0xEd ],
    ['î', 0xEe ],
    ['ď', 0xEf ],
    ['đ', 0xF0 ],
    ['ń', 0xF1 ],
    ['ň', 0xF2 ],
    ['ó', 0xF3 ],
    ['ô', 0xF4 ],
    ['ő', 0xF5 ],
    ['ö', 0xF6 ],
    ['÷', 0xF7 ],
    ['ř', 0xF8 ],
    ['ů', 0xF9 ],
    ['ú', 0xFa ],
    ['ű', 0xFb ],
    ['ü', 0xFc ],
    ['ý', 0xFd ],
    ['ţ', 0xFe ],
    ['˙', 0xFf ],
];

/**
 * Converts a character to its Windows-1250 encoding code.
 *
 * @param {string} char The character to convert.
 * @returns {number} The Windows-1250 encoding code for the character, or -1 if the character is not supported by Windows-1250.
 */
export function charToCode(char: string): number {
    //if char is standard ascii, return the code
    let charCode = char.charCodeAt(0);
    if (charCode < 128 && charCode >= 0) return charCode;
    //else, find the character in the map
    //if not found, return -1
    char = char.charAt(0);
    return CHAR_MAP.find(v => v[0] == char)?.[1] ?? -1;
}

/**
 * Converts a Windows-1250 encoding code to its corresponding character.
 *
 * @param {number} code The Windows-1250 encoding code to convert.
 * @returns {string} The character corresponding to the Windows-1250 encoding code, or a placeholder character if the code is not supported by Windows-1250.
 */
export function codeToChar(code: number): string {
    //if code is standard ascii, return the char
    if (code < 128 && code >= 0) return String.fromCharCode(code);
    //else, find the code in the map
    //if not found, return the placeholder character
    return CHAR_MAP.find(v => v[1] == code)?.[0] ?? CHAR_MAP[0][0];
}