let PRJCTS = [
    {
        id: "1",
        name: "How to implement shaders in webGL.",
        tags: ["WebGl", "React", "Three.js"],
        imageUrl: "/assets/images/projects/project-(1).jpg",
        projectUrl: "#",
    },
    {
        id: "2",
        name: "How to implement shaders in webGL.",
        tags: ["Three.js", "3D"],
        imageUrl: "/assets/images/projects/project-(1).jpg",
        projectUrl: "#",
    },
    {
        id: "3",
        name: "How to implement shaders in webGL.",
        tags: ["3D"],
        imageUrl: "/assets/images/projects/project-(1).jpg",
        projectUrl: "#",
    },
    {
        id: "4",
        name: "How to implement shaders in webGL.",
        tags: ["React", "Three js"],
        imageUrl: "/assets/images/projects/project-(1).jpg",
        projectUrl: "#",
    },
];

const filterProjectByTag = (tag) => {
    return PRJCTS.filter((project) => project.tags.includes(tag));
};

const filterProjectById = (id) => {
    return PRJCTS.find((project) => project.id === id);
};

let tags = [];
PRJCTS.filter((project) => {
    project.tags.map((tag) => {
        if (!tags.includes(tag)) {
            tags.push(tag);
        }
    });
});

export { PRJCTS, filterProjectByTag, filterProjectById, tags };
