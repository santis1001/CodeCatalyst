// TODO: Create a class constructor named BlogPost 
//that takes in 'authorName', 'title', 'text', and 'createdOn'.
class BlogPost {
    constructor(authorName, title, text, createdOn){
        this.authorName = authorName;
        this.title = title;
        this.text =text;
        this.createdOn = createdOn;        
        this.comments = [];
    }
    printMetaData(){
        console.log(`\nnot param Created by ${this.authorName} on ${this.createdOn}`);
    }
    printMetaData(param){
        console.log(`\n${param} Created by ${this.authorName} on ${this.createdOn}`);
    } 
}

// TODO: Give BlogPost a property called 'comments' that is set to an empty array.

// TODO: Give BlogPost a method called printMetaData() that logs a 
//message saying 'Created by (authorName) on (createdOn)'.

// TODO: Give Blog Post a method called addComment() that takes in a comment and adds it to the
// comments array.

BlogPost.prototype.addComent = function(comment) {
    this.comments.push(comment);
}
BlogPost.prototype.getFirstComent = function() {
    return this.comments[0];
}
// TODO: Create a class constructor called Comment that takes
 //in 'authorName', 'text', 'createdOn', and 'reaction'.
class Thecomment {
    constructor(authorName, text, createdOn, reaction) {
        this.authorName = authorName;
        this.text = text;
        this.createdOn = createdOn;
        this.reaction = reaction;        
    }
    printMetaData() {
        console.log(`\nCreated by ${this.authorName} on ${this.createdOn}; ${this.reaction}`);
    }

}
 // TODO: Give Comment a method called printMetaData() that logs a message
 //  saying 'Created by (authorName) on (createdOn) (reaction)'.

 // TODO: Create a new object using the Comment class constructor.
const newcomment = new Thecomment('Juan','Esta horrible','20230502','Desepcionado');
 // TODO: Create a new object using the BlogPost class constructor.
const book = new BlogPost('Luis', 'El Amanecer',
    'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    '20230501');
// TODO: Use the addComment() method on your newly created BlogPost to add your 
// newly created Comment to its comments array.

book.addComent(newcomment);

// TODO: Print the meta data for both the BlogPost and the Comment to the console.
book.printMetaData();
newcomment.printMetaData();

console.log(book.getFirstComent());