import java.util.Scanner;

public class App {
  public static void main(String[] args) throws Exception {
    System.out.println("Enter a string to reverse it's words:\n");
    Scanner input = new Scanner(System.in);
    String sentence = input.nextLine();
    String[] words = sentence.split(" ");
    String reversedSentence = "";
    for (int i = 0; i < words.length; i++) {
      String reversedWord = "";
      for (int j = words[i].length() - 1; j >= 0; j--) {
        reversedWord += words[i].charAt(j);
      }
      reversedSentence += reversedWord + " ";
    }
    input.close();
    System.out.println(reversedSentence);
  }
}
