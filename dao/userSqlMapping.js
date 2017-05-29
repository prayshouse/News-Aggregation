/* CRUD SQL 语句 */
var user = {
    insert: 'INSERT INTO user(id, name, age) VALUES(0, ?, ?)',
    update: 'UPDATE user SET name=?, age=?, where id=?',
    delete: 'DELETE FROM user WHERE id=?',
    queryById: 'SELECT * FROM user WHERE id=?',
    queryAll: 'SELECT * FROM user'
};

module.exports = user;