function normalizeString(str) {
  return str.replace(/\s/g, '').toLowerCase();
}

function isAnagram(phrase, word) {
  const normalizedPhrase = normalizeString(phrase);
  const normalizedWord = normalizeString(word);

  if (normalizedPhrase.length !== normalizedWord.length) {
    return false;
  }

  const sortedPhrase = normalizedPhrase.split('').sort().join('');
  const sortedWord = normalizedWord.split('').sort().join('');

  return sortedPhrase === sortedWord;
}

function isAnagramInArray(phrase, arr) {
  const result = [];
  
  for (const word of arr) {
    if (isAnagram(phrase, word)) {
      result.push(word);
    }
  }

  return result;
}

const anagrams = [
  "oz bilal tochberer",  
  "it's razorbill beachcomber", 
  "och robe tilblazer", 
  "bib chorizo cellarmaster", 
  "thor bble carizole", 
  "zll borcht aberoie", 
  "brzl orche atobile", 
  "dame shelburne characterizing", 
  "uber englishman characterized", 
  "agnes rhumbline characterized", 
  "rehab scrutinized charlemagne", 
  "dreams zurich interchangeable", 
  "bam hamster technocratic", 
  "mechatronic masterbatch", 
  "bam ratchet mechatronics"
];

console.log(isAnagramInArray("Bob Ziroll Teacher", anagrams));
