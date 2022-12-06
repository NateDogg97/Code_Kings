const db = require('./connection');
const { User, Project } = require('../models');

db.once('open', async () => {

    await Project.deleteMany();

    const projects = await Project.insertMany([
      {
        name: 'Potion Brew',
        description:
          'An application that test potential potions before actually brewing.',
        open: true,
        price: 100
      },
      {
        name: 'Broom Finder',
        description:
          'An application that suggests your perfect broom based on answers from a quiz',
        open: false,
        price: 50
      },
      {
        name: 'Love Potion',
        description:
          'An dating app for wizards and witches.',
        open: true,
        price: 150
      }
    ]);
    console.log('projects seeded');

    await User.deleteMany();

    await User.create({
      firstName: 'Harry',
      lastName: 'Potter',
      email: 'harry@test.com',
      password: 'harrypass1',
      createdProjects: [projects[0]._id]
    });
  
    await User.create({
        firstName: 'Ron',
        lastName: 'Weasley',
        email: 'ron@test.com',
        password: 'ronpass2',
        createdProjects: [projects[1]._id]
      });

      await User.create({
        firstName: 'Hermoine',
        lastName: 'Granger',
        email: 'hermoine@test.com',
        password: 'hermoinepass3',
        createdProjects: [projects[2]._id],
        developingProjects: [projects[1]._id]
      });
  
    console.log('users seeded');

    process.exit();
});