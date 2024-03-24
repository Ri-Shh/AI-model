import React from "react";
import styles from './models.module.css';
import RightBlogs from "../components/rightBlogs";
import { useState } from "react";

function Blogs() {
    const [task, setTask] = useState('All');
    const [library, setLibrary] = useState('All');

    return (
        <div className={styles.modelsPage}>
            <div className={styles.container}>
                <div className={styles.display}>
                    <RightBlogs task={task} library={library} />
                </div>
            </div>
        </div>
    );
}

export default Blogs;