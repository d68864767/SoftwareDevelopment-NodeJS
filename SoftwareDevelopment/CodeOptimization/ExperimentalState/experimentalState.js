```javascript
// experimentalState.js

// Configuration object for experimental features
const experimentalFeatures = {
    feature1: false,
    feature2: true,
    feature3: false,
};

/**
 * Function to check if an experimental feature is enabled
 * @param {string} feature - The name of the feature
 * @returns {boolean} - Returns true if the feature is enabled, false otherwise
 */
function isFeatureEnabled(feature) {
    return !!experimentalFeatures[feature];
}

/**
 * Function to enable an experimental feature
 * @param {string} feature - The name of the feature
 */
function enableFeature(feature) {
    if (experimentalFeatures.hasOwnProperty(feature)) {
        experimentalFeatures[feature] = true;
    } else {
        console.error(`Feature ${feature} does not exist.`);
    }
}

/**
 * Function to disable an experimental feature
 * @param {string} feature - The name of the feature
 */
function disableFeature(feature) {
    if (experimentalFeatures.hasOwnProperty(feature)) {
        experimentalFeatures[feature] = false;
    } else {
        console.error(`Feature ${feature} does not exist.`);
    }
}

module.exports = {
    isFeatureEnabled,
    enableFeature,
    disableFeature,
};
```
