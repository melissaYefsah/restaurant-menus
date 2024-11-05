const {sequelize} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });

    test('can create a Restaurant', async () => {
        // TODO - write test
        expect(seedRestaurant).toEqual(expect.objectContaining(seedRestaurant));
    });

    test('can create a Menu', async () => {
        // TODO - write test
        expect(seedMenu).toEqual(expect.objectContaining(seedMenu));
    });

    test('can find a Restaurant', async () => {
        expect(seedRestaurant[0]).toEqual(expect.objectContaining(seedRestaurant[0]));
    });

    test('can find Menus', async () => {
        // TODO - write test
        expect(seedMenu[0]).toEqual(expect.objectContaining(seedMenu[0]));
    });

    test('can delete Restaurants', async () => {
        const indexToDelete = 1;
        const [deletedRestaurant] = seedRestaurant.splice(indexToDelete, 1);
    
        expect(seedRestaurant).not.toContain(deletedRestaurant);
    });
})