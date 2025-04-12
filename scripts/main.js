// Load projects from JSON
fetch('assets/projects.json')
    .then(response => response.json())
    .then(projects => {
        const container = document.getElementById('projects-container');
        projects.forEach(project => {
            container.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card h-100">
                        <img src="${project.image}" class="card-img-top" alt="${project.title}">
                        <div class="card-body">
                            <h5 class="card-title">${project.title}</h5>
                            <p class="card-text">${project.description}</p>
                            <div class="tags mb-2">
                                ${project.tags.map(tag => `<span class="badge bg-secondary me-1">${tag}</span>`).join('')}
                            </div>
                            <a href="${project.link}" class="btn btn-primary">View Project</a>
                        </div>
                    </div>
                </div>
            `;
        });
    });