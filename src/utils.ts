// src/utils.ts

export const UppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export const LowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
export const Numbers = "0123456789";
export const Symbols = "!@#$%^&*()_+=";

export const getStrengthLabel = (strength: number) => {
  switch (strength) {
    case 1:
      return "TOO WEAK!";
    case 2:
      return "WEAK";
    case 3:
      return "MEDIUM";
    case 4:
      return "STRONG";
    default:
      return "";
  }
};

export const getStrengthColor = (strength: number) => {
  switch (strength) {
    case 1:
      return "bg-red-500";
    case 2:
      return "bg-orange-500";
    case 3:
      return "bg-yellow-500";
    case 4:
      return "bg-[#A4FFAF]";
    default:
      return "";
  }
};

export const generatePassword = (characters: string, length: number) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
};

export const checkPasswordStrength = (password: string) => {
  const strength = {
    hasUppercase: false,
    hasLowercase: false,
    hasNumbers: false,
    hasSymbols: false,
  };
  for (const char of password) {
    if (UppercaseLetters.includes(char)) {
      strength.hasUppercase = true;
    } else if (LowercaseLetters.includes(char)) {
      strength.hasLowercase = true;
    } else if (Numbers.includes(char)) {
      strength.hasNumbers = true;
    } else if (Symbols.includes(char)) {
      strength.hasSymbols = true;
    }
  }
  let score = 0;
  if (strength.hasUppercase) score++;
  if (strength.hasLowercase) score++;
  if (strength.hasNumbers) score++;
  if (strength.hasSymbols) score++;
  return score;
};