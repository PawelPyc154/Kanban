export interface MessageTypes {
  _id: string;
  user: {
    _id: string;
    name: string;
  };
  message: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  chat: MessageTypes[];
  createdAt: Date;
  __v: number;
}

export interface Auth {
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null | { email?: string; password?: string; name?: string };
  user: null | User;
}
