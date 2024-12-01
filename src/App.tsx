import React, { useState } from "react";
import Checkbox from "./components/Checkbox";
import { getStrengthLabel, getStrengthColor, generatePassword, UppercaseLetters, LowercaseLetters, Numbers, Symbols } from "./utils";


const App = () => {
  const [uppercaseChecked, setUppercaseChecked] = useState(false);
  const [lowercaseChecked, setLowercaseChecked] = useState(false);
  const [numbersChecked, setNumbersChecked] = useState(false);
  const [symbolsChecked, setSymbolsChecked] = useState(false);
  const [password, setPassword] = useState("");
  const [Length, setLength] = useState(6);

  const handleCheckboxChange =
    (setter: React.Dispatch<React.SetStateAction<boolean>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setter(event.target.checked);
    };

  const handleGenerate = () => {
    let characters = "";
    if (
      !uppercaseChecked &&
      !lowercaseChecked &&
      !numbersChecked &&
      !symbolsChecked
    ) {
      alert("Please select at least one option");
      return;
    }
    if (uppercaseChecked) {
      characters += UppercaseLetters;
    }
    if (lowercaseChecked) {
      characters += LowercaseLetters;
    }
    if (numbersChecked) {
      characters += Numbers;
    }
    if (symbolsChecked) {
      characters += Symbols;
    }
    const newPassword = generatePassword(characters, Length);
    setPassword(newPassword);
    checkPasswordStrength(newPassword);
  };


  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard");
  };
  const checkPasswordStrength = (password: string) => {
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




  return (
    <div className="min-w-[320px] sm:min-w-[540px] flex flex-col items-center justify-center bg-[#1A1A1A] text-[#E6E5EA]">
      <h1 className="text-xl sm:text-2xl font-bold text-[#817D92] text-center mb-4 sm:mb-6">
        Password Generator
      </h1>
      <div className="bg-[#24232C] p-3 sm:p-4 rounded-lg shadow-lg w-full max-w-md">
        <div className="bg-[#24232C] text-xl sm:text-3xl font-bold text-[#E6E5EA] font-mono p-2 mb-3 sm:mb-4 flex">
          <span className="block w-full break-all">{password}</span>
          {password && (
            <button
              className="text-[#24232C] py-1 sm:py-2 px-2 sm:px-4 hover:text-[#A4FFAF] rounded-md hover:bg-[#24232C] ml-2 sm:ml-4"
              onClick={handleCopy}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="24" viewBox="0 0 21 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.909 0.659016L20.341 3.09098C20.763 3.51294 21 4.08523 21 4.68197V17.25C21 18.4926 19.9926 19.5 18.75 19.5H15V21.75C15 22.9926 13.9926 24 12.75 24H2.25C1.00734 24 0 22.9926 0 21.75V6.75C0 5.50734 1.00734 4.5 2.25 4.5H6V2.25C6 1.00734 7.00734 0 8.25 0H16.3181C16.9147 3.12036e-06 17.4871 0.237058 17.909 0.659016ZM2.53126 21.75H12.4687C12.5434 21.75 12.6149 21.7204 12.6677 21.6677C12.7204 21.6149 12.75 21.5434 12.75 21.4687V19.5H8.25C7.00734 19.5 6 18.4926 6 17.25V6.75H2.53126C2.45665 6.75 2.38512 6.77963 2.33238 6.83238C2.27963 6.88512 2.25 6.95665 2.25 7.03126V21.4687C2.25 21.5434 2.27963 21.6149 2.33238 21.6677C2.38512 21.7204 2.45665 21.75 2.53126 21.75ZM18.4687 17.25H8.53126C8.45665 17.25 8.38512 17.2204 8.33238 17.1677C8.27963 17.1149 8.25 17.0434 8.25 16.9687V2.53126C8.25 2.45665 8.27963 2.38512 8.33238 2.33238C8.38512 2.27963 8.45665 2.25 8.53126 2.25H13.5V6.375C13.5 6.99632 14.0036 7.5 14.625 7.5H18.75V16.9687C18.75 17.0434 18.7204 17.1149 18.6677 17.1677C18.6149 17.2204 18.5434 17.25 18.4687 17.25ZM15.75 5.25H18.75V4.7985C18.75 4.76156 18.7427 4.72499 18.7286 4.69086C18.7145 4.65673 18.6937 4.62572 18.6677 4.59961L16.4004 2.33236C16.3476 2.27963 16.2761 2.25 16.2014 2.25H15.75V5.25Z" fill="white"/>
              </svg>
            </button>
          )}
        </div>
        <div className="flex w-full justify-between text-center items-center mb-3 sm:mb-4 mt-3 sm:mt-4">
          <p>Character Length</p>
          <span className="text-xl sm:text-3xl font-bold">{Length}</span>
        </div>
        <input
          type="range"
          min={6}
          max={20}
          className="w-full mb-3 sm:mb-4"
          value={Length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
        <div className="space-y-2">
          <Checkbox
            label="Include Uppercase Letters"
            checked={uppercaseChecked}
            onChange={handleCheckboxChange(setUppercaseChecked)}
          />
          <Checkbox
            label="Include Lowercase Letters"
            checked={lowercaseChecked}
            onChange={handleCheckboxChange(setLowercaseChecked)}
          />
          <Checkbox  label="Include Numbers"  checked={numbersChecked}
            onChange={handleCheckboxChange(setNumbersChecked)}
          />
          
          <Checkbox label="Include Symbols" checked={symbolsChecked} onChange={handleCheckboxChange(setSymbolsChecked)} />


          <div className="flex bg-[#18171F] p-4 sm:p-5 w-full mt-6 sm:mt-8 justify-between items-center">
            <div>
              <h6 className="text-sm sm:text-[18px] text-[#817D92] font-jetbrains-mono font-bold leading-normal [font-feature-settings:'liga'_off,'clig'_off">
                STRENGTH
              </h6>
            </div>
            <div className="flex justify-center items-center gap-2 sm:gap-4">
              {getStrengthLabel(checkPasswordStrength(password))}
              {Array.from({ length: checkPasswordStrength(password) }).map((_, i) => (
                <div
                  key={i}
                  className={`h-7 w-2.5 rounded-lg ${getStrengthColor(
                    checkPasswordStrength(password)
                  )}`}
                  style={{ height: "28px", width: "10px" }}
                ></div>
              ))}
            </div>
          </div>
          <div>
            <button
              className="bg-[#A4FFAF] text-[#24232C] py-2 px-4 w-full hover:text-[#A4FFAF] rounded-md hover:bg-[#24232C] mt-6 sm:mt-8"
              onClick={handleGenerate}
            >
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

