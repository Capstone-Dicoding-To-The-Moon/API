const getKategoriForum = async (request, h) => {
  const { prisma } = request.server.app;
  const kategoriForum = await prisma.kategoriForum.findMany({});
  return kategoriForum;
};

const getKategoriForumById = async (request, h) => {
  const { prisma } = request.server.app;
  const { id } = request.params;
  const kategoriForumById = await prisma.kategoriForum.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return kategoriForumById;
};

const addKategoriForum = async (request, h) => {
  const { prisma } = request.server.app;
  const { forumId, kategoriId } = request.payload;
  const createdKategoriForum = await prisma.kategoriForum.create({
    data: {
      forumId,
      kategoriId,
    },
  });
  return createdKategoriForum;
};

module.exports = { getKategoriForum, getKategoriForumById, addKategoriForum };
