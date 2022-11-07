const getAllLogOrderByIdDescending = async (request, h) => {
  const { prisma } = request.server.app;
  const log = await prisma.log.findMany({
    orderBy: {
      id: 'desc',
    },
  });
  return log;
};

module.exports = {
  getAllLogOrderByIdDescending,
};
