import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [isNewNumber, setIsNewNumber] = useState(true);

  const handleNumberClick = (num) => {
    if (isNewNumber) {
      setDisplay(num);
      setIsNewNumber(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const handleDecimalClick = () => {
    if (isNewNumber) {
      setDisplay("0.");
      setIsNewNumber(false);
    } else if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const handleOperationClick = (op) => {
    const currentValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(currentValue);
    } else if (operation && !isNewNumber) {
      const result = calculateResult(previousValue, currentValue, operation);
      setDisplay(String(result));
      setPreviousValue(result);
    }

    setOperation(op);
    setIsNewNumber(true);
  };

  const calculateResult = (prev, current, op) => {
    switch (op) {
      case "+":
        return prev + current;
      case "-":
        return prev - current;
      case "×":
        return prev * current;
      case "÷":
        return current !== 0 ? prev / current : 0;
      default:
        return current;
    }
  };

  const handleEqualsClick = () => {
    if (operation && previousValue !== null) {
      const currentValue = parseFloat(display);
      const result = calculateResult(previousValue, currentValue, operation);
      setDisplay(String(result));
      setPreviousValue(null);
      setOperation(null);
      setIsNewNumber(true);
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setIsNewNumber(true);
  };

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay("0");
      setIsNewNumber(true);
    }
  };

  const handlePercentage = () => {
    const value = parseFloat(display);
    setDisplay(String(value / 100));
  };

  const handleToggleSign = () => {
    const value = parseFloat(display);
    setDisplay(String(value * -1));
  };

  const buttons = [
    { label: "Del", action: handleClear, className: "bg-red-500 hover:bg-red-600 text-white" },
    { label: "±", action: handleToggleSign, className: "bg-slate-300 hover:bg-slate-400" },
    { label: "%", action: handlePercentage, className: "bg-slate-300 hover:bg-slate-400" },
    { label: "÷", action: () => handleOperationClick("÷"), className: "bg-[#fcae42] hover:bg-orange-400 text-white" },
    { label: "7", action: () => handleNumberClick("7"), className: "bg-white hover:bg-slate-50" },
    { label: "8", action: () => handleNumberClick("8"), className: "bg-white hover:bg-slate-50" },
    { label: "9", action: () => handleNumberClick("9"), className: "bg-white hover:bg-slate-50" },
    { label: "×", action: () => handleOperationClick("×"), className: "bg-[#fcae42] hover:bg-orange-400 text-white" },
    { label: "4", action: () => handleNumberClick("4"), className: "bg-white hover:bg-slate-50" },
    { label: "5", action: () => handleNumberClick("5"), className: "bg-white hover:bg-slate-50" },
    { label: "6", action: () => handleNumberClick("6"), className: "bg-white hover:bg-slate-50" },
    { label: "-", action: () => handleOperationClick("-"), className: "bg-[#fcae42] hover:bg-orange-400 text-white" },
    { label: "1", action: () => handleNumberClick("1"), className: "bg-white hover:bg-slate-50" },
    { label: "2", action: () => handleNumberClick("2"), className: "bg-white hover:bg-slate-50" },
    { label: "3", action: () => handleNumberClick("3"), className: "bg-white hover:bg-slate-50" },
    { label: "+", action: () => handleOperationClick("+"), className: "bg-[#fcae42] hover:bg-orange-400 text-white" },
    { label: "0", action: () => handleNumberClick("0"), className: "bg-white hover:bg-slate-50 col-span-2" },
    { label: ".", action: handleDecimalClick, className: "bg-white hover:bg-slate-50" },
    { label: "=", action: handleEqualsClick, className: "bg-blue-500 hover:bg-blue-600 text-white" },
  ];

  return (
    <div className="bg-[var(--bg-secondary)] p-6 md:w-1/2 ">
      {/* Display */}
      <div className="bg-[var(--bg-main)] rounded-2xl p-6 mb-4 h-fit flex flex-col justify-end items-end">
        <div className="text-slate-400 text-md h-6 mb-2">
          {operation && previousValue !== null ? `${previousValue} ${operation}` : ""}
        </div>
        <div className="text-white text-5xl break-all text-right leading-tight">
          {display}
        </div>
      </div>

      {/* Buttons Grid */}
      <div className="grid grid-cols-4 gap-3 ">
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={button.action}
            className={`
              ${button.className}
              rounded-xl h-16 shadow-lg
              transition-all duration-150
              cursor-pointer
              text-xl
              hover:scale-105
              active:scale-95
              ${button.label === "0" ? "col-span-2" : ""}
            `}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
}
