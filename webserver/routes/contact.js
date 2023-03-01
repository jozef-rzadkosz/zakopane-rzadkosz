const express = require('express');
const router = express.Router();
const Joi = require('joi');
const bodyParser = require('body-parser');
const emailTemplate = require('../templates/email');
const Mailjet = require('node-mailjet');

router.use(bodyParser.json());

router.post('/', async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    surname: Joi.string().min(3).max(100).required(),
    email: Joi.string().min(3).email().required(),
    phone: Joi.string().min(3).max(12).required(),
    message: Joi.string().min(10).max(1000).required(),
  });

  const result = schema.validate(req.body);

  if (result.error) {
    console.log('VALIDATION ERROR', result.error);
    return res.status(500).send(result.error);
  }

  const mailjet = new Mailjet({
    apiKey: process.env.RZADKOSZ_MAILJET_API,
    apiSecret: process.env.RZADKOSZ_MAILJET_SECRET,
  });

  const request = mailjet.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: 'info@zakopane-rzadkosz.pl',
          Name: 'Zakopane-Rzadkosz.pl',
        },
        Cc: [
          {
            Email: 'info@zakopane-rzadkosz.pl',
          },
        ],
        To: [
          {
            Email: req.body.email,
            Name: `${req.body.name} ${req.body.surname}`,
          },
        ],
        Subject: 'Wiadomość ze strony',
        HTMLPart: emailTemplate(req.body),
      },
    ],
  });

  try {
    await request;
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
