//this function will get the pivot that will be used in quicksort
function pivot(arr, start=0, end=arr.length+1){
    const swap = (arr, idx1, idx2)=>([arr[idx1], arr[idx2]]= [arr[idx2], arr[idx1]]);
    var pivot = arr[start];
    var swapIdx = start;
    for(var i= start+1; i<arr.length; i++){
        if(pivot>arr[i]){
        swapIdx++;
        swap(arr, swapIdx,i)
    }
    }
    swap(arr, start, swapIdx)
    return swapIdx;
}

function quickSort(arr, left=0, right=arr.length-1){
    if(left<right){
    let pivotindex  = pivot(arr, left, right)
    quickSort(arr, left, pivotindex-1);
    quickSort(arr, pivotindex+1, right);
    }
   
    return arr;
    

}

module.exports = quickSort;

// as speed quicksort is O(n2)-when the pivot is the minmum number ore the maximum number, the best is to pick a midlle in this case
//and  O(n log n) in most of the rest, depends of the circumstances!!