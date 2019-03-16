import {IUser} from 'src/common/interfaces/IUser';

export const users: IUser[] = [
  {
    id: 'billy-bob-thornton',
    name: 'Billy Bob Thornton',
    description: `Billy Bob Thornton (born August 4, 1955) is an American actor, filmmaker, singer, songwriter,
    and musician.`,
    posts: [
      {
        id: '0',
        title: 'About me',
        text: 'I am Billy Bob Thornton. I am super cool and awesome!'
      },
      {
        id: '1',
        title: 'Hobbies',
        text: 'I like acting, playing music, drinking alcohol'
      }
    ],
    friendIds: ['neil-alden-armstrong']
  },
  {
    id: 'neil-alden-armstrong',
    name: 'Neil Alden Armstrong',
    description: `Neil Alden Armstrong (August 5, 1930 – August 25, 2012) was an American
    astronaut and aeronautical engineer who was the first person to walk on the Moon`,
    posts: [
      {
        id: '2',
        title: 'Moon adventures',
        text: 'I really liked being on the Moon'
      }
    ],
    friendIds: ['billy-bob-thornton', 'lionel-messi']
  },
  {
    id: 'kim-jong-un',
    name: 'Kim Jong-un',
    description: `Kim Jong-un is a North Korean politician serving as
    Supreme Leader of North Korea since 2011 and also serving as the Chairman of the Workers\' Party of Korea`,
    posts: [
      {
        id: '3',
        title: 'My haircuts',
        text: 'I really like my haircuts. They are super hipster and trendy!'
      },
      {
        id: '4',
        title: 'Bombs!',
        text: 'Who doesn\'t like bombs? Explosions are really cool!'
      }
    ],
    friendIds: []
  },
  {
    id: 'lionel-messi',
    name: 'Lionel Messi',
    description: `Lionel Messi is an Argentine professional footballer who plays as a forward
    and captains both Spanish club Barcelona and the Argentina national team`,
    posts: [
      {
        id: '5',
        title: 'My Goal',
        text: 'I kicked the ball and scored a goal. Right into the net.'
      },
      {
        id: '6',
        title: 'My Pass',
        text: 'I passed the ball to my teammate and he scored the goal.'
      }
    ],
    friendIds: ['neil-alden-armstrong']
  }
];
