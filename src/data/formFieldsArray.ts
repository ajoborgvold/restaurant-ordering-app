import { FormField } from "../interfaces/interfaces"

const formFieldsArray: FormField[] = [
  {
    id: "name",
    type: "text",
    text: "Enter your full name",
    autoComplete: "full-name",
    pattern: /^[A-Za-z]+$/,
  },
  {
    id: "card-number",
    type: "number",
    text: "Enter credit card number",
    autoComplete: "credit-card-number",
    pattern: /\d{16}/,
  },
  {
    id: "ccv",
    type: "number",
    text: "Enter credit card CCV",
    autoComplete: "credit-card-ccv",
    pattern: /\d{3}/,
  },
]

export { formFieldsArray }
