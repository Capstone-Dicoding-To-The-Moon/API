const getAllPost = async (request, h) => {
  const { prisma } = request.server.app;
  const post = await prisma.post.findMany({
    include: {
      user: {
        select: {
          name: true,
        },
      },
    },
  });

  console.dir(post, { depth: null });
  return { data: post };
};

const getPostWithCommentById = async (request, h) => {
  const { prisma } = request.server.app;
  const id = parseInt(request.params.id, 10);
  const postCommentById = await prisma.post.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      user: {
        select: {
          name: true,
        },
      },
    },
  });

  const komentar_post = await prisma.komentarPost.findMany({
    where: {
      postId: id,
    },
  });

  postCommentById.komentar = komentar_post;

  return { data: postCommentById };
};

const getPostWithPopularCommentById = async (request, h) => {
  const { prisma } = request.server.app;
  const { id } = request.params;

  const postWithPopularComment = await prisma.$queryRaw`
    select p.id, p.title, p.content as content_post, (thumbs_up - thumbs_down) as vote, k.content, k.vote_komen as vote_komen
    from post p
    left join (
        select kp.content, kp.postId, (kp.thumbs_up - kp.thumbs_down) as vote_komen
        from komentar_post kp
    ) as k
    on p.id = k.postId
    where p.id = ${parseInt(id)}
    ORDER BY
      vote  DESC,
      vote_komen DESC
  `;

  console.dir(postWithPopularComment, { depth: null });

  return h.response({ data: { postWithPopularComment } });
};

const getAllPostWithOrderDate = async (request, h) => {
  const { prisma } = request.server.app;
  const postWithOrderDate = await prisma.post.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      user: {
        select: {
          name: true,
        },
      },
    },
  });

  // helper(postWithOrderDate);

  console.dir(postWithOrderDate, { depth: null });
  return { data: postWithOrderDate };
};

const getPostByCategories = async (request, h) => {
  const { prisma } = request.server.app;
  const id = parseInt(request.params.id, 10);
  const postByCategories = await prisma.post.findMany({
    where: {
      kategori_post: {
        some: {
          kategoriId: id,
        },
      },
    },
    include: {
      user: {
        select: {
          name: true,
        },
      },
    },
  });

  // helper(postByCategories);

  console.dir(postByCategories, { depth: null });

  return { data: postByCategories };
};

const updatePost = async (request, h) => {
  const { prisma } = request.server.app;
  const { id, title, content, authorId } = request.payload;

  const { authorId: authorPId } = await prisma.post.findUnique({
    where: {
      id: parseInt(id),
    },
    select: {
      authorId: true,
    },
  });

  if (authorPId === authorId) {
    const updatedPost = [
      await prisma.post.update({
        where: {
          id: parseInt(id),
        },
        data: {
          title,
          content,
        },
      }),
    ];

    // helper(updatedPost);

    return { data: updatedPost[0] };
  }
  return 0;
};

const deletePostById = async (request, h) => {
  const { prisma } = request.server.app;
  const id = parseInt(request.payload.id, 10);

  const deletedPost = await prisma.post.delete({
    where: {
      id,
    },
  });

  return { data: deletedPost };
};

const addPost = async (request, h) => {
  const { prisma } = request.server.app;
  const { title, content, authorId } = request.payload;
  // Tambahin Error Handler Kalo Empty
  const createdPost = await prisma.post.create({
    data: {
      title,
      content,
      authorId,
    },
  });
  return { data: createdPost };
};

module.exports = {
  getAllPost,
  getPostWithCommentById,
  getPostWithPopularCommentById,
  getAllPostWithOrderDate,
  getPostByCategories,
  updatePost,
  deletePostById,
  addPost,
};
