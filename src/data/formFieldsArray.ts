import { FormField } from "../interfaces/interfaces"

const formFieldsArray: FormField[] = [
  {
    id: "name",
    type: "text",
    label: "Enter your full name",
    placeholder: "Jane Doe",
    autoComplete: "name",
    pattern: /^\s*[A-Za-z.]+\s*(?: [A-Za-z.]+\s*)*$/,
    errorMessage: "Only alphabetic characters allowed",
  },
  {
    id: "card-number",
    type: "number",
    label: "Enter credit card number",
    placeholder: "1234123412341234",
    autoComplete: "cc-number",
    pattern: /\d{16}/,
    errorMessage: "Enter a 16 digit card number",
  },
  {
    id: "ccv",
    type: "number",
    label: "Enter credit card CCV",
    placeholder: "123",
    autoComplete: "cc-csc",
    pattern: /\d{3}/,
    errorMessage: "Enter a 3 digit CCV",
  },
]

export { formFieldsArray }
