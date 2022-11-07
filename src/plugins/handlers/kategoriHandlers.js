const getAllKategori = async (request, h) => {
  const { prisma } = request.server.app;
  const kategori = await prisma.kategori.findMany({});
  return { data: kategori };
};

const getKategoriById = async (request, h) => {
  const { prisma } = request.server.app;
  const id = parseInt(request.params.id, 10);
  const kategoriById = await prisma.kategori.findUnique({
    where: {
      id,
    },
  });
  return { data: kategoriById };
};

const updateKategoriById = async (request, h) => {
  const { prisma } = request.server.app;
  const id = parseInt(request.payload.id, 10);
  const { name, title } = request.payload;

  const now = new Date(Date.now());

  if (name && title) {
    const updatedKategori = await prisma.kategori.update({
      where: {
        id,
      },
      data: {
        title,
        updatedAt: now,
        updatedBy: name,
      },
    });

    console.dir(updatedKategori, { depth: null });
    return { data: updatedKategori };
  }

  return 0;
};

const deleteKategoriById = async (request, h) => {
  const { prisma } = request.server.app;
  const id = parseInt(request.payload.id, 10);

  const deletedKategori = await prisma.kategori.delete({
    where: {
      id,
    },
  });

  return { data: deletedKategori };
};

const addKategori = async (request, h) => {
  const { prisma } = request.server.app;
  const { title, authorId, updatedBy } = request.payload;
  const createdKategori = await prisma.kategori.create({
    data: {
      title,
      authorId,
      updatedBy,
    },
  });
  return { data: createdKategori };
};

module.exports = {
  getAllKategori,
  getKategoriById,
  updateKategoriById,
  deleteKategoriById,
  addKategori,
};
