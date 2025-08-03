export const isLongerThan8Characters = (password: string) => {
  return password.length >= 8;
};

export const hasNumber = (password: string) => {
  return /\d/.test(password);
};
