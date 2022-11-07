const getKomentarPost = async (request, h) => {
  const { prisma } = request.server.app;
  const komentarPost = await prisma.komentarPost.findMany({});
  return { data: komentarPost };
};

const getKomentarPostById = async (request, h) => {
  const { prisma } = request.server.app;
  const { id } = request.params;
  const komentarPostById = await prisma.komentarPost.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return { data: komentarPostById };
};

const updateKomentarPost = async (request, h) => {
  const { prisma } = request.server.app;
  const id = parseInt(request.payload.id, 10);
  const { content } = request.payload;

  const now = new Date(Date.now());

  const updatedKomentarPost = await prisma.komentarPost.update({
    where: {
      id,
    },
    data: {
      content,
      updatedAt: now,
    },
  });

  return { data: updatedKomentarPost };
};

const deleteKomentarPost = async (request, h) => {
  const { prisma } = request.server.app;
  const id = parseInt(request.payload.id, 10);

  const deletedKomentarPost = await prisma.komentarPost.delete({
    where: {
      id,
    },
  });

  return { data: deletedKomentarPost };
};

const addKomentarPost = async (request, h) => {
  const { prisma } = request.server.app;
  const { content, authorId, postId } = request.payload;
  const createdKomentarPost = await prisma.komentarPost.create({
    data: {
      content,
      authorId,
      postId,
    },
  });
  return { data: createdKomentarPost };
};

module.exports = {
  getKomentarPost,
  getKomentarPostById,
  updateKomentarPost,
  deleteKomentarPost,
  addKomentarPost,
};
