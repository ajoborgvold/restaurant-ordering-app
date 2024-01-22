import { FormField } from "../interfaces/interfaces"

const formFieldsArray: FormField[] = [
  {
    id: "name",
    type: "text",
    text: "Enter your full name",
    autoComplete: "name",
    pattern: /^[A-Za-z]+$/,
    errorMessage: "Only alphabetic characters allowed"
  },
  {
    id: "card-number",
    type: "number",
    text: "Enter credit card number",
    autoComplete: "cc-number",
    pattern: /\d{16}/,
    errorMessage: "Please enter a 16 digit card number"
  },
  {
    id: "ccv",
    type: "number",
    text: "Enter credit card CCV",
    autoComplete: "cc-csc",
    pattern: /\d{3}/,
    errorMessage: "Please enter a 3 digit CCV"
  },
]

export { formFieldsArray }
