if (name) {
    for (i = item; i; i = i.mark ? i.mark.group : null) {
        console.log(i); // Perform necessary operations with i
    }
}
