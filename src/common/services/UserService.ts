import {IUser} from '@/common/interfaces/IUser';
import {users} from '@/common/mocks/users';
import {IPost} from '@/common/interfaces/IPost';

export class UserService {
  static getUserList(): Promise<IUser[]> {
    return Promise.resolve(users);
  }

  static getUserById(userId: string): Promise<IUser | null> {
    const filteredUser = users.find((user: IUser) => user.id === userId) || null;
    return Promise.resolve(filteredUser);
  }

  static getUserPosts(userId: string): Promise<IPost[]> {
    return UserService.getUserById(userId)
      .then(user => user ? user.posts : []);
  }

  static getUserPostById(userId: string, postId: string): Promise<IPost | null> {
    return UserService.getUserPosts(userId)
      .then(posts => posts.find((post: IPost) => post.id === postId) || null);
  }

  static getUserFriends(userId: string): Promise<IUser[]> {
    return UserService.getUserById(userId)
      .then(user => user ? user.friendIds : [])
      .then(friendIds => Promise.all(
        friendIds.map(friendId => this.getUserById(friendId))
      ))
      .then(friends => friends.filter(friend => friend !== null) as IUser[]);
  }
}
