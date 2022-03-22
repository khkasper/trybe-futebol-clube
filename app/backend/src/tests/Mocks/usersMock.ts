export const validAdmin = {
  id: 1,
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: 'secret_admin',
};

export const validAdminBcryptPass = {
  id: 1,
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
};

export const invalidAdmin = {
  id: 1,
  username: 'Admin',
  role: 'undefined',
  email: 'admin.com',
  password: 'senha_invalida',
};

export const validUser = {
  id: 2,
  username: 'User',
  role: 'user',
  email: 'user@user.com',
  password: 'secret_user',
};

export const validUserBcryptPass = {
  id: 2,
  username: 'User',
  role: 'user',
  email: 'user@user.com',
  password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO',
};

export const  invalidUser = {
  id: 2,
  username: 'User',
  role: 'undefined',
  email: 'user.com',
  password: 'senha_invalida',
};
