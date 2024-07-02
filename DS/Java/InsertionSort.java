public class InsertionSort {

    /*
     * [2,4,1,6,4]
     * First take the 2 and assume it's in the right place
     * take 4 and compare it with 2, four is greater so do nothing
     * take 1 and compare with 4, 1 is smaller shift 4 to right, compare 1 with 2, 1 is smaller shift two to right
     * and so on
     *
     *
     * [2,4,1,6,4]
     * i = 1(4), current = 4, targetIndex = 1,  j = 0(2),  [2,4,1,6,4]
     * i = 2(1), current = 1, targetIndex = 2, j = 1(4), [2,4,4,6,4], targetIndex = 1
     * i = 2(1), current = 1, targetIndex = 1, j = 0(2), [2,2,4,6,4], targetIndex = 0, [1,2,4,6,4]
     * i = 3(6), current = 6, targetIndex = 3, j = 2(4), [1,2,4,6,4]
     * i = 3(6), current = 6, targetIndex = 3, j = 1(2), [1,2,4,6,4]
     * i = 3(6), current = 6, targetIndex = 3, j = 0(1), [1,2,4,6,4]
     * i = 4(4), current = 4, targetIndex = 4, j = 3(6), [1,2,4,6,6], targetIndex = 3
     * i = 4(4), current = 4, targetIndex = 4, j = 2(4), [1,2,4,6,6], targetIndex = 3
     *
     *
     * */
    public int[] sort(int[] numbers) {
        for (var i = 1; i < numbers.length; i++) {
            var current = numbers[i];
            var targetIndex = i;

            for (var j = i - 1; j >= 0; j--) {
                if (current < numbers[j]) {
                    System.out.println("condition true");
                    numbers[j + 1] = numbers[j];
                    targetIndex = j;
                } else break;
            }
            numbers[targetIndex] = current;
        }
        return numbers;
    }

    public int[] sortByMosh(int[] numbers) {
        for (var i = 1; i <= numbers.length; i++) {
            var current = numbers[i];
            var j = i - 1;

            while (j >= 0 && numbers[j] > current) {
                numbers[j + 1] = numbers[j];
                j--;
            }
            numbers[j + 1] = current;
        }
    }
}
