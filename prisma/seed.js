const { PrismaClient } = require('@prisma/client');
const comment_forum = require('./data/dummyCommentForum');
const comment_post = require('./data/dummyCommentPost');
const forums = require('./data/dummyForums');
const kategori = require('./data/dummyKategori');
const kategori_forum = require('./data/dummyKategoriForums');
const kategori_post = require('./data/dummyKategoriPosts');
const logs = require('./data/dummyLogs');
const posts = require('./data/dummyPosts');
const roles = require('./data/dummyRoles');
const users = require('./data/dummyUsers');

const prisma = new PrismaClient();

async function init() {
  // Create Dummy Role
  await prisma.role.createMany({
    data: roles,
  });
  // Create Dummy Users
  await prisma.user.createMany({
    data: users,
  });
  // Create Dummy Kategori
  await prisma.kategori.createMany({
    data: kategori,
  });
  // Create Dummy Posts
  await prisma.post.createMany({
    data: posts,
  });
  // Create Dummy Forums
  await prisma.forum.createMany({
    data: forums,
  });
  // Create Dummy Kategori Post
  await prisma.kategoriPost.createMany({
    data: kategori_post,
  });
  // Create Dummy Kategori Forum
  await prisma.kategoriForum.createMany({
    data: kategori_forum,
  });
  // Create Dummy Komentar Posts
  await prisma.komentarPost.createMany({
    data: comment_post,
  });
  // Create Dummy Komentar Forums
  await prisma.komentarForum.createMany({
    data: comment_forum,
  });
  // Create Dummy Logs
  await prisma.log.createMany({
    data: logs,
  });
}

init()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });
