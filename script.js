function findZodiac() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const zodiacSign = getZodiacSign(birthdate);
    const zodiacResult = document.getElementById('zodiac-result');
    const zodiacLink = document.getElementById('zodiac-link');
    
    zodiacResult.textContent = `Your Zodiac sign is: ${zodiacSign}`;
    
    // Map zodiac signs to pages with more information
    const zodiacInfoLinks = {
        Aries: 'aries.html',
        Taurus: 'taurus.html',
        Gemini: 'gemini.html',
        Cancer: 'cancer.html',
        Leo: 'leo.html',
        Virgo: 'virgo.html',
        Libra: 'libra.html',
        Scorpio: 'scorpio.html',
        Sagittarius: 'sagittarius.html',
        Capricorn: 'capricorn.html',
        Aquarius: 'aquarius.html',
        Pisces: 'pisces.html'
    };

    // Set the link based on the zodiac sign
    if (zodiacSign && zodiacInfoLinks[zodiacSign]) {
        zodiacLink.href = zodiacInfoLinks[zodiacSign];
        zodiacLink.style.display = 'inline'; // Make the link visible
    } else {
        zodiacLink.style.display = 'none'; // Hide link if no valid zodiac
    }
}

// Function to get the Zodiac sign based on birthdate
function getZodiacSign(date) {
    const month = date.getMonth() + 1; // JS months are 0-indexed
    const day = date.getDate();

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries';
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus';
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Gemini';
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cancer';
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo';
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo';
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra';
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Scorpio';
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagittarius';
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricorn';
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquarius';
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'Pisces';

    return null;
}
