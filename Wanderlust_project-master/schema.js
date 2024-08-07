const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing:Joi.object({
        title : Joi.string().required(),
        description : Joi.string().required(),
        image : Joi.string().allow("",null),
        price : Joi.number().min(0).required(),
        location : Joi.string().required(),
        country : Joi.string().required()
    }).required()
})

module.exports.reviewSchema = Joi.object({
    review:Joi.object({
        rating:Joi.number().min(1).max(5).required(),
        comment:Joi.string().required(),
    }).required()
})





//This is "Joi",a module of npm which is used to validate schemas