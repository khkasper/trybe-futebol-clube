export type Indexable = {
  id: number
};

export type User = {
  username: string,
  role: string,
  email: string,
  password: string,
};

export type UserWithoutPassword = Omit<User, 'password'>;
