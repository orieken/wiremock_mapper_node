import { MatchBuilder } from '../../lib/builders/match_builder'
import { RequestBuilder } from '../../lib/builders/request_builder'

describe('MatchBuilder', () => {
  describe('absent', () => {
    it('json stringifies to { absent: true }', () => {
      const builder = new MatchBuilder(new RequestBuilder());
      builder.absent();

      const expectedJSON = JSON.stringify({ 'absent': true });
      expect(JSON.stringify(builder)).toEqual(expectedJSON);
    });

    it('returns the constructor arg request builder for chaining', () => {
      const requestBuilder = new RequestBuilder();
      const builder = new MatchBuilder(requestBuilder);
      expect(builder.absent()).toEqual(requestBuilder);
    });
  });

  describe('containing', () => {
    it('json stringifies to { contains: value }', () => {
      const builder = new MatchBuilder(new RequestBuilder());
      builder.containing('foo');

      const expectedJSON = JSON.stringify({ 'contains': 'foo' });
      expect(JSON.stringify(builder)).toEqual(expectedJSON);
    });

    it('returns the constructor arg request builder for chaining', () => {
      const requestBuilder = new RequestBuilder();
      const builder = new MatchBuilder(requestBuilder);
      expect(builder.containing('')).toEqual(requestBuilder);
    });
  });

  describe('equalTo', () => {
    it('json stringifies to { equalTo: value }', () => {
      const builder = new MatchBuilder(new RequestBuilder());
      builder.equalTo('foo');

      const expectedJSON = JSON.stringify({ 'equalTo': 'foo' });
      expect(JSON.stringify(builder)).toEqual(expectedJSON);
    });

    it('returns the constructor arg request builder for chaining', () => {
      const requestBuilder = new RequestBuilder();
      const builder = new MatchBuilder(requestBuilder);
      expect(builder.equalTo('')).toEqual(requestBuilder);
    });
  });

  describe('equalToJson', () => {
    it('json stringifies to { equalToJson: value }', () => {
      const builder = new MatchBuilder(new RequestBuilder());
      builder.equalToJson('foo');

      const expectedJSON = JSON.stringify({ 'equalToJson': 'foo' });
      expect(JSON.stringify(builder)).toEqual(expectedJSON);
    });

    it('json stringifies to { equalToJson: value, ignoreArrayOrder: true }', () => {
      const builder = new MatchBuilder(new RequestBuilder());
      builder.equalToJson('foo', true);

      const expectedJSON = JSON.stringify({ 'equalToJson': 'foo', 'ignoreArrayOrder': true });
      expect(JSON.stringify(builder)).toEqual(expectedJSON);
    });

    it('json stringifies to { equalToJson: value, ignoreExtraElements: true }', () => {
      const builder = new MatchBuilder(new RequestBuilder());
      builder.equalToJson('foo', false, true);

      const expectedJSON = JSON.stringify({ 'equalToJson': 'foo', 'ignoreExtraElements': true });
      expect(JSON.stringify(builder)).toEqual(expectedJSON);
    });

    it('json stringifies to { equalToJson: value, ignoreArrayOrder: true, ignoreExtraElements: true }', () => {
      const builder = new MatchBuilder(new RequestBuilder());
      builder.equalToJson('foo', true, true);

      const expectedJSON = JSON.stringify({ 'equalToJson': 'foo', 'ignoreArrayOrder': true, 'ignoreExtraElements': true });
      expect(JSON.stringify(builder)).toEqual(expectedJSON);
    });

    it('returns the constructor arg request builder for chaining', () => {
      const requestBuilder = new RequestBuilder();
      const builder = new MatchBuilder(requestBuilder);
      expect(builder.equalToJson('foo')).toEqual(requestBuilder);
    });
  });

  describe('equalToXml', () => {
    it('json stringifies to { equalToXml: value }', () => {
      const builder = new MatchBuilder(new RequestBuilder());
      builder.equalToXml('<foo>bar</foo>');

      const expectedJSON = JSON.stringify({ 'equalToXml': '<foo>bar</foo>' });
      expect(JSON.stringify(builder)).toEqual(expectedJSON);
    });

    it('returns the constructor arg request builder for chaining', () => {
      const requestBuilder = new RequestBuilder();
      const builder = new MatchBuilder(requestBuilder);
      expect(builder.equalToXml('')).toEqual(requestBuilder);
    });
  });

  describe('matching', () => {
    it('json stringifies to { matches: value }', () => {
      const builder = new MatchBuilder(new RequestBuilder());
      builder.matching('hi');

      const expectedJSON = JSON.stringify({ 'matches': 'hi' });
      expect(JSON.stringify(builder)).toEqual(expectedJSON);
    });

    it('returns the constructor arg request builder for chaining', () => {
      const requestBuilder = new RequestBuilder();
      const builder = new MatchBuilder(requestBuilder);
      expect(builder.matching('')).toEqual(requestBuilder);
    });
  });

  describe('matchingJsonPath', () => {
    it('json stringifies to { matchesJsonPath: value }', () => {
      const builder = new MatchBuilder(new RequestBuilder());
      builder.matchingJsonPath('hi');

      const expectedJSON = JSON.stringify({ 'matchesJsonPath': 'hi' });
      expect(JSON.stringify(builder)).toEqual(expectedJSON);
    });

    it('returns the constructor arg request builder for chaining', () => {
      const requestBuilder = new RequestBuilder();
      const builder = new MatchBuilder(requestBuilder);
      expect(builder.matchingJsonPath('')).toEqual(requestBuilder);
    });
  });

  describe('matchingXPath', () => {
    it('json stringifies to { matchesXPath: value }', () => {
      const builder = new MatchBuilder(new RequestBuilder());
      builder.matchingXPath('hi');

      const expectedJSON = JSON.stringify({ 'matchesXPath': 'hi' });
      expect(JSON.stringify(builder)).toEqual(expectedJSON);
    });

    it('returns the constructor arg request builder for chaining', () => {
      const requestBuilder = new RequestBuilder();
      const builder = new MatchBuilder(requestBuilder);
      expect(builder.matchingXPath('')).toEqual(requestBuilder);
    });
  });

  describe('notMatching', () => {
    it('json stringifies to { doesNotMatch: value }', () => {
      const builder = new MatchBuilder(new RequestBuilder());
      builder.notMatching('hi');

      const expectedJSON = JSON.stringify({ 'doesNotMatch': 'hi' });
      expect(JSON.stringify(builder)).toEqual(expectedJSON);
    });

    it('returns the constructor arg request builder for chaining', () => {
      const requestBuilder = new RequestBuilder();
      const builder = new MatchBuilder(requestBuilder);
      expect(builder.notMatching('')).toEqual(requestBuilder);
    });
  });
});