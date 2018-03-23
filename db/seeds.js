const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Bathroom = require('../models/bathroom');
const User = require('../models/user');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();
  User.create({
    username: 'TeamPoober',
    firstName: 'Team',
    lastName: 'Poober',
    email: 'hello@poober.com',
    password: 'password',
    passwordConfirmation: 'password'
  })
    .then(user => Bathroom.create([{
      name: 'John Smith',
      address: 'Flat 2, 76a St John\'s Wood High Street, London, NW8 7SH',
      image: 'https://s-media-cache-ak0.pinimg.com/originals/7f/45/d3/7f45d357db0ebb1ca4475a1c20b831ae.jpg',
      description: 'A throne for your throne',
      toilet: true,
      shower: false,
      bidet: true,
      sanitaryProducts: false,
      babyChanging: true,
      location: {
        lat: 51.532923,
        lng: -0.169155
      },
      user: user
    }, {
      name: 'Phil Windsor',
      address: '38 Lawrence Gardens, London, NW7 4JT',
      image: 'https://images.esellerpro.com/2714/I/546/5/81dJWx8VPfL._SL1500_.jpg',
      description: 'Sports + toilets = a dream team',
      toilet: true,
      shower: true,
      bidet: false,
      sanitaryProducts: true,
      babyChanging: false,
      location: {
        lat: 51.625852,
        lng: -0.240041
      },
      user: user
    },
    {
      name: 'Peter Andre',
      address: '19a, Celia Road, Tuffnell Park, N195ET',
      image: 'http://www.bigbathroomshop.co.uk/images/products//full/85698_image.jpg',
      description: 'Get your bum in here',
      toilet: true,
      shower: false,
      bidet: false,
      sanitaryProducts: false,
      babyChanging: false,
      location: {
        lat: 51.5441512,
        lng: -0.0986545
      },
      user: user
    },{
      name: 'Katie Price',
      address: '12 Chester Terrace, London, NW1',
      image: 'https://diy.sndimg.com/content/dam/images/diy/fullset/2010/9/15/0/iStock-13234958_toilet-orchid-orange-tile_s4x3.jpg.rend.hgtvcom.616.462.suffix/1420788426412.jpeg',
      description: 'Not as nice as Peter\'s toilet!',
      toilet: true,
      shower: true,
      bidet: false,
      sanitaryProducts: true,
      babyChanging: false,
      location: {
        lat: 51.5291049,
        lng: -0.1476288
      },
      user: user
    },
    {
      name: 'Amir Sohi',
      address: 'Buckingha Palace',
      image: 'https://i.pinimg.com/originals/f8/d1/45/f8d1458fc7585a1ee2c53d369d83af49.jpg',
      description: 'Fit for a queen',
      toilet: true,
      shower: false,
      bidet: true,
      sanitaryProducts: false,
      babyChanging: false,
      location: {
        lat: 51.501364,
        lng: -0.1440787
      },
      user: user
    },{
      name: 'Nicholas Wilson',
      address: '10 Downing Street, Westminister, London, SW1A 2AA',
      image: 'https://cdn-img1.streeteasy.com/nyc/image/85/76106385.jpg',
      description: 'Too busy to use it',
      toilet: true,
      shower: false,
      bidet: false,
      sanitaryProducts: false,
      babyChanging: false,
      location: {
        lat: 51.5033635,
        lng: -0.1298135
      },
      user: user
    },{
      name: 'Michael Flanagan',
      address: '24 Carey Gardens, Wandsworth, London, SW8 4HL',
      image: 'https://www.baby-n-toddler.com/common/RM/RM-K1507SCS-6.jpg',
      description: 'It\'s a funny place',
      toilet: true,
      shower: true,
      bidet: false,
      sanitaryProducts: false,
      babyChanging: true,
      location: {
        lat: 51.4739708,
        lng: 0.1360731
      },
      user: user
    },{
      name: 'Mike Hayden',
      address: '11-31 Shepherdess Walk, Hoxton, London, N1 7QE',
      image: 'https://images.victorianplumbing.co.uk/images/Cloakroom-Toilet.jpg',
      description: 'Only when you\'ve finished the course',
      toilet: true,
      shower: true,
      bidet: false,
      sanitaryProducts: true,
      babyChanging: false,
      location: {
        lat: 51.5441512,
        lng: -0.0986545
      },
      user: user
    },{
      name: 'George Wilman',
      address: 'Hampshire St, London, NW5 2SS',
      image: 'http://dreamstop.com/wp-content/uploads/2013/07/toilet-dream-meaning.jpg',
      description: 'Not as good as 19a',
      toilet: true,
      shower: false,
      bidet: false,
      sanitaryProducts: false,
      babyChanging: false,
      location: {
        lat: 51.5485531,
        lng: -0.1315187
      },
      user: user
    },{
      name: 'Regine Falange',
      address: '64-54 Cecilia Rd, London, E8',
      image: 'https://www.plumbworld.co.uk/images/ceramica-forli-space-saving-corner-toilet-product-32518-gallery-fA9a-default-H.jpg',
      description: 'Come and join',
      toilet: true,
      shower: true,
      bidet: true,
      sanitaryProducts: true,
      babyChanging: true,
      location: {
        lat: 51.5441512,
        lng: -0.0986545
      },
      user: user
    },

    {
      name: 'David Jackson',
      address: '43 White Post Ln, London, E9',
      image: 'http://www.drench.co.uk/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/p/h/phoebe-wh-toilet-whp001-spek-ts_1__1.jpg',
      description: 'A grand toilet',
      toilet: true,
      shower: true,
      bidet: true,
      sanitaryProducts: true,
      babyChanging: true,
      location: {
        lat: 51.5430206,
        lng: -0.0263584
      },
      user: user
    },{
      name: 'Thandie Newton',
      address: '35-28 King St, London, EC2V',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWVSDalsZit7NLy_fAU27jrnayY0nGwxsmpVpfbiO2c4xYGBHk',
      description: 'Local',
      toilet: true,
      shower: true,
      bidet: false,
      sanitaryProducts: true,
      babyChanging: false,
      location: {
        lat: 51.5146897,
        lng: -0.0927361
      },
      user: user
    },{
      name: 'Simon Pegg',
      address: '53-49 Durward St, London, E1 5BA',
      image: 'https://ichef.bbci.co.uk/onesport/cps/480/cpsprodpb/ABB5/production/_99475934_toilets.jpg',
      description: 'A bit cramped',
      toilet: true,
      shower: true,
      bidet: true,
      sanitaryProducts: true,
      babyChanging: true,
      location: {
        lat: 51.5200904,
        lng: -0.0625773
      },
      user: user
    },{
      name: 'Rod Stewart',
      address: '28 Vicarage Ln, Chigwell IG7 6LS',
      image: 'https://www.completecareshop.co.uk/products/large/100mm_Padded_Raised_Toilet_Seat.jpg',
      description: 'A cushioned place',
      toilet: true,
      shower: false,
      bidet: false,
      sanitaryProducts: false,
      babyChanging: false,
      location: {
        lat: 51.6226127,
        lng: -0.0832401
      },
      user: user
    },{
      name: 'Ken Barlow',
      address: '24 Wilson Grove, London, SE16',
      image: 'https://victoriaplum.imgix.net/pages/347ed0a7-2428-455e-a50d-0c64c674f61b.jpg?w=292&h=248&fit=crop&auto=format',
      description: 'Not like the cobbles, but pleasant',
      toilet: true,
      shower: false,
      bidet: false,
      sanitaryProducts: false,
      babyChanging: false,
      location: {
        lat: 51.4993873,
        lng: -0.065178
      },
      user: user
    }, {
      name: 'Jess Lodge',
      address: '26, Greencourt Gardens, Croydon, CR07LH',
      image: 'https://dush.com.ua/image/cache/catalog/VB/7/tent-dobrirechi-product_files-48506-images-m_villeroyboch-venticello-4611r001-4-800x800.jpg',
      description: 'Squeaky clean',
      toilet: true,
      shower: true,
      bidet: false,
      sanitaryProducts: false,
      babyChanging: true,
      location: {
        lat: 51.3768823,
        lng: -0.0669004
      },
      user: user
    }]))
    .then(bathrooms => console.log(`${bathrooms.length} bathrooms created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
