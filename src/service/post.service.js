import Post from '../../models/post';

/**
 *
 * @param {Post} post
 * @returns {Post} insertedPost
 */
export const createPost = async (post) => {
  const ipost = new Post();
  ipost.author = post.author;
  ipost.content = post.content;

  await ipost.save();

  return ipost;
};

export const modifyPost = async (postId, content) => {
  const updated = await Post.update({
    content,
  }, {
    where: {
      id: postId,
    },
  });

  return updated;
};

export const removePost = async (postId) => {
  await Post.destroy({
    where: {
      id: postId,
    },
  });
};

export const findAllPost = () => Post.findAll();
export const findPost = (postId) => Post.findOne({ where: { id: postId } });
