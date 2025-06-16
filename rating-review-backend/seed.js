const sequelize = require('./db');
const { User, Product, Review } = require('./models');

const seedData = async () => {
  try {
    await sequelize.sync({ force: true }); // ✅ Ensures tables are created fresh

    const [user, created] = await User.findOrCreate({
      where: { email: 'archit@example.com' },
      defaults: {
        name: 'Archit Singh',
      },
    });

    const product1 = await Product.create({ name: 'Wireless Mouse', description: 'A smooth, lag-free mouse' });
    const product2 = await Product.create({ name: 'Laptop Stand', description: 'Ergonomic aluminum stand' });

    await Review.create({
      rating: 5,
      review: 'Excellent quality!',
      UserId: user.id,
      ProductId: product1.id,
    });

    await Review.create({
      rating: 4,
      review: 'Quite useful and sturdy.',
      UserId: user.id,
      ProductId: product2.id,
    });

    console.log('🌱 Database seeded!');
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

seedData();
