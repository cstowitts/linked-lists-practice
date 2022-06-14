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
/** this version will have methods that solve recursively */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
   
  }

  /** pop(): return & remove last item. */

  pop() {
   

  }

  /** shift(): return & remove first item. */

  shift() {
   
  }

  /** getAt(idx): get val at idx(node). */

  getAt(idx) {
 
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
  
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
  
  }

  /** average(): return an average of all values in the list */

  average() {
   
  }
}

/** fun fact:
 * 
 * ++sum would increment sum and then evaluate it
 * sum++ would evaluate sum and then increment it
 * 
 * += is same as sum++
 * 
 */

module.exports = LinkedList;
