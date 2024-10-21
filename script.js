function mincost(arr) {
    // Edge case: if there's only one rope, no cost is needed
    if (arr.length <= 1) return 0;
    
    // Step 1: Sort the array to simulate a min-heap (smallest elements first)
    arr.sort((a, b) => a - b);
    
    let totalCost = 0;
    
    // Step 2: Combine ropes until only one rope remains
    while (arr.length > 1) {
        // Pop the two smallest ropes
        let first = arr.shift();
        let second = arr.shift();
        
        // Calculate the cost to connect these two ropes
        let cost = first + second;
        totalCost += cost;
        
        // Insert the combined rope back into the sorted array
        // Inserting it at the correct position to maintain sorted order
        arr.push(cost);
        arr.sort((a, b) => a - b);  // Sorting again to maintain the min-heap order
    }
    
    // Step 3: Return the total cost
    return totalCost;
}

// Test cases
console.log(mincost([4, 3, 2, 6])); // Output: 29
console.log(mincost([1, 2, 3, 4, 5])); // Output: 33
