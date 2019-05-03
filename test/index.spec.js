/* eslint-disable no-undef */
let chai = require('chai');
let expect = chai.expect;
let cardValidator = require('../lib/index');

describe('card lib', () => {
  describe('cardValidator', () => {
    it('It should be true for card with spaces', () => {
      expect(cardValidator.cardValidator('5213 3977 4433 3388')).to.equal(true);
    });
    it('It should be true for pattern card', () => {
      expect(cardValidator.cardValidator('4532583597717044')).to.equal(true);
    });
    it('It should be false for card with invalid digit', () => {
      expect(cardValidator.cardValidator('4532583597717045')).to.equal(false);
    });
    it('It should be false for boolean', () => {
      expect(cardValidator.cardValidator(true)).to.equal(false);
    });
    it('It should be false for empty string', () => {
      expect(cardValidator.cardValidator('')).to.equal(false);
    });
    it('It should be false for letters', () => {
      expect(cardValidator.cardValidator('lorem ipsum lore')).to.equal(false);
    });
    it('It should be false for inputs with length different from 16', () => {
      expect(cardValidator.cardValidator('45325835977170')).to.equal(false);
    });
    it('It should be true for card with special characters', () => {
      expect(cardValidator.cardValidator('5213-3977-4433-3388')).to.equal(true);
    });
  });
});