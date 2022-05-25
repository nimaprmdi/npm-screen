import React, { useState, useEffect } from "react";

const ProjectData = () => {
    const [jsonData, setJsonData] = useState();

    const getData = () => {
        fetch("https://api.jsonbin.io/v3/b/628cf34105f31f68b3a53e80/latest", {
            headers: {
                "X-Master-Key": "$2b$10$bvY9QBKocZQZ7j.5X1n3ouJw8fqObdDTX9WQFWnXeKY/a7ykQzmwq",
            },
        })
            .then(function (response) {
                console.log(response);
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson.record);
                setJsonData(myJson.record);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    return jsonData;
};

export default ProjectData;
