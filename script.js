async function fetchData() {
    const output = document.getElementById('data-output');
    output.innerHTML = "Loading...";
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error("Network error");
        
        const data = await response.json();
        output.innerHTML = '<ul>' + data.slice(0, 5).map(user => `<li>${user.name} - ${user.email}</li>`).join('') + '</ul>';
    } catch (error) {
        output.innerHTML = `Error fetching data: ${error.message}`;
    }
}