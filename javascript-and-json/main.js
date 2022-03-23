var booksArray = [
  {
    isbn: 1234567891,
    author: 'Greg Stevens',
    title: 'How To Take Out The Trash'
  },
  {
    isbn: 1234567892,
    author: 'Stephen King',
    title: 'Horror Stories'
  },
  {
    isbn: 12345678913,
    author: 'Julia Styles',
    title: 'Black Swan'
  }
];

console.log('booksArray: ', booksArray);
console.log('typeof booksArray ', typeof booksArray);

booksArray = JSON.stringify(booksArray);

console.log('stringified booksArray: ', booksArray);
console.log('typeof booksArray: ', typeof booksArray);

var student = '{"id": 1234, "name": "Garrett"}';

console.log('student: ', student);
console.log('typeof student: ', typeof student);

var studentObject = JSON.parse(student);

console.log('studentObject: ', studentObject);
console.log('typeof studentObject: ', typeof studentObject);
