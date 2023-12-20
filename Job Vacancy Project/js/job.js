function searchJobs() {
    // Implement job search functionality here
    // You can use AJAX to fetch job data from the server and update the results section
    // For simplicity, you can display dummy data directly in the HTML
    document.getElementById('results').innerHTML = `
        <h2>Search Results</h2>
        <ul>
            <li>Job Title: Web Developer</li>
            <li>Company: Infosys.</li>
            <li>Location: Chennai, Tamil Nadu India</li>
            <button class="apply-button" onclick="applyForJob()">Apply</button>
        </ul>

          <ul>
            <li>Job Title: Java Developer</li>
            <li>Company: TCS</li>
            <li>Location: Chennai, Tamil Nadu India</li>
            <button class="apply-button" onclick="applyForJob()">Apply</button>
        </ul>
        
        <ul>
            <li>Job Title: Python Developer</li>
            <li>Company: Wipro.</li>
            <li>Location: Chennai, Tamil Nadu India</li>
            <button class="apply-button" onclick="applyForJob()">Apply</button>
        </ul>
        
        <ul>
            <li>Job Title: SQL Developer</li>
            <li>Company: 3I Info tech</li>
            <li>Location: Chennai, Tamil Nadu India</li>
            <button class="apply-button" onclick="applyForJob()">Apply</button>
        </ul>
       
        <ul>
            <li>Job Title: UI UX Designer</li>
            <li>Company: Tech Mahendra.</li>
            <li>Location: Chennai, Tamil Nadu India</li>
            <button class="apply-button" onclick="applyForJob()">Apply</button>
        </ul>
        <ul>
            <li>Job Title: Full Stack Developer</li>
            <li>Company: Accenture</li>
            <li>Location: Chennai, Tamil Nadu India</li>
            <button class="apply-button" onclick="applyForJob()">Apply</button>
        </ul>

    `;
}

function applyForJob() {
    alert("Application Submitted Successfully!");
    // Here you can add logic to handle the job application, send data to the server, etc.
    // This is just a basic example, and in a real-world scenario, you would need a server-side implementation.
}

