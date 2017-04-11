console.log("grahhgar");

// var ELEMENT = 1;
// var DOCUMENT = 9;
// var DOCUMENT_FRAGMENT = 11;
// var TEXT = 3;

// // Enter things that you'd like to replace
// var MATCH = ['computer','person'];
// var REPLACE = ['robot','cantaloupe'];

// walk(document.body);

// function walk(node) {
//     // Function from here for replacing text: http://is.gd/mwZp7E

//     var child, next;

//     switch (node.nodeType) {
//         case ELEMENT:  // Element
//         case DOCUMENT:  // Document
//         case DOCUMENT_FRAGMENT: // Document fragment
//             child = node.firstChild;
//             while (child) {
//                 next = child.nextSibling;
//                 walk(child);
//                 child = next;
//             }
//             break;

//         case TEXT: // Text node
//             replaceText(node);
//             break;
//     }
// }

// function replaceText(textNode) {
//     var v = textNode.nodeValue;

//     // Go through and match/replace all the strings we've given it, using RegExp.
//     for (var i = 0; i < MATCH.length; i++) {
//         v = v.replace(new RegExp('\\b' + MATCH[i] + '\\b', 'g'), REPLACE[i]);
//     }

//     textNode.nodeValue = v;
// }

// // Links to pictures of Nicholas Cage
// var CAGE_URLS = ['http://upload.wikimedia.org/wikipedia/commons/3/33/Nicolas_Cage_2011_CC.jpg',
//                                  'http://d1oi7t5trwfj5d.cloudfront.net/98/1d/ac290201446e98aabcef4965f141/nicolas-cage.jpg',
//                                  'http://pmcdeadline2.files.wordpress.com/2010/08/nicolas_cage.jpg',
//                                  'http://upload.wikimedia.org/wikipedia/commons/f/f3/Nicolas_Cage_-_66%C3%A8me_Festival_de_Venise_(Mostra).jpg',
//                                  'http://zuqka.nation.co.ke/wp-content/uploads/2013/07/Nicolas-Cage.jpg'
//                                 ];

// // Pick out a random image from our collection.
// function getRandomImage() {
//     return CAGE_URLS[Math.floor(Math.random() * CAGE_URLS.length)];
// }

// // Get all the images on a page.
// var images = document.getElementsByTagName("img");

// // Replace each image with a random one.
// for (var i = 0; i < images.length; i++) {
//     var image = images[i];
//   image.src = getRandomImage();
//   console.log(image);
// }

// Link and a percentage likelihood to replace your link.
// var LINK = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
// var RATIO = 1;

// // Get all the links on the page.
// var links = document.getElementsByTagName("a");

// // Replace ~RATIO of them with Rick Astley.
// for (var i = 0; i < links.length; i++) {
//     if (Math.random() < RATIO) {
//     links[i].href = LINK;
//     }
// }
