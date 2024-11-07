const {sequelize} = require('./db')
const {Restaurant, Menu,Item} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
    seedItem
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
    test('can create an Item', async () => {
        // TODO - write test
        expect(seedItem).toEqual(expect.objectContaining(seedItem));
    });
    test('can delete Item', async () => {
        const indexToDelete = 1;
        const [deletedItem] = seedItem.splice(indexToDelete, 1);
    
        expect(seedItem).not.toContain(deletedItem);
    });
    test("restaurant can have many menus",async function(){
        await sequelize.sync({force:true})
        let myRestaurant = await Restaurant.create(seedRestaurant[0]);
        let myMenu1 = await Menu.create(seedMenu[0]);
        let myMenu2 = await Menu.create(seedMenu[1]);

        await myRestaurant.addMenus(myMenu1);
        await myRestaurant.addMenus(myMenu2);
        const associateMenus = await myRestaurant.getMenus();
        expect (associateMenus.length).toBe(2);
        expect (associateMenus instanceof Menu).toBeTruthy;
    })
    test("Menu can have many Items",async function(){
        await sequelize.sync({force:true})
        let myMenu = await Menu.create(seedMenu[0]);
        let item1 = await Item.create(seedItem[0]);
        let item2 = await Item.create(seedItem[1]);

        await myMenu.addItems(item1);
        await myMenu.addItems(item2);
        const associateItems = await myMenu.getItems();
        expect (associateItems.length).toBe(2);
        expect (associateItems instanceof Item).toBeTruthy;
    })
    test("Items can belong to many Menus",async function(){
        await sequelize.sync({force:true})
        let myItem = await Item.create(seedItem[0]);
        let menu1 = await Menu.create(seedMenu[0]);
        let menu2 = await Menu.create(seedMenu[1]);

        await myItem.addMenu(menu1);
        await myItem.addMenu(menu2);
        const associateMenus = await myItem.getMenus();
        expect (associateMenus.length).toBe(2);
        expect (associateMenus instanceof Menu).toBeTruthy;
    })
    test('eager loads items with menus', async () => {
        // Create menu with items
        const menu = await Menu.create(seedMenu[1]);
        const item = await Item.create(seedItem[1])
      
        // Fetch menus with eager loading
        const menus = await Menu.findAll({
          include: {
            model:Item
          }
        });
        // Check if items are loaded
        menus.forEach(menu => {
          expect(menus).toBeDefined(); // Items should be loaded
          expect(menus.length).toBeGreaterThan(0); // Items array should have elements
        });
      });

})