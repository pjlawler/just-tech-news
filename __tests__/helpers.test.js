const {format_date, format_plural, format_url } = require('../utils/helpers')

test('format_date() returns a date string', () => {
    const date = new Date('2022-03-20 15:00:00');
    
    expect(format_date(date)).toBe('3/20/2022');
});

test('format_plural() returns a proper plural', () => {
    
    let word = "point";
    let num = 1
    expect(format_plural(word, num)).toBe('point');

    word = "point";
    num = 2
    expect(format_plural(word, num)).toBe('points');

    word = "comment";
    num = 1
    expect(format_plural(word, num)).toBe('comment');

    word = "comment";
    num = 2
    expect(format_plural(word, num)).toBe('comments');

});

test('format_url() returs a short url', () => {
    let url = "https://www.google.com/?dlaks;jf;slkdfjas;lkdsjf";
    expect(format_url(url)).toBe("google.com")

    url = "https://www.coolstuff.com?test";
    expect(format_url(url)).toBe("coolstuff.com");
})