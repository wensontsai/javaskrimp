<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
</head>
<body>
<script>

function LinkedList(){
  this.head = null;
}

LinkedList.prototype.push = function(value){
    var node = {
        value : value,
        next : null
    };

    if(this.head === null){
        this.head = node;
    } else {
        var current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = node;
    }
// console.log(this.head);
}

LinkedList.prototype.delete = function(value){
    if(this.head.value === value){
        this.head = this.head.next;
    } else {
        var current = this.head;
        while(current.next){
            var previous = current;
            current = current.next;
            if(current.value === value){
                previous.next = current.next;
                break;
            }
        }
    }

console.log(this.head);
}

LinkedList.prototype.stackPop = function(){

    current = this.head
    if(current.next === null){
        return current.value;
    }

    while(current.next !== null){
        previous = current;
        current  = current.next;
        poppedValue = current.value;

    }
    // console.log(previous);
    // destroy links
    previous.next = null;
    console.log(previous);

   return poppedValue;
    }


LinkedList.prototype.KthFromEnd = function(kth){
    tail = this.head;

    while(kth > 0){
      tail = tail.next;
      kth--;
    }

    if(kth !== 0){
      return null;
    } else {
      while(tail){
        tail = tail.next;
        head = head.next;
      }
      return head;
    }

}


LinkedList.prototype.reverseNodes = function(){
    var current = this.head;
    var previous = null;
    var next = null;
    while(current){
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    this.head = previous;
    console.log(this.head);

}




var test = new LinkedList();
test.push(4);
test.push(5);
test.push(8);

// test.reverseNodes();
console.log("---");
test.stackPop();
test.stackPop();
test.stackPop();





</script>

</body>
</html>
