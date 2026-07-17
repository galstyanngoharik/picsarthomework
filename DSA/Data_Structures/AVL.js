class Node {
    value;
    left = null;
    right = null;
    height = 1;

    constructor(value = null) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVL {
    #root;
    #size = 0;

    constructor() {
        this.#root = null;
        this.#size = 0;
    }

    size() {
        return this.#size;
    }

    is_empty() {
        return !this.#root;
    }

    clear() {
        this.#root = null; 
        this.#size = 0;
    }

    #insert(node, value) {
        if(!node) {
            ++this.#size;
            return new Node(value);
        }
        if(node.value < value) {
            node.right = this.#insert(node.right, value);
        } else if(node.value > value) {
            node.left = this.#insert(node.left, value);
        } else { return; }
        node.height = this.getHeight(node);
        return this.#reBalance(node);
    }

    #delete(node, value) {
        if(!node) { return null; }
        if(value > node.value) { node.right = this.#delete(node.right, value); }
        if(value < node.value) { node.left = this.#delete(node.left, value); }
        if(value === node.value) {
            if(!node.right && !node.left) {
                return null;
            }
            if(!node.right) { return node.left; }
            if(!node.left) { return node.right; }
            if(node.right && node.left) {
                const tmp = this.findSuccessor(node.value);
                node.value = tmp;
                node.right = this.#delete(node.right, tmp);
                return node;
            }
        }
        node.height = this.getHeight(node);
        if(Math.abs(this.#balanceFactor(node)) > 1) {
            node = this.#reBalance(node);
        }
        return node;
    }

    #reBalance(node) {
        const balance = this.#balanceFactor(node);
        if(balance > 1) {
            if(this.#balanceFactor(node.left) >= 0) {     
                node = this.#rotateRight(node);
                return node;
            } else {
                node.left = this.#rotateLeft(node.left);
                node = this.#rotateRight(node);
                return node;
            }
        } else if (balance < -1) {
            if(this.#balanceFactor(node.right) > 0) {
                node.right = this.#rotateRight(node.right);
                node = this.#rotateLeft(node);
                return node;
            } else {
                node = this.#rotateLeft(node);
                return node;
            }
        } else { return node; }
    }

    #balanceFactor(node) {
        if (!node) return 0;
        return this.getHeight(node.left) - this.getHeight(node.right); }

    #rotateLeft(node) {
        let tmp = node;
        let right_child = tmp.right;
        let right_left = right_child.left;
        right_child.left = tmp;
        tmp.right = right_left;
        tmp.height = 1;
        return right_child;
    }

    #rotateRight(node) {
        let tmp = node;
        let left_child= tmp.left;
        let left_right = left_child.right;
        tmp.left = left_right;
        left_child.right = tmp;
        tmp.height = 1;
        return left_child;
    }

    getHeight(node) {
        if (!node) return 0;
        return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }

    insert(value) {
        if(this.is_empty()) { 
            this.#root = new Node(value);  
            this.#size++;
            return;
        }
        this.#root = this.#insert(this.#root, value);
    }

    delete(value) {
        this.#root = this.#delete(this.#root, value);
        this.#size--;
    }

    search(value) {
        if(this.is_empty()) { return false; }
        return this.#search(this.#root, value);
    }

    find_min() {
        if(this.is_empty()) { return undefined; }
        return this.#_find_min(this.#root);
    }

    find_max() {
        if(this.is_empty()) { return undefined; }
        return this.#_find_max(this.#root);
    }

    levelOrder() {
        let res = [];
        let queue = [];
        if(this.is_empty()) { return res; }
        queue.push(this.#root);
        while(queue.length) {
            let el = queue.shift();
            res.push(el.value);
            if(el.left) { queue.push(el.left); }
            if(el.right) { queue.push(el.right); }
        }
        return res; 
    }

    preorder_rec() {
        let res = [];
        if(!this.#root) { return res; }
        return this.#preorder_rec(this.#root, res);
    }

    preorder_itr() {
        let res = [];
        if(!this.#root) { return res; }
        let stack = [this.#root];
       
        while(stack.length) {
            let curr = stack.pop();
            res.push(curr.value);
            if(curr.right) { stack.push(curr.right); }
            if(curr.left) { stack.push(curr.left); }
        }
        return res;
    }

    inorder_rec() {
        let res = [];
        if(this.is_empty()) { return res; }
        return this.#inorder_rec(this.#root, res);
    }

    inorder_itr() {
        let res = [];
        if(!this.#root) { return res; }
        let stack = [];
        let curr = this.#root;
        while(curr || stack.length) {
            while(curr) {
                stack.push(curr);
                curr = curr.left
            }
            curr = stack.pop();
            res.push(curr.value);
            curr = curr.right;
        }
        return res; 
    }

    postorder_rec() {
        let res = [];
        if(!this.#root) { return res; }
        return this.#postorder_rec(this.#root, res);
    }

    postorder_itr() {
        let res = [];
        if(!this.#root) { return res; }
        let stack = [this.#root];
        while(stack.length) {
            let node = stack.pop();
            res.push(node.value);
            if(node.left) { stack.push(node.left); }
            if(node.right) { stack.push(node.right); }
        }
        return res.reverse();
    }

    #_find_min(node) {
        if(!node.left) { return node.value; }
        return this.#_find_min(node.left);
    }

    #_find_max(node) {
        if(!node.right) { return node.value; }
        return this.#_find_max(node.right);
    }
    #search(node, value) {
        if(!node) { return false; }
        if(node.value === value) { return true; }
        if(value < node.value) {  return this.#search(node.left, value); }
        else { return this.#search(node.right, value); }
    }

    #preorder_rec(node, res) {
        if(!node) { return res; }
        res.push(node.value);
        this.#preorder_rec(node.left, res);
        this.#preorder_rec(node.right, res);
        return res;
    }

    #inorder_rec(node, res) {
        if(!node) { return res; }
        this.#inorder_rec(node.left, res);
        res.push(node.value);
        this.#inorder_rec(node.right, res);
        return res;
    }

    #postorder_rec(node, res) {
        if(!node) { return res; }
        res.push(node.value);
        this.#postorder_rec(node.left, res);
        this.#postorder_rec(node.right, res);
        return res;
    }

    isBalanced() {
        return Math.abs(this.#balanceFactor(this.#root)) <= 1;
    }

    validateBST() {
        let arr = this.inorder_rec();
        for(let i = 0; i < arr.length; ++i) {
            if(arr[i] >= arr[i+1]) { return false; }
        }
        return true;
    }

    findSuccessor(value) {
       if(this.is_empty()) { return null; }
        let curr = this.#root;
        let successor = null;
        while(curr) {
            if(value < curr.value) {
                successor = curr;
                curr = curr.left;
            } else { curr = curr.right; }
        }
        return successor ? successor.value : null;
    }

    findPredecessor(value) {
        if(this.is_empty()) { return null; }
        let curr = this.#root;
        let predecessor = null;
        while(curr) {
            if(value > curr.value) {
                predecessor = curr;
                curr = curr.right;
            } else { curr = curr.left; }
        }
        return predecessor ? predecessor.value : null;
    }

    toArray() {
        return this.inorder_rec();
    }

    clone() {
        if(this.is_empty()) { return null; }
        function cloneNode(node) {
            if(!node) { return null; }
            let newnode = new Node(node.value);
            newnode.left = cloneNode(node.left);
            newnode.right = cloneNode(node.right);
            return newnode;
        }
        return cloneNode(this.#root);
    }

    equals(otherTree) {
        if(!otherTree) { return this.is_empty(); }
        function sametree(node1, node2) {
            if(!node1 && !node2) { return true; }
            if(!node1 || !node2) { return false; }
            if(node1.value !== node2.value) { return false; }
            return sametree(node1.left, node2.left) && sametree(node1.right, node2.right);
        }
        return sametree(this.#root, otherTree);
    }

    *[Symbol.iterator]() {
        let res = this.inorder_rec();
        yield* res;
    }

    values() {
       return this.inorder_rec();
    }

    *entries() {
        let res = this.inorder_rec();
        for(let i = 0; i < res.length; ++i) {
            yield [i, res[i]];
        }
    }
}
const avl = new AVL();
avl.insert(30);
avl.insert(20);

avl.insert(13);

avl.insert(15);
avl.delete(20);
console.log(avl.size());
console.log(avl.inorder_rec())
console.log(avl.search(13));