function mincost(arr) {
    // Edge case: if there's only one rope, no cost is required
    if (arr.length === 1) return 0;

    // Initialize the min-heap
    const minHeap = [...arr].sort((a, b) => a - b);

    let totalCost = 0;

    while (minHeap.length > 1) {
        // Remove the two smallest elements
        const first = minHeap.shift();
        const second = minHeap.shift();

        // Calculate the cost to connect these two ropes
        const cost = first + second;
        totalCost += cost;

        // Add the new rope back into the sorted list (min-heap)
        let pos = minHeap.findIndex(x => x > cost);
        if (pos === -1) minHeap.push(cost);
        else minHeap.splice(pos, 0, cost);
    }

    return totalCost;
}

// Test cases
console.log(mincost([4, 3, 2, 6])); // Output: 29
console.log(mincost([1, 2, 3, 4, 5])); // Output: 33
