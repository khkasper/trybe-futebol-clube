import { compare } from 'bcryptjs';

const comparePassword = async (password: string, hash: string): Promise<boolean> => {
  const comparedPassword = await compare(password, hash);
  return comparedPassword;
};

export default comparePassword;
