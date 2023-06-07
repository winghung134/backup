export interface Memo {
  id: number;
  content: string;
  image?: string;
  is_active: boolean;
}

export interface User {
  id: number;
  username: string;
  password: string;
}
