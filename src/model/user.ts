//@TODO: this is the sample model fie for the reference

export type GenderType = "male" | "female" | "other";

export interface UserDetailsProps {
  email: string;
  phoneNumber: string;
  gender: GenderType;
  firstName: string;
  lastName?: string;
  _id: string;
}
