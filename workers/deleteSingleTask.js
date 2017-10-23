var db = require('../query');

var sql = require('sql');
var tasks = require('../models/tasks');


module.exports = function (req, res, next) {
    var id = parseInt(req.params.id);

    var query = tasks.delete().where(tasks.id.equals(id)).toQuery();
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