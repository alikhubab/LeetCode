public class BubbleSort {


    /*
     * {2, 6, 4, 7, 3, 8, 4, 3, 2}
     * i = 9, j = 0 ; sorted = true,
     *
     * */
    public int[] sort(int[] numbers) {
        boolean sorted;
        for (var i = numbers.length; i >= 0; i--) {
            sorted = true;
            for (var j = 0; j < i - 1; j++) {
                if (numbers[j] > numbers[j + 1]) {
                    swap(numbers, j, j + 1);
                    sorted = false;
                }
            }
            if (sorted)
                return numbers;
        }
        return numbers;
    }

    public int[] sortByMosh(int[] numbers) {
        boolean isSorted;
        for (var i = 0; i < numbers.length; i++) {
            isSorted = true;
            for (var j = 1; j < numbers.length - i; j++)
                if (numbers[i] < numbers[j - 1]) {
                    swap(numbers, j, j - 1);
                    isSorted = false;
                }
            if (isSorted)
                return numbers;
        }
        return numbers;
    }


    private void swap(int[] numbers, int index1, int index2) {
        var saved = numbers[index1];
        numbers[index1] = numbers[index2];
        numbers[index2] = saved;
    }

    /*
     * suppose we have array of 5 elements
     * We run first iteration on all the elements comparing adjacent elements --> this way largest moves to last
     * Then we run an iteration one less than the last --> moving second largest to second last
     * and so on
     * [5,3,7,1]
     * i = 4, j = 0, [3,5,7,1]
     * i = 4, j = 1, [3,5,7,1]
     * i = 4, j = 3, [3,5,1,7]
     *
     * i = 3, j = 0, [3,5,1,7]
     * i = 3, j = 1, [3,1,5,7]
     * i = 3, j = 2, [3,1,5,7]
     *
     * i = 2, j = 0, [1,3,5,7]
     * i = 2, j = 1, [1,3,5,7]
     *
     * */
}
