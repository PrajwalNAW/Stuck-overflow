import React from 'react'

import LeftSidebar from '../../LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css'

const Tags = () => {
    const tagsList = [{
        id: 1,
        tagName: "javascript",
        tagDesc: "For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations (<"
},{
        id: 2,
        tagName: "python",
        tagDesc: "Python is a multi-paradigm, dynamically typed, multipurpose programming language. It is designed to be quick"
},{
        id: 3,
        tagName: "c",
        tagDesc: "C# (pronounced 'see sharp') is a high level, statically typed, multi-paradigm programming language developed"
},{
        id: 4,
        tagName: "java",
        tagDesc: "Java is a high-level object oriented programming language. Use this tag when you're having problems using or"
},{
        id: 5,
        tagName: "php",
        tagDesc: "PHP is a widely used, open source, general-purpose, multi-paradigm, dynamically typed and interpreted scripti"
},{
        id: 6,
        tagName: "html",
        tagDesc: "HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be di"
},{
        id: 7,
        tagName: "android",
        tagDesc: "Android is Google's mobile operating system, used for programming or developing digital devices (Smartphones"
},{
        id: 8,
        tagName: "css",
        tagDesc: "CSS is a representation style sheet language used for describing the look and formatting of HTML, XML docume"
},{
        id: 9,
        tagName: "Reactjs",
        tagDesc: "React is a JavaScript library for building user interfaces. It uses a declarative, component-based paradigm"
},{
        id: 10,
        tagName: "node.js",
        tagDesc: "Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine anc"
    }]

    return (
        <div className="home-container-1">
            <LeftSidebar />
            <div className="home-container-2" style={{marginTop: "30px"}}>
                <h1 className='tags-h1'>Tags</h1>
                <p className='tags-p'>A tag is a keyword or label that categorizes your question with other, similar questions.</p>
                <p className='tags-p'>Using the right tags makes it easier for others to find and answer your question.</p>
                    <div className="tags-list-container">
                    {
                     tagsList.map((tag) => (
                     <TagsList tag={tag} key={tagsList.id}/>
            ))}
                </div>
            </div>
        </div>
    )
}

export default Tags
