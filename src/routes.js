const express = require('express');
const router = express.Router();
const { Patient } = require('./models');
const { validatePatient } = require('./fhirValidator');

// POST - Add a new patient
router.post('/patients', async (req, res) => {
    req ? console.log(req.body) : null;
    try {
        const validationResult = validatePatient(req.body);
        console.log("POST /patients", validationResult)
        if (!validationResult.valid) {
            return res.status(401).send({ errors: validationResult.errors });
        }
        const newPatient = await Patient.create(req.body);
        res.status(201).send(newPatient);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Routes for GET, PATCH, DELETE (similar to before)

module.exports = router;
