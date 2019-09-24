const api = require('../controllers/controllers');

module.exports = (app) => {
    app.get("/", api.index)
    app.get('/:name', api.show) 
    app.get('/remove/:name/',api.delete) 
    app.get('/new/:name', api.add) 


};