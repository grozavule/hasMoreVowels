const hasMoreVowels = word => {
    word = word.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    let vowelCount = 0;
    let consonantCount = 0;

    word = word.replaceAll(/[a,e,i,o,u]/g, '*');
    console.log(word);

    word.split('').forEach((letter, i, word) => {
        if(letter === '*')
        {
            vowelCount++;
        }
        else
        {
            consonantCount++;
        }
    })

    console.log(vowelCount);
    console.log(consonantCount);

    return vowelCount > consonantCount;
}

const hasMoreVowels2 = word => {
    word = word.toLowerCase();
    
    let matches = [...word.matchAll(/[a,e,i,o,u]/g)];

    return matches.length > Math.floor(word.length / 2);
}

console.log(hasMoreVowels2('moose'));
console.log(hasMoreVowels2('graph'));
console.log(hasMoreVowels2('Aal'));