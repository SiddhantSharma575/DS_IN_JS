var LLNode = /** @class */ (function () {
    function LLNode(val) {
        this.val = val;
        this.next = null;
    }
    return LLNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    LinkedList.prototype.insert = function (val) {
        if (this.head === null) {
            var newNode = new LLNode(val);
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        }
    };
    LinkedList.prototype.print = function () {
        var current = this.head;
        while (current !== null) {
            console.log(current === null || current === void 0 ? void 0 : current.val);
            current = current.next;
        }
    };
    return LinkedList;
}());
var sll = new LinkedList();
sll.insert(1);
sll.print();
