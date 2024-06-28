export interface SignUpForm {
  email: string;
  username: string;
  password: string;
}

export interface SignInForm {
  emailOrUsername: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  username: string;
  avatar: string;
}

export interface UserDB extends User {
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthResponse {
  accessToken: string;
  user: UserDB;
}
