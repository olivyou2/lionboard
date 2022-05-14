const posts = [];

export class Post {
  static constructor() {
    this.idCount = 0;
  }

  constructor() {
    this.id = Post.idCount;
    Post.idCount += 1;

    this.content = '';
    this.author = '';
  }
}

/**
 *
 * @param {Post} post
 * @returns {Post} insertedPost
 */
export const createPost = (post) => {
  const ipost = new Post();
  ipost.author = post.author;
  ipost.content = post.content;

  posts.push(ipost);

  return ipost;
};

export const modifyPost = (postId, post) => {
  const postIndex = posts.findIndex((p) => p.id === parseInt(postId, 10));

  const postKeys = Object.keys(post);
  const updated = {};

  postKeys.forEach((postKey) => {
    if (postKey !== 'id') {
      posts[postIndex][postKey] = post[postKey];
      updated[postKey] = post[postKey];
    }
  });

  return updated;
};

export const removePost = (postId) => {
  const postIndex = posts.findIndex((p) => p.id === parseInt(postId, 10));

  posts.splice(postIndex, 1);
};

export const findAllPost = () => posts;
export const findPost = (postId) => posts.find((p) => p.id === postId);
