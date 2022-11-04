const getRole = async (request, h) => {
  const { prisma } = request.server.app;
  const role = await prisma.role.findMany({});
  return role;
};

const getRoleById = async (request, h) => {
  const { prisma } = request.server.app;
  const { id } = request.params;
  const roleById = await prisma.role.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return roleById;
};

const addRole = async (request, h) => {
  const { prisma } = request.server.app;
  const { role } = request.payload;
  const createdRole = await prisma.role.create({
    data: {
      role,
    },
  });
  return createdRole;
};

module.exports = { getRole, getRoleById, addRole };
