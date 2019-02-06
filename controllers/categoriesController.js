const db = require('../models');

module.exports = {

    getCategories: (req, res) => {
        db.User
            .findById(req.params.id, 'categories')
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(402).json(err))
    },
    
    create: (req, res) => {
        db.User
            .findOneAndUpdate(req.params.id, { "$push": { "categories": req.body.category } })
            .then(dbModel => {
                const categories = dbModel.categories.concat([req.body.category]);
                res.json(categories)
            })
            .catch(err => res.status(402).json(err));
    },
    update: (req, res) => {
        db.User
            .findByIdAndUpdate(req.params.id, req.body)
            .then(data => res.json(data))
            .catch(err => res.status(402).json(err));

    },
    remove: (req, res) => {
        db.User
            .findByIdAndUpdate(req.params.id, {
                "$pull": { "categories": req.body.category }
            })
            .then(dbModel => {
                console.log(dbModel);
                const categories = dbModel.categories.filter(category => category === req.body.category ? null : category);
                res.json(categories)
            })
            .catch(err => res.status(402).json(err));
    }
}