const assert = require('chai').assert
const findKeyByValue = require('../findKeyByValue')

describe("findKeyByValue", () => {
    it('should return show genre (drama) when given the show name as a value (The Wire)', () => {
        const bestTVShowsByGenre = {'sci_fi': 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama: 'The Wire'}
        const value = 'The Wire'
        const expectedOutput = 'drama'
        assert.equal(findKeyByValue(bestTVShowsByGenre, value), expectedOutput)
    })

    it('should return artist when provided the song name', () => {
        const favSongsByArtist = {coldplay: 'In My Place', keane: 'This is the last time', coin: 'Boyfriend', travis: 'Waving at the Window' };
        const value = 'In My Place'
        const expectedOutput = 'coldplay'
        assert.equal(findKeyByValue(favSongsByArtist, value), expectedOutput)
    })
})
