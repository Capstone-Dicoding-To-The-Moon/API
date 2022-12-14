const {
  response200Handler,
  response400Handler,
  response404Handler,
  response201Handler,
} = require('../helpers/responseHelper');

const getKategoriForum = async (request, h) => {
  const { prisma } = request.server.app;
  const kategoriForum = await prisma.kategoriForum.findMany({});
  return response200Handler(h, 'get', kategoriForum);
};

const getKategoriForumById = async (request, h) => {
  const { prisma } = request.server.app;
  const id = parseInt(request.params.id, 10);

  if (!id) {
    return response400Handler(h, 'get', 'kategori forum', 'id');
  }

  // const kategoriForumById = await prisma.KategoriForum.findUnique({
  //   where: {
  //     forumId_kategoriId: {
  //       forumId: 1,
  //       kategoriId: 1,
  //     },
  //   },
  // });

  const kategoriForumById = await prisma.kategori.findUnique({
    where: {
      id,
    },
    include: {
      kategori_forum: {
        include: {
          forum: {
            select: {
              id: true,
              title: true,
            },
          },
        },
      },
    },
  });

  if (kategoriForumById) {
    return response200Handler(h, 'get', kategoriForumById);
  }

  return response404Handler(h, 'get', 'kategori forum', 'Id');
};

const addKategoriForum = async (request, h) => {
  const { prisma } = request.server.app;
  const { forumId, kategoriId } = request.payload;

  if (!forumId) {
    return response400Handler(h, 'add', 'kategori forum', 'forum id');
  }

  if (!kategoriId) {
    return response400Handler(h, 'add', 'kategori forum', 'kategori id');
  }

  const createdKategoriForum = await prisma.kategoriForum.create({
    data: {
      forumId,
      kategoriId,
    },
  });

  return response201Handler(h, 'kategori forum', createdKategoriForum);
};

module.exports = { getKategoriForum, getKategoriForumById, addKategoriForum };
