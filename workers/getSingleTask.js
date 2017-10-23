var db = require('../query');

var sql = require('sql');
var tasks = require('../models/tasks');


module.exports = function getSinglePuppy(req, res, next) {
    var id = parseInt(req.params.id);
    var query = tasks.select(tasks.star()).from(tasks).where(tasks.id.equals(id)).toQuery();

    db.one(query)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ONE puppy'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}