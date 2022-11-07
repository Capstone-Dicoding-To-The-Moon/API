const getKategoriPost = async (request, h) => {
  const { prisma } = request.server.app;
  const kategoriPost = await prisma.kategoriPost.findMany({});
  return kategoriPost;
};

const getKategoriPostById = async (request, h) => {
  const { prisma } = request.server.app;
  const { id } = request.params;
  const kategoriPostById = await prisma.kategoriPost.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return kategoriPostById;
};

const addKategoriPost = async (request, h) => {
  const { prisma } = request.server.app;
  const { postId, kategoriId } = request.payload;
  const createdKategoriPost = await prisma.kategoriPost.create({
    data: {
      postId,
      kategoriId,
    },
  });
  return createdKategoriPost;
};

module.exports = { getKategoriPost, getKategoriPostById, addKategoriPost };
