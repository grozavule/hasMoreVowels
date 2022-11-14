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

console.log(hasMoreVowels('moose'));
console.log(hasMoreVowels('graph'));
console.log(hasMoreVowels('Aal'));