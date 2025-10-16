// Require datejs package (make sure to npm install datejs first)
require('datejs');

function combineUsers(...args) {
  // Step 2: Initialize the return object
  const combinedObject = {
    users: []
  };

  // Step 3 & 4: Loop through args and merge all username arrays
  for (const arr of args) {
    combinedObject.users.push(...arr);
  }

  // Step 5: Add today's date using datejs in M/d/yyyy format
  combinedObject.merge_date = new Date().toString("M/d/yyyy");

  // Step 7: Return the object
  return combinedObject;
}

// Example usage:
const group1 = ['alice', 'bob'];
const group2 = ['carol', 'dave'];
const group3 = ['eve'];

console.log(combineUsers(group1, group2, group3));



module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};