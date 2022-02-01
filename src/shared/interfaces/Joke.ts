export interface Joke {
  _id?: string;
  message: string;
  author: string;
  status?: boolean;
  created_at?: Date;
}
