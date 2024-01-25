const service = require('../services/apiv1contactsService.js');

module.exports.getContact = function getContact(req, res) {
    service.getContact(req, res);
}

module.exports.addContact = function addContact(req, res) {
    service.addContact(req, res);
}

