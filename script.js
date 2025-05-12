function indexOfIgnoreCase(str, subStr) {
    if (subStr === "") return 0; // per standard indexOf behavior

    // Convert both strings to lowercase for case-insensitive comparison
    const lowerStr = str.toLowerCase();
    const lowerSubStr = subStr.toLowerCase();

    // Use built-in indexOf on lowercased strings
    return lowerStr.indexOf(lowerSubStr);
}
console.log(indexOfIgnoreCase("Hello World", "world")); // 6
console.log(indexOfIgnoreCase("apple", "Ple"));         // 2
console.log(indexOfIgnoreCase("test", "aaa"));          // -1
console.log(indexOfIgnoreCase("abc", ""));              // 0

