```javascript
// experimentalState.test.js

const { isFeatureEnabled, enableFeature, disableFeature } = require('./experimentalState');

describe('Experimental State', () => {
    test('Check if a feature is enabled', () => {
        expect(isFeatureEnabled('feature1')).toBe(false);
        expect(isFeatureEnabled('feature2')).toBe(true);
        expect(isFeatureEnabled('feature3')).toBe(false);
    });

    test('Enable a feature', () => {
        enableFeature('feature1');
        expect(isFeatureEnabled('feature1')).toBe(true);
    });

    test('Disable a feature', () => {
        disableFeature('feature2');
        expect(isFeatureEnabled('feature2')).toBe(false);
    });

    test('Error when enabling a non-existent feature', () => {
        console.error = jest.fn();
        enableFeature('nonExistentFeature');
        expect(console.error).toHaveBeenCalledWith('Feature nonExistentFeature does not exist.');
    });

    test('Error when disabling a non-existent feature', () => {
        console.error = jest.fn();
        disableFeature('nonExistentFeature');
        expect(console.error).toHaveBeenCalledWith('Feature nonExistentFeature does not exist.');
    });
});
```
