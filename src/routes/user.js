import debug from 'debug';
import express from 'express';
import rp from 'request-promise';

const log = debug('api:login');
const router = express.Router();

router.get('/:username', user);

function user(req, res) {
    const options = {
        uri: 'https://api.fortnitetracker.com/v1/profile/pc/' + req.params.username,
        headers: {
            'TRN-Api-Key': '322ca2b3-fa09-44a5-8ade-2c529e1693cd'
        },
        json: true
    };

    rp(options)
        .then(response => {
            res.send(response);
        })
        .catch(err => {
            res.status(500).send(err);
        });
}

module.exports = router;
