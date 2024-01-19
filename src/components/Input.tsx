import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { formFieldsArray } from "../data/formFieldsArray"

export default function Input(): JSX.Element {
  const { formData, handleInputChange, validateUserInput } = useContext(AppContext)

  return (
    <>
      {formFieldsArray.map((item) => (
        <div key={item.id} className="relative">
          <label htmlFor={item.id} className="sr-only">
            {item.text}
          </label>
          <input
            id={item.id}
            type="text"
            placeholder={item.text}
            autoComplete={item.autoComplete}
            pattern={item.pattern.source}
            onChange={(e) => handleInputChange(e, item.id)}
            onBlur={() => validateUserInput(item.id)}
            value={formData[item.id]}
            className="w-full bg-amber-50 text-amber-950 py-2 px-4"
          ></input>
          {/* {errorMessage &&
            <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-amber-800 text-amber-50 px-4 rounded">
              <p>Invalid input</p>
            </div>
          } */}
        </div>
      ))}
    </>
  )
}
