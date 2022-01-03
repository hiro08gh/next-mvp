import { prisma } from "libs/prisma";

export const getAllPost = async () => {
  const result = await prisma.post.findMany({
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });
  return result;
};
