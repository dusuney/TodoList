var db = require('../query');

module.exports = function (req, res, next) {
    console.log(req.body);
    db.any("insert into tasks values('" + req.body.name + "','" + req.body.text + "')")
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