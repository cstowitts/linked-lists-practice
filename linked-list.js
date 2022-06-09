"use strict";

/** Node: node for a singly linked list. */

class Node {
  //don't need a declaration variable bc these are class properties
  //an instance of class is an obj and 
  //you don't have to declare properties in an obj in JS

  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newVal = new Node(val);
    this.tail.next = newVal;
    this.tail = newVal;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newVal = new Node(val);
    newVal.next = this.head;
    this.head = newVal;
  }

  /** pop(): return & remove last item. */

  pop() {
    let currNode = this.head;
    let oldTail;

    //iterate over the linked list
    while(currNode.next !== null){
      //find the node whose .next prop === this.tail
        if(currNode.next === this.tail){
          //save that node in a variable
          oldTail = this.tail;
          //then change the penultimate node to the new this.tail
          this.tail = currNode;
          //and its .next val to null
          this.tail.next = null;
          //you don't wanna iterate any extra times, best to stop
          break;
        }
        currNode = currNode.next;
    }
    return oldTail;

    /** Brian Style: separating the traversal from the operation 
    let newTail;
    let oldTail = this.tail;
    let currNode = this.head;

    while(currNode.next !== null){
      if(currNode.next === this.tail){
        newTail = currNode;
        break;
      }
      currNode = currNode.next;

    }
    //then change the penultimate node to the new this.tail
    this.tail = newTail;
    //and its .next val to null
    this.tail.next = null;

    //return old tail
    return oldTail;
    */
  }

  /** shift(): return & remove first item. */

  shift() {
    let oldHead = this.head;
    this.head.next = this.head;
    //best practice to update the .next property on the oldTail to null
    //to separate it cleanly from the LinkedList
    oldHead.next = null;
    return oldHead;
  }

  /** getAt(idx): get val at idx(node). */

  getAt(idx) {
    //start at the head node
    let currNode = this.head;
    //iterate over each node until you reach the idx-th node
    for(let i = 0; i <= idx; i++){
      if(i === idx){
        //return that node's VALUE
        return currNode.val;
      }
      currNode = currNode.next;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
     //start at the head node
     let currNode = this.head;
     //we don't need to create a new Node, 
     //we just need to change the val of the existing Node at the desired idx

     //iterate over each node until you reach the idx-th node
     for(let i = 0; i <= idx; i++){
      if(i === idx){
        //update the val property of the Node at the desired idx
        currNode.val = val;
        //we don't need to continue traversing once we find the right Node
        break;
      }
      currNode = currNode.next;
     }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    //start at the head node
    let currNode = this.head;
    const newNode = new Node(val);

    //iterate over each node until you reach the idx-th node
    for(let i = 0; i < idx; i++){
      //we need to start at the node before the target idx
      //since the Node class only has a .next property, we can't refer backwards
      if(i === idx - 1){
        //change the .next property on the new Node to the .next of currNode
        //(the original Node at the target idx)
        newNode.next = currNode.next;
        //change the .next property of currNode to the new Node
        currNode.next = newNode;
      }
      currNode = currNode.next;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let currNode = this.head;
    let removedNode;
    //iterate over the linked list to locate the Node before the target idx
    for(let i = 0; i < idx; i++){
      if(i === idx - 1){
        //save the Node at the target idx
        removedNode = currNode.next;
        //change the .next of the Node before the target idx to the Node after target idx
        currNode.next = currNode.next.next
        //change the .next of the Node at the target idx to null
        removedNode.next = null;
      }
      currNode = currNode.next
    }
    //return the saved Node
    return removedNode;
  }

  /** average(): return an average of all values in the list */

  average() {
    
  }
}

module.exports = LinkedList;
