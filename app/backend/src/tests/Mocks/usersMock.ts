export const userPayloadMock = {
  "email": "user@user.com",
  "password": "secret_user"
};


export const adminPayloadMock = {
  "email": "admin@admin.com",
  "password": "secret_admin"
};

export const invalidUserEmailPayloadMock = {
  "email": "useruser.com",
  "password": "secret_user"
};

export const invalidUserPassPayloadMock = {
  "email": "user@user.com",
  "password": "secretuser"
};

export const userPayloadMockWithoutMail = {
  password: 'secret_user',
};

export const userPayloadMockWithoutPass = {
  email: 'user@user.com',
};

export const validUserMock = {
  id: 2,
  username: 'User',
  role: 'user',
  email: 'user@user.com',
  password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO',
};

export const validAdminMock = {
  id: 1,
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
};
