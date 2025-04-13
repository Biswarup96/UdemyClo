const { PrismaClient } = require("@prisma/client");
const database = new PrismaClient();

async function main() {
  try {
    const categories = [
      {
        name: "IT & Software",
        subCategories: [
          "Web Development",
          "Data Science",
          "Cybersecurity",
          "Others",
        ],
      },
      {
        name: "Business",
        subCategories: ["E-Commerce", "Marketing", "Finance", "Others"],
      },
      {
        name: "Design",
        subCategories: ["Graphic Design", "3D & Animation", "Interior Design", "Others"],
      },
      {
        name: "Health",
        subCategories: ["Fitness", "Yoga", "Nutrition", "Others"],
      },
    ];

    for (const category of categories) {
      const existingCategory = await database.category.upsert({
        where: { name: category.name },
        update: {},
        create: {
          name: category.name,
        },
      });

      for (const sub of category.subCategories) {
        await database.subCategory.upsert({
          where: {
            name_categoryId: {
              name: sub,
              categoryId: existingCategory.id,
            },
          },
          update: {},
          create: {
            name: sub,
            categoryId: existingCategory.id,
          },
        });
      }
    }

    const levels = ["Beginner", "Intermediate", "Expert", "All levels"];
    for (const level of levels) {
      await database.level.upsert({
        where: { name: level },
        update: {},
        create: { name: level },
      });
    }

    console.log("✅ Seeding completed successfully");
  } catch (error) {
    console.error("❌ Seeding failed", error);
  } finally {
    await database.$disconnect();
  }
}

main();
