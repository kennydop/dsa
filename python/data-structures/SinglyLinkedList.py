class Node:
    """
    An object for storing a single node in a linked list

    Attributes:
        data: Data stored in node
        next_node: Reference to next node in linked list
    """

    def __init__(self, data, next_node=None):
        self.data = data
        self.next_node = next_node

    def __repr__(self):
        return "<Node data: %s>" % self.data


class SinglyLinkedList:
    """
    Linear data structure that stores values in nodes. The list maintains a reference to the first node, also called head. Each node points to the next node in the list

    Attributes:
        head: The head node of the list
        length: length of the list (number of nodes in the list)
    """

    def __init__(self, head=None):
        if(head == None):
            self.head = head
            self.length = 0
        else:
            head_node = Node(head)
            self.head = head_node
            self.length = 1
        # Maintaining a count attribute allows for len() to be implemented in
        # constant time

    def is_empty(self):
        """
        Determines if the linked list is empty
        Takes O(1) time
        """

        return self.head is None

    def add(self, data):
        """
        Adds new Node containing data to head of the list
        Takes O(1) time
        """
        next_node = self.head
        node = Node(data, next_node)
        self.head = node
        self.length += 1

    def insert(self, data, index=0):
        """
        Inserts a new Node containing data at index position
        Insertion takes O(1) time but finding node at insertion point takes
        O(n) time.
        Takes overall O(n) time.
        """
        if index >= self.length:
            raise IndexError('index out of range')
        current_node = self.head
        current_index = 0
        if (index == 0):
            return self.add(data)

        while current_index < index - 1:
            current_node = current_node.next_node
            current_index += 1

        next_node = current_node.next_node
        current_node.next_node = Node(data, next_node)
        self.length += 1

    def pop(self):
        """
        Removes the head Node
        Takes O(1) time
        """
        head = self.head.next_node
        self.head = head
        self.length -= 1

    def remove(self, data):
        """
        Removes Node containing data that matches the `data` parameter
        Takes O(n) time
        """
        current_node = self.head
        if(self.head.data == data):
            self.pop()
        while current_node:
            if(current_node.next_node.data == data):
                current_node.next_node = current_node.next_node.next_node
                self.length -= 1
                break
            current_node = current_node.next_node

    def removeat(self, index=0):
        """
        Removes Node at specified index
        Takes O(n) time
        """
        if index >= self.length:
            raise IndexError('index out of range')
        if(index == 0):
            return self.pop()
        current_index = 0
        current_node = self.head
        while current_index < index - 1:
            current_node = current_node.next_node
            current_index += 1

        current_node.next_node = current_node.next_node.next_node
        self.length -= 1

    def find(self, data):
        """
        Search for the first node containing data that matches the `data` parameter
        Returns the node or `None` if not found
        Takes O(n) time
        """
        current_node = self.head
        while current_node:
            if(current_node.data == data):
                return current_node
            current_node = current_node.next_node
        return None

    def __len__(self):
        """
        Returns the length of the linked list
        Takesn O(1) time
        """

        return self.length

    def __repr__(self):
        """
        Return a string representation of the list.
        Takes O(n) time.
        """
        nodes = []
        current = self.head
        while current:
            if current is self.head:
                nodes.append("[Head: %s]" % current.data)
            elif current.next_node is None:
                nodes.append("[Tail: %s]" % current.data)
            else:
                nodes.append("[%s]" % current.data)
            current = current.next_node
        return ' -> '.join(nodes)
