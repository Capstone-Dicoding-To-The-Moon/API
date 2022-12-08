const Hapi = require('@hapi/hapi');
const plugins = require('./plugins/plugins');
const Jwt = require('@hapi/jwt');

BigInt.prototype.toJSON = function () {
  return parseInt(this);
};

const init = async () => {
  const server = Hapi.server({
    port: parseInt(process.env.PORT) || 5000,
    host: process.env.HOST || 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register(Jwt);

  server.auth.strategy('my_jwt', 'jwt', {
    keys: 'secret_shared_many',
    verify: {
      aud: 'family_preparation_aud',
      iss: 'family_preparation_iss',
      sub: 'family_preparation_sub',
      nbf: true,
      exp: true,
      maxAgeSec: 10 * 60 * 60, // 4 hours
      timeSkewSec: 15,
    },
    validate: (artifacts, request, h) => {
      return {
        isValid: true,
        credentials: { userId: artifacts.decoded.payload.user },
      };
    },
  });

  server.auth.default('my_jwt');

  await server.register(plugins);

  await server.start();

  process.on('unhandledRejection', async (err) => {
    await server.app.prisma.$disconnect();
    console.log(err);
    process.exit(1);
  });

  // eslint-disable-next-line no-console
  console.log('Server listening ...');
};

init();
