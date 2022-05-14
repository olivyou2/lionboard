import createHttpError from 'http-errors';
import errors from '../errors/error';

const posts = [];

export const validatePost = (post) => {
  if (!post.id) {
    throw new createHttpError.BadRequest(errors.POST_MUST_CONTAIN_ID);
  }

  return true;
};

export const createPost = (post) => {
  validatePost(post);

  posts.push(post);
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
