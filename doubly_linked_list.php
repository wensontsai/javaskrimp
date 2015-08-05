<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
</head>
<body>
<script>

function DoublyLinkedList(){
  this.head = null;
}

DoublyLinkedList.prototype.push = function(value){
    var current = this.head;
    var previous = this.head;

    if(this.head === null){
        this.head = {
            value : value,
            previous : null,
            next : null
        };
    } else {
        current = this.head;
        while(current && current.next){
            previous = current;
            current = current.next;
        }
        current.next = {
            value: value,
            previous: current,
            next: null
        };
    }
    console.log(this.head);

}

DoublyLinkedList.prototype.delete = function(value){
    if(value === this.head.value){
        this.head = this.head.next;
        this.head.previous = this.head;
    } else {
        current = this.head;
        while(current.next){
            if(current.value === value){
                previous.next = current.next;
                current.next.previous = previous;
                break;
            }
            previous = current;
            current = current.next;
        }
          if(current.next === null){
            previous.next = null;
        }
    }
    console.log('--- deleting ---');
    console.log(this.head);
}

DoublyLinkedList.prototype.reverseList = function(list){
  var head = list.head;
  var current = list.head;
  var temp = null;

  while(current){
    temp = current.next;
    current.next = current.previous;
    current.previous = temp;
    if(!temp){
        list.head = current;
    }
    current = temp;
  }
  console.log(" --- reversing list ---");
  console.log(list.head);
}


var dll = new DoublyLinkedList();
dll.push(6);
dll.push(7);
dll.push(9);
// dll.delete(9);
dll.reverseList(dll);


</script>

</body>
</html>
