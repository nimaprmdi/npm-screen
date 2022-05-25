const filterProjectByTag = (PRJCTS, tag) => {
    return PRJCTS.filter((project) => project.tags.includes(tag));
};

const filterProjectById = (PRJCTS, id) => {
    return PRJCTS.find((project) => project.id === id);
};

const getProjectTags = (PRJCTS) => {
    let tags = [];

    PRJCTS.filter((project) => {
        project.tags.map((tag) => {
            if (!tags.includes(tag)) {
                tags.push(tag);
            }
        });
    });

    return tags;
};

export { filterProjectByTag, filterProjectById, getProjectTags };
