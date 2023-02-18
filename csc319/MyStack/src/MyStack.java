// Stack implementation in Java

class MyStack {
  // store elements of stack
  private String arr[];
  // represent top of stack
  private int top;
  // total capacity of the stack
  private int capacity;

  // Creating a stack
  MyStack(int size) {
    // initialize the array
    // initialize the stack variables
    arr = new String[size];
    capacity = size;
    top = -1;
  }

  // push elements to the top of stack
  public void push(String x) {
    if (isFull()) {
      // increase array size
      String[] temp = new String[arr.length * 2];
      System.arraycopy(arr, 0, temp, 0, arr.length);
      arr = temp;
    }
    // insert element on top of stack
    arr[++top] = x;
  }

  // pop elements from top of stack
  public String pop() {
    // if stack is empty
    // no element to pop
    if (isEmpty()) {
      System.out.println("STACK EMPTY");
      // terminates the program
      System.exit(1);
    }

    // pop element from top of stack
    return arr[top--];
  }

  public String peek() {
    if (isEmpty()) {
      System.out.println("STACK EMPTY");
      // terminates the program
      System.exit(1);
    }

    // return topmost element from the stack
    return arr[top];
  }

  // return size of the stack
  public int getSize() {
    return top + 1;
  }

  // check if the stack is empty
  public Boolean isEmpty() {
    return top == -1;
  }

  // check if the stack is full
  public Boolean isFull() {
    return top == capacity - 1;
  }

  // display elements of stack
  public String stackerize() {
    String stackStr = "______";
    for (int i = 0; i <= top; i++) {
      stackStr = ("| " + arr[i] + " |\n") + stackStr;
    }
    return stackStr;
  }

  public String toString() {
    String stackContents = "";
    for (int i = 0; i <= top; i++) {
      stackContents += arr[i];
    }
    return stackContents;
  }

}