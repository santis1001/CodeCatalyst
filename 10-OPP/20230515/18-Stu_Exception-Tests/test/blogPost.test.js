const BlogPost = require('../blogPost.js');

describe('BlogPost', () => {
  // Test for authorName less than 2 characters
  describe('Length', () => {
    it('throws an error when authorName is less than 2 characters long', () => {
      const cb = () => new BlogPost('J');
      const err = new Error('Author must be at least 2 characters long.');
      expect(cb).toThrow(err);
    });
  });

  // Test for invalid characters in authorName
  describe('Characters', () => {
    it('throws an error when authorName contains invalid characters', () => {
      const cb = () => new BlogPost('J/ames10');
      const err = new Error('Author must only contain letters, numbers, dashes, and underscores.');
      expect(cb).toThrow(err);
    });
  });
});