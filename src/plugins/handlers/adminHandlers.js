const getAllAdmin = async (request, h) => {
  const { prisma } = request.server.app;
  const admin = await prisma.user.findMany({});
  return admin;
};

const getAdminById = async (request, h) => {
  const { prisma } = request.server.app;
  const { id } = request.params;
  const admin = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
      roleId: 1,
    },
  });
  return admin;
};

const addAdmin = async (request, h) => {
  const { prisma } = request.server.app;
  const { name, email, role } = request.payload;
  // Kasih Error Handler Kalau Name atau Email Kosong
  if (role == '1' || role == 'admin') {
    const admin = await prisma.user.create({
      data: {
        name,
        email,
        roleId: 1,
      },
    });
    return admin;
  }
  return h.response({
    status: 401,
    message: 'Unathorized, Invalid Role',
  });
};

const updateAdmin = async (request, h) => {
  const { prisma } = request.server.app;
  const { name, email, role } = request.payload;
  // Kasih Error Handler Kalau Name atau Email Kosong
  if (role == '1' || role == 'admin') {
    const admin = await prisma.user.update({
      where: {
        email,
      },
      data: {
        name,
      },
    });
    return admin;
  }
  return h.response({
    status: 401,
    message: 'Unathorized, Invalid Role',
  });
};

const deleteAdmin = async (request, h) => {
  const { prisma } = request.server.app;
  const { name, email, role } = request.payload;
  // Kasih Error Handler Kalau Name atau Email Kosong
  if (role == '1' || role == 'admin') {
    const admin = await prisma.user.delete({
      where: {
        email,
      },
    });
    return admin;
  }
  return h.response({
    status: 401,
    message: 'Unathorized, Invalid Role',
  });
};

module.exports = {
  getAllAdmin,
  getAdminById,
  updateAdmin,
  deleteAdmin,
  addAdmin,
};
