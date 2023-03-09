# windows-1250-codes
![npm](https://img.shields.io/npm/v/windows-1250-codes?label=version) ![NPM](https://img.shields.io/npm/l/windows-1250-codes) ![npm bundle size](https://img.shields.io/bundlephobia/min/windows-1250-codes)

A converter from characters to [windows-1250 codes](https://en.wikipedia.org/wiki/Windows-1250) and the other way around.

## Installation
### NodeJS
```
npm install windows-1250-codes --save
```

### Browser
Import the script:
```html
<script src="https://joker876.github.io/windows-1250-codes/windows-1250-codes.min.js">
```

## Usage

```typescript
import { charToCode, codeToChar } from 'windows-1250-codes';
```

#### Characters to codes
```typescript
charToCode(char: string): number;
```
The 1charToCode1 function takes a single string argument char, representing the character to be converted.

It returns a number representing the Windows-1250 encoding code for the character, or `-1` if the character is not supported by Windows-1250.

#### Codes to characters
```typescript
codeToChar(code: number): string;
```
The `codeToChar` function takes a single number argument code, representing the Windows-1250 encoding code to be converted.

It returns a string representing the character corresponding to the Windows-1250 encoding code, or a placeholder character `�` if the code is not supported by Windows-1250.
