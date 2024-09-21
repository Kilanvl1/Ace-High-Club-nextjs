export type LoginRequest = {
  username: string;
  password: string;
};

export type LoginResponse = {
  access: string;
  refresh: string;
};
