/* globals $ */

// Put all of your jQuery and JavaScript in this document.
var books = [
    {
        "id": 1,
        "title": "50 Shades of Grey",
        "author": "E. L. James",
        "bookImage": "https://d188rgcu4zozwl.cloudfront.net/content/B007J4T2G8/resources/469708731",
        "price": 17.69,
        "sellingPoints": [
            "Lasagna is delicious.",
            "The essential guide to Italian casseroles of all types.",
            "Real G's move silent, like Lasagna. -Lil Wayne"
        ]
    },

    {
        "id": 2,
        "title": "50 Shade of Gray",
        "author": "Garfield",
        "bookImage": "https://images-na.ssl-images-amazon.com/images/I/51YUYsBp2CL._SX322_BO1,204,203,200_.jpg",
        "price": 17.69,
        "sellingPoints": [
            "Lasagna is delicious.",
            "The essential guide to Italian casseroles of all types.",
            "Real G's move silent, like Lasagna. -Lil Wayne"
        ]
    },

    {
        "id": 3,
        "title": "50 Shade of Gray",
        "author": "Garfield",
        "bookImage": "https://images-na.ssl-images-amazon.com/images/I/51HhuPD7WhL._SX322_BO1,204,203,200_.jpg",
        "price": 17.69,
        "sellingPoints": [
            "Lasagna is delicious.",
            "The essential guide to Italian casseroles of all types.",
            "Real G's move silent, like Lasagna. -Lil Wayne"
        ]
    }
];

var albums [
  {
    "id": 1,
    "title": "Illmatic",
    "author": "Nas",
    "albumImage": "https://audioxide.com/wp-content/uploads/2016/06/Illmatic-500x500.jpg",
    "price": "9.99",
    "sellingPoints": [
        "Lasagna is delicious.",
        "The essential guide to Italian casseroles of all types.",
        "Real G's move silent, like Lasagna. -Lil Wayne"
      ]
  },
  {
    "id": 1,
    "title": "N**ga Please",
    "author": "Ol' Dirty Bastard",
    "albumImage": "https://vignette.wikia.nocookie.net/lyricwiki/images/e/e6/Ol%27_Dirty_Bastard_-_Nigga_Please.jpg/revision/latest?cb=20130122095709",
    "price": "9.99",
    "sellingPoints": [
        "Lasagna is delicious.",
        "The essential guide to Italian casseroles of all types.",
        "Real G's move silent, like Lasagna. -Lil Wayne"
      ]
  },
  {
    "id": 1,
    "title": "Girl You Know It's True",
    "author": "Milli Vanilli",
    "albumImage": "https://direct.rhapsody.com/imageserver/images/Alb.117181854/500x500.jpg",
    "price": "9.99",
    "sellingPoints": [
        "Lasagna is delicious.",
        "The essential guide to Italian casseroles of all types.",
        "Real G's move silent, like Lasagna. -Lil Wayne"
      ]
  }
]


// @TODO: convert all of this logic into a separate function
var $image = $( "<img>" ).attr( "src", books[0].bookImage );
var $title = $( "<h1>" ).text( books[0].title );
var $author = $( "<h2>" ).text( books[0].author );
var $price = $( "<h2>" ).text( books[0].price );
var $sellingPoints = $( "<p>" ).text( books[0].sellingPoints );
var $description = $( "<div>" ).append( $sellingPoints );
var $info = $( "<div>" ).append( $title, $author, $price );
var $book1 = $( "<div>" ).append( $image, $info, $description );


// @TODO: replace lines 41 and 42 with the function created from lines 45 on
$( "#book2 img" ).attr( "src", books[1].bookImage );
$( "#book3 img" ).attr( "src", books[2].bookImage );

$( "#content" ).prepend( $book1 );
