let BLGS = [
    {
        id: "1",
        name: "How to implement shaders in webGL.",
        description:
            "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia",
        tags: ["WebGl", "React", "Three.js"],
        featuredImageUrl: process.env.PUBLIC_URL + "/assets/images/projects/project-(1).jpg",
        projectUrl: "#",
        galleryImagesUrl: [process.env.PUBLIC_URL + "/assets/images/projects/cavatina/cavatina.jpg"],
    },
    {
        id: "2",
        name: "How to implement shaders in webGL.",
        tags: ["Three.js", "3D"],
        featuredImageUrl: process.env.PUBLIC_URL + "/assets/images/projects/project-(1).jpg",
        projectUrl: "#",
        galleryImagesUrl: [
            process.env.PUBLIC_URL + "/assets/images/projects/cavatina/cavatina.jpg",
            process.env.PUBLIC_URL + "/assets/images/projects/cavatina/cavatina-2.jpg",
            process.env.PUBLIC_URL + "/assets/images/projects/cavatina/cavatina-3.jpg",
        ],
    },
    {
        id: "3",
        name: "How to implement shaders in webGL.",
        tags: ["3D"],
        featuredImageUrl: process.env.PUBLIC_URL + "/assets/images/projects/project-(1).jpg",
        projectUrl: "#",
        galleryImagesUrl: [
            process.env.PUBLIC_URL + "/assets/images/projects/cavatina/cavatina.jpg",
            process.env.PUBLIC_URL + "/assets/images/projects/cavatina/cavatina-2.jpg",
            process.env.PUBLIC_URL + "/assets/images/projects/cavatina/cavatina-3.jpg",
        ],
    },
    {
        id: "4",
        name: "How to implement shaders in webGL.",
        tags: ["React", "Three js"],
        featuredImageUrl: process.env.PUBLIC_URL + "/assets/images/projects/project-(1).jpg",
        projectUrl: "#",
        galleryImagesUrl: [
            process.env.PUBLIC_URL + "/assets/images/projects/cavatina/cavatina.jpg",
            process.env.PUBLIC_URL + "/assets/images/projects/cavatina/cavatina-2.jpg",
            process.env.PUBLIC_URL + "/assets/images/projects/cavatina/cavatina-3.jpg",
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
