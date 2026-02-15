function updatePreferences(currentPreferences, newPreferences) {
    return { ...currentPreferences, ...newPreferences };
}

// Usage
const userPreferences = { email: true, sms: false };
const updatedPreferences = updatePreferences(userPreferences, { sms: true });

console.log(updatedPreferences); // { email: true, sms: true }
console.log(userPreferences); // { email: true, sms: false } - remains unchanged