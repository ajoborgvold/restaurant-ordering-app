import { useContext, useState } from "react"
import { AppContext } from "../context/AppContext"
import { formFieldsArray } from "../data/formFieldsArray"

export default function Input(): JSX.Element {
  const { formData, handleInputChange, validFormInputs } =
    useContext(AppContext)
  const [isFocused, setIsFocused] = useState<string>("null")

  return (
    <>
      {formFieldsArray.map((item) => (
        <div key={item.id} className="relative">
          <label htmlFor={item.id} className="sr-only">
            {item.text}
          </label>
          <input
            id={item.id}
            type={item.type}
            placeholder={item.text}
            inputMode="numeric"
            autoComplete={item.autoComplete}
            pattern={item.pattern.source}
            onChange={(e) => handleInputChange(e, item.id)}
            onBlur={() => {
              setIsFocused("")
            }}
            onFocus={() => setIsFocused(item.id)}
            value={formData[item.id]}
            className="w-full bg-amber-50 text-amber-950 tracking-wider py-2 px-4 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            aria-describedby={`${item.id}-error-message`}
          ></input>
          {isFocused !== item.id &&
            formData[item.id] &&
            !validFormInputs[item.id] && (
              <>
                <div className="absolute h-8 -top-8 right-0 bottom-0 left-0 flex items-center bg-amber-800 text-amber-50 px-4 rounded shadow-lg shadow-amber-400" id={`${item.id}-error-message`}>
                  <div className="relative">
                    <p>{item.errorMessage}</p>
                    <div className="absolute w-0 h-0 left-0 border-l-[12px] border-l-transparent border-t-[12px] border-t-amber-800 border-r-[12px] border-r-transparent"></div>
                  </div>
                </div>
              </>
            )}
        </div>
      ))}
    </>
  )
}
