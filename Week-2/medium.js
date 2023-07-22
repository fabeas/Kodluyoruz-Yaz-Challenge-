// Kullanıcıdan bir kelime almanız gerekiyor. 
// Bu kelimenin harflerini büyük harflere
// dönüştüren bir program yazmanızı istiyorum. 

let word = prompt("Bir kelime giriniz.");

function convertUppCase() { 
   let upperCaseWord = word.toUpperCase();
   alert(upperCaseWord);
}

convertUppCase();