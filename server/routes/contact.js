const express = require('express');
const router = express.Router();
const Joi = require('joi');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const emailTemplate = require('../templates/email');

router.use(bodyParser.json());

router.post('/', (req, res) => {
  const schema = Joi.object({
    from: Joi.string().required(),
    username: Joi.string().min(3).max(100).required(),
    email: Joi.string().min(3).email().required(),
    phone: Joi.string().min(3).max(12).required(),
    message: Joi.string().min(10).max(1000).required(),
  });

  const result = schema.validate(req.body);

  if (result.error) {
    console.log('VALIDATION ERROR', result.error);
    return res.status(500).send(result.error);
  }

  const sendgrid = process.env.ZT_SENDGRID;

  if (sendgrid) {
    sgMail.setApiKey(sendgrid);
  } else {
    console.log('SENDGRID TOKEN', sendgrid);
    return res.status(500).send('Bad sendgrid token');
  }
  const { email } = req.body;
  const ourEmail = 'wawrzyniec.gm@gmail.com';

  const msg = {
    to: email,
    cc: ourEmail,
    from: `Zdobywcy Tatr <${ourEmail}>`, // Use the email address or domain you verified above
    subject: `Wiadomość - ${req.body.from}`,
    html: emailTemplate(req.body),
  };

  // ES8
  (async () => {
    try {
      await sgMail.send(msg).then((resp) => res.status(200).send(resp));
    } catch (error) {
      res.status(500).send(error);
    }
  })();
});

module.exports = router;
