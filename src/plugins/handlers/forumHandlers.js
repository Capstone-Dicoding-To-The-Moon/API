const helper = (data) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].user) {
      data[i].author = data[i].user.name;
      delete data[i].user;
    }
    data[i].vote = data[i].thumbs_up - data[i].thumbs_down;

    delete data[i].thumbs_up;
    delete data[i].thumbs_down;
  }
};

const getAllForum = async (request, h) => {
  const { prisma } = request.server.app;
  const forum = await prisma.forum.findMany({
    include: {
      user: {
        select: {
          name: true,
        },
      },
    },
  });

  helper(forum);

  // console.dir(forum, { depth: null });
  return { data: forum };
};

const getForumById = async (request, h) => {
  const { prisma } = request.server.app;
  const { id } = request.params;
  const forumById = [
    await prisma.forum.findUnique({
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
    }),
  ];

  helper(forumById);

  console.dir(forumById, { depth: null });

  return { data: forumById[0] };
};

const getAllForumWithMuchUpVotes = async (request, h) => {
  const { prisma } = request.server.app;
  const forumWithMuchUpVotes = await prisma.$queryRaw`
    select f.id, title, (thumbs_up - thumbs_down) as vote, u.name as author
    from forum f
    left join user u
    on f.authorId = u.id
    order by vote desc
  `;

  console.dir(forumWithMuchUpVotes, { depth: null });
  return { data: forumWithMuchUpVotes };
};

const getAllForumWithOrderDate = async (request, h) => {
  const { prisma } = request.server.app;
  const forumWithOrderDate = await prisma.forum.findMany({
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

  helper(forumWithOrderDate);

  console.dir(forumWithOrderDate, { depth: null });
  return { data: forumWithOrderDate };
};

const getForumByCategories = async (request, h) => {
  const { prisma } = request.server.app;
  const id = parseInt(request.params.id, 10);
  const forumByCategories = await prisma.forum.findMany({
    where: {
      kategori_forum: {
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
      kategori_forum: true,
    },
  });

  helper(forumByCategories);

  console.dir(forumByCategories, { depth: null });

  return { data: forumByCategories };
};

const getForumWithDiscussionById = async (request, h) => {
  const { prisma } = request.server.app;
  const id = parseInt(request.params.id, 10);

  const forumWithKomentar = [
    await prisma.forum.findUnique({
      where: {
        id,
      },
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    }),
  ];

  const komentar = await prisma.komentarForum.findMany({
    where: {
      forumId: id,
    },
    orderBy: [
      {
        thumbs_up: 'desc',
      },
      {
        thumbs_down: 'asc',
      },
    ],
    include: {
      user: {
        select: {
          name: true,
        },
      },
    },
  });

  // console.dir(forum, { depth: null });
  helper(forumWithKomentar);
  helper(komentar);

  forumWithKomentar[0].komentar = komentar;

  return { data: forumWithKomentar };
};

const updateForum = async (request, h) => {
  const { prisma } = request.server.app;
  const { id, title, authorId } = request.payload;

  const { authorId: authorFId } = await prisma.forum.findUnique({
    where: {
      id: parseInt(id),
    },
    select: {
      authorId: true,
    },
  });

  if (authorFId === authorId) {
    const updatedForum = [
      await prisma.forum.update({
        where: {
          id: parseInt(id),
        },
        data: {
          title,
        },
      }),
    ];

    helper(updatedForum);

    return { data: updatedForum[0] };
  }
  return 0;
};

const updateUpVote = async (request, h) => {
  const { prisma } = request.server.app;
  const id = parseInt(request.payload.id, 10);

  let { thumbs_up } = await prisma.forum.findUnique({
    where: {
      id,
    },
  });

  const forum = await prisma.forum.update({
    where: {
      id,
    },
    data: {
      thumbs_up: thumbs_up + 1,
    },
  });

  return { data: forum };
};

const updateDownVote = async (request, h) => {
  const { prisma } = request.server.app;
  const id = parseInt(request.payload.id, 10);

  let { thumbs_down } = await prisma.forum.findUnique({
    where: {
      id,
    },
  });

  const forum = await prisma.forum.update({
    where: {
      id,
    },
    data: {
      thumbs_down: thumbs_down + 1,
    },
  });

  return { data: forum };
};

const deleteForumById = async (request, h) => {
  const { prisma } = request.server.app;
  const id = parseInt(request.payload.id, 10);

  const deletedForum = await prisma.forum.delete({
    where: {
      id,
    },
  });

  return { data: deletedForum };
};

const addForum = async (request, h) => {
  const { prisma } = request.server.app;
  const { title, authorId } = request.payload;
  // Tambahin Error Handler Kalo Empty
  const createdForum = await prisma.forum.create({
    data: {
      title,
      authorId,
    },
  });
  return { data: createdForum };
};

module.exports = {
  getAllForum,
  getForumById,
  getAllForumWithMuchUpVotes,
  getAllForumWithOrderDate,
  getForumByCategories,
  getForumWithDiscussionById,
  updateForum,
  updateUpVote,
  updateDownVote,
  deleteForumById,
  addForum,
};
