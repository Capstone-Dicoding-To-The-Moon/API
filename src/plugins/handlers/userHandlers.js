const getUser = async (request, h) => {
  const { prisma } = request.server.app;
  const user = await prisma.user.findMany({});
  return user;
};

const getUserById = async (request, h) => {
  const { prisma } = request.server.app;
  const { id } = request.params;
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return user;
};

const addUser = async (request, h) => {
  const { prisma } = request.server.app;
  const { name, email } = request.payload;
  // Kasih Error Handler Kalau Name atau Email Kosong
  const user = await prisma.user.create({
    data: {
      name,
      email,
      roleId: 2,
    },
  });
  return user;
};

const updateUser = async (request, h) => {
  const { prisma } = request.server.app;
  const { name, email } = request.payload;
  // Kasih Error Handler Kalau Name atau Email Kosong
  const user = await prisma.user.update({
    where: {
      email,
    },
    data: {
      name,
    },
  });
  return user;
};

const deleteUser = async (request, h) => {
  const { prisma } = request.server.app;
  const { name, email } = request.payload;
  // Kasih Error Handler Kalau Name atau Email Kosong
  const user = await prisma.user.delete({
    where: {
      email,
    },
  });
  return user;
};

module.exports = {
  getUser,
  getUserById,
  updateUser,
  deleteUser,
  addUser,
};
