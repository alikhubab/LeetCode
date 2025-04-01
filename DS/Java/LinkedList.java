import java.util.NoSuchElementException;

public class LinkedList {

    private Node first;
    private Node last;
    private int count;

    public void addFirst(int item) {
        Node node = new Node(item);
        if (isEmpty())
            first = last = node;
        else {
            node.next = first;
            first = node;
        }
        count++;
    }

    public void addLast(int item) {
        var node = new Node(item);
        if (isEmpty()) first = last = node;
        else last.next = last = node;
        count++;
    }

    private boolean isEmpty() {
        return first == null;
    }

    public void deleteFirst() {
        if (isEmpty()) throw new NoSuchElementException();

        if (first == last)
            first = last = null;
        else {
            var second = first.next;
            first.next = null;
            first = second;
            count--;
        }
    }

    public void deleteLast() {
        if (isEmpty()) throw new NoSuchElementException();

        if (first == last)
            first = last;
        else {
            var previous = getPrevious(last);
            last = previous;
            last.next = null;
            count--;
        }
    }

    public boolean contains(int item) {
        return indexOf(item) != -1;
    }

    public int indexOf(int item) {
        Node pointer = first;
        int index = 0;
        while (pointer != null) {
            if (pointer.value == item) return index;
            pointer = pointer.next;
            index++;
        }
        return -1;
    }

    public void print() {
        Node pointer = first;
        while (pointer != null) {
            System.out.println(pointer.value);
            pointer = pointer.next;
        }
    }

    private Node getPrevious(Node node) {
        var current = first;
        while (current != null) {
            if (current.next == node) return current;
            current = current.next;
        }
        return null;
    }

    public int size() {
        return count;
    }

    public int[] toArray() {
        int[] array = new int[count];
        int index = 0;
        Node current = first;
        while (current != null) {
            array[index++] = current.value;
            current = current.next;
        }

        return array;
    }

    public void reverse() {
        if (isEmpty()) return;
        var _1stPointer = first;
        var _2ndPointer = first.next;

        while (_2ndPointer != null) {
            var _3rdPointer = _2ndPointer.next;
            _2ndPointer.next = _1stPointer;
            _1stPointer = _2ndPointer;
            _2ndPointer = _3rdPointer;
        }

        last = first;
        last.next = null;
        first = _1stPointer;
    }

    public int getKthFromTheEnd(int k) {
        if (isEmpty()) throw new IllegalStateException();
        var forward = first;
        var rear = first;

        for (int i = 1; i < k; i++) {
            forward = forward.next;
            if (forward == null) throw new IllegalArgumentException();
        }

        while (forward != last) {
            forward = forward.next;
            rear = rear.next;
        }
        return rear.value;
    }


    private void swapAdjacent() {
        if (first == null) {
            return;
        }
        Node newHead = swapAdjacent(first);
    }

    //    1 -> 2 -->3 -->4  --> 5
    private Node swapAdjacent(Node head) {
        if (head.next == null) {
            return head;
        }

        Node temp = head;
        head = head.next;
        temp.next = head.next;
        head.next = temp;

        if (temp.next != null) {
            Node newHead = swapAdjacent(temp.next);
            temp.next = newHead;
        }
        return head;
    }

    public class Node {
        public int value;
        public Node next;

        Node(int value) {
            this.value = value;
        }
    }
}
