class Node {
    constructor(value, left=null, right=null) {
        this.left = left;
        this.right = right;
        this.value = value;
    };
}

class BST {
    #root;
    #size;

    constructor(root=null) {
        this.#root = root;
        this.#size = 0;
    };

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

    insertI(value) {
        let newNode = new Node(value);
        if(this.is_empty()) { 
            this.#root = newNode;
            this.#size++;
            return true;
        }

        let curr = this.#root;
        while(true) {
            if(curr.value > value) {
                if(!curr.left) { 
                    curr.left = newNode;
                    this.#size++;
                    return true; 
                }
                curr = curr.left;
            }
            else if(curr.value < value) {
                if(!curr.right) { 
                    curr.right = newNode; 
                    this.#size++;
                    return true;
                }
                curr = curr.right;
            }
            else { return false; }
        }    
            
    }
    insertR(value) {
        this.#root = this.#_insert(this.#root, value); 
        this.#size++;
        return true;
    }

    delete(value) {
        this.#root = this.#_delete(this.#root, value);
        this.#size--;
    }

    contains(value) {
        let curr = this.#root;
        while(curr) {
            if(curr.value === value) { return true; }
            else if(curr.value < value) { curr = curr.right; }
            else { curr = curr.left; }
        }
        return false;   
    }

    get_height() {
        if(this.is_empty()) { return 0; }
        return this.#_get_height(this.#root);
    }

    get_depth(value) {
        if(this.is_empty()) { return -1; }
        let curr = this.#root;
        let depth = 0;
        while(curr) {
            if(value === curr.value) {
                return depth;
            }
            if(value > curr.value) {
                curr = curr.right;
            }
            else {
                curr = curr.left;
            }
            depth++;
        }
        return -1;
    }

    find_min() {
        if(this.is_empty()) { return undefined; }
        return this.#_find_min(this.#root);
    }

    find_max() {
        if(this.is_empty()) { return undefined; }
        return this.#_find_max(this.#root);
    }

    level_order() {
        const res = [];
        const queue = [];
        if(!this.#root) { return res; }
        queue.push(this.#root);
        while(queue.length) {
            const el = queue.shift();
            res.push(el.value);
            if(el.left) { queue.push(el.left); }
            if(el.right) { queue.push(el.right); }
        }
        return res;
    }

    inorder_rec() {
        let res = [];
        if(!this.#root) { return res; }
        return this.#_inorder(this.#root, res);
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

    preorder_rec() {
        let res = [];
        if(!this.#root) { return res; }
        return this.#_preorder(this.#root, res);
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

    postorder_rec() {
        let res = [];
        if(!this.#root) { return res; }
        return this.#_postorder(this.#root, res);
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

    find_successor(value) {
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

    find_predecessor(value) {
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

    is_balanced(node = this.#root) {
        if(!node) { return true; } 
        let left = this.#_get_height(node.left);
        let right = this.#_get_height(node.right);
        let balance = Math.abs(left-right) <= 1;
        return balance && this.is_balanced(node.left) && this.is_balanced(node.right);
    }

    validate_BST() {
        let arr = this.inorder_rec();
        for(let i = 0; i < arr.length; ++i) {
            if(arr[i] >= arr[i+1]) { return false; }
        }
        return true;
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

    #_insert(node, val) {
        if(!node) { return new Node(val); }
        if(node.value > val) { node.left = this.#_insert(node.left, val); }
        if(node.value < val) { node.right = this.#_insert(node.right, val); }
        return node;
    }

    #_delete(node, value) {
        if(!node) { return null; }
        if(node.value < value) { node.right = this.#_delete(node.right, value); }
        if(node.value > value) { node.left = this.#_delete(node.left, value); }
        if(node.value === value) {
            if(!node.right && !node.left) { return null; }
            if(!node.right) { return node.left; }
            if(!node.left) { return node.right; }
            if(node.left && node.right) { 
                const tmp = this.find_successor(node.value);
                node.value = tmp;
                node.right = this.#_delete(node.right, tmp);
                return node; 
            }
        }
        return node;
    }

    #_find_min(node) {
        if(!node.left) { return node.value; }
        return this.#_find_min(node.left);
    }

    #_find_max(node) {
        if(!node.right) { return node.value; }
        return this.#_find_max(node.right);
    }

    #_get_height(node) {
        if(!node) { return 0; }
        let left = this.#_get_height(node.left);
        let right = this.#_get_height(node.right);
        return Math.max(left, right) + 1; 
    }

    #_inorder(node, result) {
        if (!node) return result;
        this.#_inorder(node.left, result);
        result.push(node.value);
        this.#_inorder(node.right, result);
        return result;
    }

    #_preorder(node, result) {
        if (!node) return result;
        result.push(node.value);
        this.#_preorder(node.left, result);
        this.#_preorder(node.right, result);
        return result;
    }

    #_postorder(node, result) {
        if (!node) return result;
        this.#_postorder(node.left, result);
        this.#_postorder(node.right, result);
        result.push(node.value);
        return result;
    }
    countNodes() {
    if(!this.#root) { return 0; }
    function helper(node) {
        if(!node) { return 0; }
        if(!node.left && !node.right) { return count; }
        return 1 + helper(node.left) + helper(node.right);
    }
    return helper(this.#root);
}
}

let bst = new BST();
bst.insertR(10);
bst.insertR(7);

bst.insertR(4);
bst.insertR(20);
bst.insertR(34);
bst.insertR(18);



bst.insertI(15);
//bst.delete(10);

//bst.insertI(14);
//bst.insertI(13);
console.log(bst.inorder_rec());

 console.log(bst.validate_BST());
// console.log(bst.size());
// console.log(bst.contains(20));
// console.log(bst.get_depth(15));
// console.log(bst.find_max());
// console.log(bst.get_height());
// for(let [key,val] of bst.entries()) {
//     console.log(key, val);
// };
// for (let value of bst) {
//     console.log(value); 
// }
console.log(bst.find_successor(30));
console.log(bst.is_balanced());
console.log(bst.countNodes())