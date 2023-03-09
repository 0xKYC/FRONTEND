import { validate } from "email-validator";
import { free_email_provider_set } from "./domains";

export const isCompanyEmail = (email: string) => {
  // 1. first, check if it's a valid email
  if (!validate(email)) {
    return false; // it's not a company email address because it's not valid
  }
  // 2. check if it's a company email
  let fields = email.split("@");
  let domain = fields[1];
  return !free_email_provider_set.has(domain); // if the free provider set doesn't have this domain, then most likely it's a company email address
};
