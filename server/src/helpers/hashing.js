import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPaword = await bcrypt.hash(password, salt);
    return hashPaword;
  } catch (error) {
    console.log("Hashing failed");
  }
};

export const comparePassword = async (password, hashPassword) => {
  try {
    const match = await bcrypt.compare(password, hashPassword);
    return match;
  } catch (error) {
    console.log("error");
  }
};
