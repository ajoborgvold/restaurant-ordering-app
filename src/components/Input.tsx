import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { formFieldsArray } from "../data/formFieldsArray"

export default function Input(): JSX.Element {
  const { formData, handleInputChange } = useContext(AppContext)
  console.log(formData)

  return (
    <>
      {formFieldsArray.map((item) => (
        <div key={item.id}>
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
            value={formData[item.id]}
            className="w-full bg-amber-50 text-amber-950 py-2 px-4"
          ></input>
        </div>
      ))}
    </>
  )
}
