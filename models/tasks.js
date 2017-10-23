var sql = require('sql');

module.exports = sql.define({
    name: 'tasks',
    columns: ['id', 'name', 'text']
});

