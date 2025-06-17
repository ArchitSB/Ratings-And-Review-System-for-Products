const sequelize = require('./config/db');
const { User, Product, Review } = require('./models');

const seedData = async () => {
  try {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate([
      { name: 'Archit Singh', email: 'archit@example.com' },
      { name: 'Priya Sharma', email: 'priya@example.com' },
      { name: 'Rahul Verma', email: 'rahul@example.com' },
      { name: 'Sneha Patel', email: 'sneha@example.com' }
    ]);

    const products = await Product.bulkCreate([
      {
        name: 'Wireless Mouse',
        description: 'A smooth, lag-free mouse',
        image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Laptop Stand',
        description: 'Ergonomic aluminum stand',
        image_url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Mechanical Keyboard',
        description: 'RGB backlit, tactile switches, and durable build.',
        image_url: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Noise Cancelling Headphones',
        description: 'Immersive sound with active noise cancellation.',
        image_url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Smart Watch',
        description: 'Track your fitness and notifications on the go.',
        image_url: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Portable SSD',
        description: 'Fast, reliable, and compact storage solution.',
        image_url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Bluetooth Speaker',
        description: 'Crystal clear sound in a portable package.',
        image_url: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Webcam',
        description: '1080p HD webcam for video calls and streaming.',
        image_url: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80'
      }
    ]);

    const reviewsData = [
      [
        { rating: 5, review_text: 'Excellent quality!' },
        { rating: 4, review_text: 'Works well, battery lasts long.' },
        { rating: 5, review_text: 'Very responsive and ergonomic.' },
        { rating: 3, review_text: 'Good, but a bit small for my hand.' }
      ],
      [
        { rating: 4, review_text: 'Quite useful and sturdy.' },
        { rating: 5, review_text: 'Perfect for my desk setup.' },
        { rating: 4, review_text: 'Solid build, looks premium.' },
        { rating: 3, review_text: 'Could be more adjustable.' }
      ],
      [
        { rating: 5, review_text: 'Love the clicky keys!' },
        { rating: 5, review_text: 'Great for typing and gaming.' },
        { rating: 4, review_text: 'Lights are awesome.' },
        { rating: 4, review_text: 'A bit loud, but feels great.' }
      ],
      [
        { rating: 4, review_text: 'Great noise cancellation.' },
        { rating: 5, review_text: 'Superb sound quality.' },
        { rating: 4, review_text: 'Comfortable for long use.' },
        { rating: 3, review_text: 'A bit pricey, but worth it.' }
      ],
      [
        { rating: 5, review_text: 'Tracks my steps perfectly.' },
        { rating: 4, review_text: 'Battery lasts for days.' },
        { rating: 5, review_text: 'Very stylish and functional.' },
        { rating: 4, review_text: 'Notifications work well.' }
      ],
      [
        { rating: 5, review_text: 'Super fast file transfers.' },
        { rating: 5, review_text: 'Compact and reliable.' },
        { rating: 4, review_text: 'Works with all my devices.' },
        { rating: 4, review_text: 'Sleek design.' }
      ],
      [
        { rating: 4, review_text: 'Loud and clear sound.' },
        { rating: 5, review_text: 'Battery lasts all day.' },
        { rating: 4, review_text: 'Easy to pair.' },
        { rating: 3, review_text: 'Bass could be better.' }
      ],
      [
        { rating: 4, review_text: 'Sharp video quality.' },
        { rating: 5, review_text: 'Plug and play, very easy.' },
        { rating: 4, review_text: 'Works well for meetings.' },
        { rating: 3, review_text: 'Mic is average.' }
      ]
    ];

    for (let i = 0; i < products.length; i++) {
      for (let j = 0; j < 4; j++) {
        await Review.create({
          rating: reviewsData[i][j].rating,
          review_text: reviewsData[i][j].review_text,
          UserId: users[j].id,
          ProductId: products[i].id,
        });
      }
    }

    console.log('🌱 Database seeded!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedData();