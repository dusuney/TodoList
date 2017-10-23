var db = require('../query');

var sql = require('sql');
var tasks = require('../models/tasks');


var query = tasks.select(tasks.star()).from(tasks).toQuery();


module.exports = function (req, res, next) {
    db.any(query)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL puppies'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}