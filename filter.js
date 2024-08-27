const words = ['Apple', 'Banana', 'Cherry', 'Starfruit', 'blueberry', 'Salmonberry', 'grape', 'Pineapple', 'Pomegranate', 'Powdermelon'];

const longWords = words.filter(word => word.length > 5);

console.log("Original words:", words);
console.log("Words with more than 5 letters:", longWords);