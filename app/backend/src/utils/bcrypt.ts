import * as bcryptjs from 'bcryptjs';

const decrypt = async (password: string, hash: string): Promise<boolean> => {
  const decryptedPass = await bcryptjs.compare(password, hash);
  return decryptedPass;
};

export default decrypt;
