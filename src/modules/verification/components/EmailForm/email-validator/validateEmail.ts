import { validate } from "email-validator";

import { free_email_provider_set } from "./domains";

export const isCompanyEmail = (email: string) => {
  // 1. first, check if it's a valid email
  if (!validate(email)) {
    return false;
  }
  // 2. check if it's a company email
  let fields = email.split("@");
  let domain = fields[1];
  return !free_email_provider_set.has(domain);
};
