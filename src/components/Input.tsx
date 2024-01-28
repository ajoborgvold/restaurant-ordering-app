import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { formFieldsArray } from "../data/formFieldsArray"

export default function Input(): JSX.Element {
  const { formData, handleInputChange, isInputFocused, handleEmptyInput, validFormInputs } =
    useContext(AppContext)

  return (
    <>
      {formFieldsArray.map((item) => (
        <div key={item.id} className="relative flex flex-col gap-2 py-5">
          <label htmlFor={item.id} className="">
            {item.label}:
          </label>
          <input
            id={item.id}
            type={item.type}
            placeholder={item.placeholder}
            inputMode="numeric"
            autoComplete={item.autoComplete}
            pattern={item.pattern.source}
            onChange={(e) => handleInputChange(e, item.id)}
            onBlur={(e) => {
              handleEmptyInput(e, item.id)
            }}
            value={formData[item.id]}
            className="w-full bg-amber-50 dark:bg-slate-50 text-amber-950 dark:text-slate-950 tracking-widest py-2 px-4 rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            aria-describedby={`${item.id}-error-message`}
          ></input>
          {
            isInputFocused[item.id] &&
            !validFormInputs[item.id] && (
              <>
                <div className="absolute h-8 top-24 right-0 bottom-0 left-0 flex items-center bg-amber-800 dark:bg-slate-900 text-amber-50 dark:text-slate-50 px-4 rounded shadow-xl shadow-amber-800 dark:shadow-slate-900" id={`${item.id}-error-message`}>
                  <div className="relative">
                    <div className="absolute w-0 h-0 top-[-17px] left-0 border-l-[15px] border-l-transparent border-b-[15px] border-b-amber-800 dark:border-b-slate-900 border-r-[15px] border-r-transparent"></div>
                    <p className="text-xs sm:text-sm">{item.errorMessage}</p>
                  </div>
                </div>
              </>
            )}
        </div>
      ))}
    </>
  )
}
