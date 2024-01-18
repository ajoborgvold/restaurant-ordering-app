import { FormField } from "../interfaces/interfaces";

export default function Input({ id, type, text, autoComplete, pattern}: FormField): JSX.Element {
  return (
    <>
      <label htmlFor={id} className="sr-only">
        {text}
      </label>
      <input
        id={id}
        type={type}
        placeholder={text}
        autoComplete={autoComplete}
        pattern={pattern.source}
        required
        className="bg-amber-50 text-amber-950 py-2 px-4"
      ></input>
    </>
  )
}