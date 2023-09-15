require('./root.js');

const { name, height, message } = require('../index.js');

describe('what-is-a-test', () => {
  describe('Name', () => {
    it('returns "Susan"', () => {
      if (name === 'Susan') {
        // Test passes
      } else {
        throw new Error(`Expected 'Susan', but got '${name}'`);
      }
    });
  });

  describe('Height', () => {
    it('is less than 40 and greater than 0', () => {
      if (height > 0 && height < 40) {
        // Test passes
      } else {
        throw new Error(`Expected height to be greater than 0 and less than 40, but got ${height}`);
      }
    });
  });

  describe('Message', () => {
    it('gives the name and height', () => {
      if (message.includes(name) && message.includes(height.toString())) {
        // Test passes
      } else {
        throw new Error(`Expected message to contain name and height, but got '${message}'`);
      }
    });
  });
});


