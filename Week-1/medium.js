// 🌟 Medium: Kullanıcıdan bir metin almanızı istiyorum. 
// Bu metnin içindeki en çok tekrar eden harfi bulmalı 
// ve kaç kere tekrar ettiğini göstermeli.


function findMostFrequentLetter(text) {
    let = 0;
    let mostFrequentLetter = '';

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
        
        if (charMap[char] > maxCount) {
            maxCount = charMap[char];
            mostFrequentLetter = char;
        }
    }

    return { letter: mostFrequentLetter, count: maxCount };
}
