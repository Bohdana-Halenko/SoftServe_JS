//Task1
function sumSliceArray(arr, first, second) {
    if (
      isNaN(first) || isNaN(second) ||
      first >= arr.length || second >= arr.length ||
      first < 0 || second < 0
    ) {
      throw new Error("Невірні вхідні дані");
    }
    return arr[first] + arr[second];
  }
  try {
    const arr = [1, 2, 3, 4, 5];
    const result = sumSliceArray(arr, 2, 4);
    console.log(result); // 8
  
    const wrongResult = sumSliceArray(arr, 2, "4");
    console.log(wrongResult);
  } catch (error) {
    console.error(error.message);
  }


//Task2
