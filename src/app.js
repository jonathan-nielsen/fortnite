import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import debug from 'debug';
import express from 'express';
import path from 'path';
import routes from 'express-recursive-routes';
import session from 'express-session';

const log = debug('app:config');
const app = express();
log('Packages loaded.');

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use(express.static('public'));
app.set('trust proxy', 1);
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
log('Packages enabled.');

routes.mountRoutes(app, `./${process.env.NODE_PATH}/routes`);

app.use((req, res) => {
    res.status(404).end();
});

log('Routes added.');

export default app;
