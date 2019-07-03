# Veggie Burger Bar

## About

A full stack app that uses Node, Express, Handlebars, MySQl and Bootstrap to allows users to order, create and "virtually" eat veggie tabletest. Please see the app deployed to Heroku [here](https://veggie-burger-bar.herokuapp.com/).

### How it works

Using a ORM, the app connects to MySql using 3 basic CRUD functions:

  1. READS the entries from a MySql database and dynamically adds them to the DOM.
  2. UPDATES the selected options upon user click of either "Order It," or "Eat It" which...
     * hits an Express route `/:id` which changes the item's state to either "testbool," or "ordered."
     * The page re-routes to index where the chosen item is in the section that reflects it's current state(via Handlebars).
  3. CREATES the user has the option of ordering a custom item which they can then virtually eat...
    * hits a post route in Express which then adds a new burger to the MySql database
    * the page re-routes to the index where the user creation is rendered in the "Eat It," section(via Handlebars).

## Visuals/Screen Shots

Though most of the logic is handled on the back end, Bootstrap was leveraged to provide a responsive and user friendly interface.
- All Screen Mock Up
  ![Mock Up](/screenshots/mockup_diff_screens.jpg)

- Full Screen View
  ![Full Screen](/screenshots/full_view.png)

- Mobile Screen View

  ![Mobile Screen](/screenshots/mobile_view.jpg)

## Deployment

To deploy in your system:

  1. Download the repo.
  2. Run `npm install` to install the node dependencies
  3. Go to `connection.js` on Line 11 change the password to your local MySql connection password
  4. Run `db/schema.sql` and `db/seeds.sql` using MySql Workbench or a program of your choice.

## Built With

* [NodeJs](https://nodejs.org/en/) - The programming framework
* [Express](https://expressjs.com/) - The server framework.
* [MySql](https://www.mysql.com/) - Database Management
* [Handlebars](http://handlebarsjs.com/) - Templating System
* [Bootstrap](http://getbootstrap.com) - Responsive Framework System

## Authors

* **Melissa St Moore** - *Initial work*

## Acknowledgments

* Tips on Good Veggie tabletest - [Beyond Meat](http://beyondmeat.com/), [Dr. Praegers](https://drpraegers.com/our-food/california-veggie-tabletest/)
* Inspiration - [Mohawk Bend(Restaurant Site)](http://mohawk.la/)






