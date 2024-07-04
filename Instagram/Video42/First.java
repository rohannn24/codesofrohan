public class First{
    public static void reverse(int arr[], int start, int end){
        while(start<end){
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
    public static void main(String[] args){
        int arr [] = {8,4,3,7,9};
        int n = 2;
        reverse(arr, 0, n-1);
        reverse(arr, n, arr.length-1);
        reverse(arr, 0, arr.length-1);

        for(int i = 0; i<arr.length; i++){
            System.out.print(arr[i] + " ");
        }
    }
}