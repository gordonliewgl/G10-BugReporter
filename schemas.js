const Joi = require('joi');
const { number } = require('joi');

module.exports.bugReportSchema = Joi.object({
    bugReport: Joi.object({
        bugID: Joi.string().required(),
        bugDescription: Joi.string().required(),
        bugStatus: Joi.string().required(),
        bugSeverity: Joi.number().min(1).max(5).required(),
        bugDateReported: Joi.string().isoDate().required(),
        bugLastBumpDate: Joi.string().isoDate().required(),
        bugAssignedTo: Joi.string()
    }).required()
});

module.exports.bugReportCommentSchema = Joi.object({
    bugReportComment: Joi.object({
        name: Joi.string().required(),
        role: Joi.string().required(),
        comment: Joi.string().required(),
        commentDate: Joi.string().isoDate().required()
    }).required()
});