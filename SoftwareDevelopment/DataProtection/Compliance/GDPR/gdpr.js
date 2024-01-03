```javascript
// gdpr.js

// This file is for demonstrating GDPR compliance in software development.

// 1. Consent
function consent() {
    console.log("Under GDPR, consent must be freely given, specific, informed and unambiguous. It involves a clear affirmative action.");
}

// 2. Right to Access
function rightToAccess() {
    console.log("GDPR gives individuals the right to access their personal data and to know how this data is being processed.");
}

// 3. Data Portability
function dataPortability() {
    console.log("The right to data portability allows individuals to obtain and reuse their personal data for their own purposes across different services.");
}

// 4. Right to be Forgotten
function rightToBeForgotten() {
    console.log("Also known as Data Erasure, the right to be forgotten entitles the data subject to have the data controller erase his/her personal data, cease further dissemination of the data, and potentially have third parties halt processing of the data.");
}

// 5. Privacy by Design
function privacyByDesign() {
    console.log("Privacy by design calls for the inclusion of data protection from the onset of the designing of systems, rather than an addition.");
}

// 6. Data Protection Officers
function dataProtectionOfficers() {
    console.log("In certain cases, the appointment of a data protection officer is mandatory under GDPR. The Data Protection Officer must have expert knowledge of data protection law and practices.");
}

module.exports = {
    consent,
    rightToAccess,
    dataPortability,
    rightToBeForgotten,
    privacyByDesign,
    dataProtectionOfficers
};
```
