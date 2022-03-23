export const userPayloadMock = {
  "email": "user@user.com",
  "password": "secret_user"
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
