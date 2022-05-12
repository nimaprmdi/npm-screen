let BLGS = [
    {
        id: "1",
        name: "How to implement shaders in webGL.",
        tags: ["WebGl", "React", "Three.js"],
        featuredImageUrl: "/assets/images/projects/project-(1).jpg",
        projectUrl: "#",
        galleryImagesUrl: [
            "/assets/images/projects/cavatina/cavatina.jpg",
            "/assets/images/projects/cavatina/cavatina-2.jpg",
            "/assets/images/projects/cavatina/cavatina-3.jpg",
        ],
    },
    {
        id: "2",
        name: "How to implement shaders in webGL.",
        tags: ["Three.js", "3D"],
        featuredImageUrl: "/assets/images/projects/project-(1).jpg",
        projectUrl: "#",
        galleryImagesUrl: [
            "/assets/images/projects/cavatina/cavatina.jpg",
            "/assets/images/projects/cavatina/cavatina-2.jpg",
            "/assets/images/projects/cavatina/cavatina-3.jpg",
        ],
    },
    {
        id: "3",
        name: "How to implement shaders in webGL.",
        tags: ["3D"],
        featuredImageUrl: "/assets/images/projects/project-(1).jpg",
        projectUrl: "#",
        galleryImagesUrl: [
            "/assets/images/projects/cavatina/cavatina.jpg",
            "/assets/images/projects/cavatina/cavatina-2.jpg",
            "/assets/images/projects/cavatina/cavatina-3.jpg",
        ],
    },
    {
        id: "4",
        name: "How to implement shaders in webGL.",
        tags: ["React", "Three js"],
        featuredImageUrl: "/assets/images/projects/project-(1).jpg",
        projectUrl: "#",
        galleryImagesUrl: [
            "/assets/images/projects/cavatina/cavatina.jpg",
            "/assets/images/projects/cavatina/cavatina-2.jpg",
            "/assets/images/projects/cavatina/cavatina-3.jpg",
        ],
    },
];

const filterBlogByTag = (tag) => {
    return BLGS.filter((project) => project.tags.includes(tag));
};

const filterBlogById = (id) => {
    return BLGS.find((project) => project.id === id);
};

let tags = [];
BLGS.filter((project) => {
    project.tags.map((tag) => {
        if (!tags.includes(tag)) {
            tags.push(tag);
        }
    });
});

export { BLGS, filterBlogByTag, filterBlogById, tags };
