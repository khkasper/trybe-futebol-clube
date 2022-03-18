import { compare } from 'bcryptjs';

const decrypt = async (password: string, hash: string): Promise<boolean> => {
  const decryptedPass = await compare(password, hash);
  return decryptedPass;
};

export default decrypt;
