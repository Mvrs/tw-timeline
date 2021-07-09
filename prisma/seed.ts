import { PrismaClient, Prisma, Tweet } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Tweet[] = [
  {
    id: "1",
    body: "Cool Stuff man",
    createdAt: new Date(),
  },
  {
    id: "2",
    body: "Suns in Game 2",
    createdAt: new Date(),
  },
  {
    id: "3",
    body: "Chris Paul getting the ring this year",
    createdAt: new Date(),
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of userData) {
    const user = await prisma.tweet.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
