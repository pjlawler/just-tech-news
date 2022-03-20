const path = require('path');
const express = require('express');
const routes = require('./contollers');
const sequelize = require('./config/connection');
const session = require('express-session');
const helpers = require('./utils/helpers');


const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: process.env.SESS_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turn on routes
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now lstening'));
});


//14.1.5