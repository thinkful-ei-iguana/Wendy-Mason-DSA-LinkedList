/* eslint-disable quotes */
const LinkedList = require("./LinkedList");

//Within the function, using the linked list class above, create a linked list with the name SLL and add the following items to your linked list: Apollo, Boomer, Helo, Husker, Starbuck

function main() {
  const SLL = new LinkedList();

  SLL.insertFirst("Apollo");
  // SLL.insertLast("Boomer");
  // SLL.insertLast("Helo");
  // SLL.insertLast("Husker");
  // SLL.insertLast("Starbuck");
  console.log(SLL);
}

main();
