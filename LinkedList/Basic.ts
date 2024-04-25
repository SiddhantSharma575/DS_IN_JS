class LLNode {
    val: number;
    next: any;
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
   length : number;
   head : LLNode | null;
   tail : LLNode | null;
   constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
   }

   insert(val) {
    if(this.head === null) {
        let newNode : LLNode = new LLNode(val);
        this.head = newNode;
        this.tail = newNode;
        this.length++;
    }
   }
   print() {
    let current : LLNode | null = this.head;
    while(current !== null) {
        console.log(current?.val);
        current = current.next;
    }
   }
}

let sll = new LinkedList();
sll.insert(1);
sll.print()