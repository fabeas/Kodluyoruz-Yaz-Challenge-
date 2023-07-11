// Easy: Kullanıcının doğum tarihini alarak 
// kaç yaşında olduğunu bulan bir algoritma.

function calculateAge(birthDate) {

    let today = new Date();

    let parsedBirthDate = new Date(birthDate);

    let age = today.getFullYear() - parsedBirthDate.getFullYear();

    let monthDiff = today.getMonth() - parsedBirthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;

}

let birthDate = prompt("Doğum tarihinizi girin (YYYY-AA-GG):");
let age = calculateAge(birthDate);
alert("Yaşınız: " + age);


