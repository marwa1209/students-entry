import { createReducer } from "@ngrx/store";
import { StudentsRecords } from "./students-records";

export const initState:ReadonlyArray<StudentsRecords>=[{
    name: "marwa",
  city: "alex",
  country: "United States",
  subject: "maths",
  passportDeclaration: "yes",
  fitnessDeclaration: "yes" ,
  courseName: "maths01",
  date: "2024-09-30",
  state: "United",
  subjects: "maths",
  street: "wingat",
  email: "marwa@gmail.com",
  phone: "01223875489",
  postalCode: "12354",
}];
export const StudentsReducer=createReducer
(
  initState
)
