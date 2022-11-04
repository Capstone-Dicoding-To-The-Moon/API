const getKomentarForum = async (request, h) => {
  const { prisma } = request.server.app;
  const komentarForum = await prisma.komentarForum.findMany({});
  return { data: komentarForum };
};

const getKomentarForumById = async (request, h) => {
  const { prisma } = request.server.app;
  const { id } = request.params;
  const komentarForumById = await prisma.komentarForum.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return { data: komentarForumById };
};

const updateKomentarForum = async (request, h) => {
  const { prisma } = request.server.app;
  const id = parseInt(request.payload.id, 10);
  const { content } = request.payload;

  const now = new Date(Date.now());

  const updatedKomentarForum = await prisma.komentarForum.update({
    where: {
      id,
    },
    data: {
      content,
      updatedAt: now,
    },
  });

  return { data: updatedKomentarForum };
};

const deleteKomentarForum = async (request, h) => {
  const { prisma } = request.server.app;
  const id = parseInt(request.payload.id, 10);

  const deletedKomentarForum = await prisma.komentarForum.delete({
    where: {
      id,
    },
  });

  return { data: deletedKomentarForum };
};

const addKomentarForum = async (request, h) => {
  const { prisma } = request.server.app;
  const { content, authorId, forumId } = request.payload;
  const createdKomentarForum = await prisma.komentarForum.create({
    data: {
      content,
      authorId,
      forumId,
    },
  });
  return { data: createdKomentarForum };
};

module.exports = {
  getKomentarForum,
  getKomentarForumById,
  updateKomentarForum,
  deleteKomentarForum,
  addKomentarForum,
};
