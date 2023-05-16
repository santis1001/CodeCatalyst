// TODO: Create a class constructor named ForumItem that takes in 'authorName', 'text', and 'createdOn'.
class ForumItem{
  constructor(authorName, text, createdOn){
    this.authorName = authorName;
    this.text = text;
    this.createdOn = createdOn;
  }
}

// TODO: Setup BlogPost and Comment so they inherit their structure from ForumItem.
class BlogPost extends ForumItem{
  constructor(title, Obj, comment) {
    super(Obj.authorName, Obj.text, Obj.createdOn);
    this.title = title;
    this.comments = comment;
  }
  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment extends ForumItem{
  constructor(authorName, text, createdOn, reaction) {
    super(authorName, text, createdOn);
    this.reaction = reaction;
  }
}

// TODO: Create a new object using the Comment class constructor.
const newcomment = new Comment('Juan','Esta horrible','20230502','Desepcionado');

const form = new ForumItem('Luis', 
'At vero eos et accusamus et iusto odio',
'20230501');

// TODO: Create a new object using the BlogPost class constructor.
const book = new BlogPost('El Amanecer', form, 
    new Comment('Juan','Esta horrible','20230502','Desepcionado'));
// TODO: Log both newly created BlogPost and Comment to the console.
// book.addComment();



console.log(book);
console.log(newcomment);

