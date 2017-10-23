var db = require('../query');

var sql = require('sql');
var tasks = require('../models/tasks');


module.exports = function (req, res, next) {
    var task = req.body;
    var query = tasks.update(task).where(tasks.id.equals(task.id)).toQuery();

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
            console.log(err);
            return next(err);
        });
}