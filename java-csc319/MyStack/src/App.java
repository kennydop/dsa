import java.util.Scanner;

public class App {
  private static String handleReversingSentenceWords(String[] words) {
    String reversedSentence = "";
    for (int i = 0; i < words.length; i++) {
      String reversedWord = "";
      MyStack stack = new MyStack(words.length + 1);
      for (int j = words[i].length() - 1; j >= 0; j--) {
        stack.push(Character.toString(words[i].charAt(j)));
      }
      reversedWord = stack.contents();
      reversedSentence += reversedWord + " ";
    }
    return reversedSentence;
  }

  public static void main(String[] args) throws Exception {
    MyStack stack = new MyStack(5);
    boolean exited = false;
    Scanner input = new Scanner(System.in);

    while (!exited) {
      System.out
          .print(
              "\nEnter: \n1: Push to the stack. \n2: Pop from the stack. \n3: Peek the last item in the stack. \n4: Reverese words in a sentence \n5: Exit the program. \n");
      int operation = input.nextInt();
      switch (operation) {
        case 1:
          System.out.println("Enter what you want to push to the stack: ");
          String str = input.nextLine();
          stack.push(str);
          System.out.println(stack.toString());
          break;
        case 2:
          stack.pop();
          System.out.println(stack.toString());
          break;
        case 3:
          System.out.println(stack.peek());
          break;
        case 4:
          System.out.println("Enter a string to reverse it's words:\n");
          Scanner _sinput = new Scanner(System.in);
          String sentence = _sinput.nextLine();
          System.out.println(sentence);
          String[] words = sentence.split(" ");
          System.out.println(handleReversingSentenceWords(words));
          _sinput.close();
          break;
        case 5:
          exited = true;
          System.exit(1);
          break;
        default:
          System.out.println("Invalid input");
          break;
      }
    }
    input.close();
  }
}
