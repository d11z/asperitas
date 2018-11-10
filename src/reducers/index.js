const initialState = {
  posts: [
    {
      id: 0,
      category: 'webdev',
      title: 'webdev',
      url: 'http://google.com/',
      author: 'testuser1',
      score: 9,
      timestamp: '2018-11-05T05:02:38.544Z',
      comments: [
        {
          author: 'testuser2',
          timestamp: '2018-11-05T05:02:38.544Z',
          text: 'this is a comment'
        },
        {
          author: 'testuser2',
          timestamp: '2018-11-05T05:02:38.544Z',
          text: 'this is a comment'
        },
        {
          author: 'testuser2',
          timestamp: '2018-11-05T05:02:38.544Z',
          text: 'this is a comment'
        }
      ]
    },
    {
      id: 1,
      category: 'javascript',
      title: 'javascript',
      url: 'http://google.com/',
      author: 'testuser2',
      score: 7,
      timestamp: '2018-11-05T05:02:38.544Z',
      comments: [
        {
          author: 'testuser2',
          timestamp: '2018-11-05T05:02:38.544Z',
          text: 'this is a comment'
        },
        {
          author: 'testuser2',
          timestamp: '2018-11-05T05:02:38.544Z',
          text: 'this is a comment'
        }
      ]
    },
    {
      id: 2,
      category: 'vim',
      title: 'vim',
      url: 'http://google.com/',
      author: 'testuser3',
      score: 15,
      timestamp: '2018-11-05T05:02:38.544Z',
      comments: []
    }
  ]
};

export const reducer = (state=initialState, action) => {
  return state;
};
