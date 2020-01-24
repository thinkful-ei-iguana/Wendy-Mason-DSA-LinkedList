/* eslint-disable quotes */
const LinkedList = require("./LinkedList");
const SLL = new LinkedList();
//Within the function, using the linked list class above, create a linked list with the name SLL and add the following items to your linked list: Apollo, Boomer, Helo, Husker, Starbuck

function main() {

  SLL.insertFirst("Apollo");
  SLL.insertLast("Boomer");
  SLL.insertLast("Helo");
  SLL.insertLast("Husker");
  SLL.insertLast("Starbuck");
  SLL.insertLast("Tauhida");
  // SLL.remove("squirrel");
  SLL.insertBefore("BOOM", "Helo");
  SLL.insertAFter("BAM", "Tauhida");
  SLL.insertAt("BYE", 1);
  SLL.insertBefore("Athena", "Boomer");
  SLL.insertAFter("Hotdog", "Helo");
  SLL.insertAt("Kat", 3);
  SLL.remove("Tauhida");
  return SLL;
}
main();

function display(list) {
  console.log(JSON.stringify(list));
}
display(SLL);

function size(list) {
  let currentNode = list.head;
  let count = 0;
  while (currentNode != null) {
    count += 1;
    currentNode = currentNode.next;
  }
  console.log(`you have ${count} nodes!`)
  return count;

}
// size(SLL);

function isEmpty(list) {
  let currentNode = list.head;
  if (!currentNode) {
    console.log("You have an empty list")
  }
  console.log("congrats, you have a list")
}
// isEmpty(SLL);

function findPrevious(list, item) {
  let currentNode = list.head;
  let prevNode = list.head;

  while (currentNode !== null) {
    if (currentNode.value === item) {
      console.log(prevNode.value)
      return prevNode.value;
    }
    prevNode = currentNode;
    currentNode = currentNode.next;
  }
}
// findPrevious(SLL, "Kat")

function findLast(list) {
  let currentNode = list.head;
  while (currentNode !== null) {
    if (!currentNode.next) {
      console.log(currentNode)
      return currentNode;
    }
    currentNode = currentNode.next;
  }
}

findLast(SLL)