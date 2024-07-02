import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");

        BubbleSort bubbleSorter = new BubbleSort();

        var numbers = new int[]{1, 3, 4, 2, 7};
//        var sortedNumbers = bubbleSorter.sort(numbers);
//        var sortedNumbers = new SelectionSort().sort(numbers);
        var sortedNumbers = new InsertionSort().sort(numbers);

        System.out.println(Arrays.toString(sortedNumbers));
    }
}
