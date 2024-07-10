const fhir = require('fhir').Fhir;
const fhirValidator = new fhir();

const validatePatient = (patientData) => {
    const validationResult = fhirValidator.validate(patientData, {resourceType: "Patient"});
    console.log("fhirValidator", validationResult)
    return {
        valid: validationResult.valid,
        errors: !validationResult.valid ? validationResult.messages : null
    };
};

module.exports = { validatePatient };
