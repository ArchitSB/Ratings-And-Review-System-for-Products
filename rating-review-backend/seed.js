const sequelize = require('./config/db');
const { User, Product, Review } = require('./models');

const seedData = async () => {
  try {
    await sequelize.sync({ force: true }); // Drops and recreates tables

    const [user] = await User.findOrCreate({
      where: { email: 'archit@example.com' },
      defaults: { name: 'Archit Singh' },
    });

    const product1 = await Product.create({
      name: 'Wireless Mouse',
      description: 'A smooth, lag-free mouse',
      image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80'
    });
    const product2 = await Product.create({
      name: 'Laptop Stand',
      description: 'Ergonomic aluminum stand',
      image_url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80'
    });

    await Review.create({
      rating: 5,
      review_text: 'Excellent quality!',
      UserId: user.id,
      ProductId: product1.id,
    });

    await Review.create({
      rating: 4,
      review_text: 'Quite useful and sturdy.',
      UserId: user.id,
      ProductId: product2.id,
    });

    console.log('🌱 Database seeded!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedData();