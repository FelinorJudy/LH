function removeDuplicates(arr: number[]): number[] {
    const result: number[] = [];
    const seen: { [key: number]: boolean } = {};
  
    for (const num of arr) {
      if (!seen[num]) {
        result.push(num);
        seen[num] = true;
      }
    }
  
    return result;
  }
