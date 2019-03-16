import {IPost} from '@/common/interfaces/IPost';

export interface IUser {
  id: string;
  name: string;
  description: string;
  posts: IPost[];
  friendIds: string[];
}
