const [names, setNames] = useState([]);

const extractNames = () => {
    const extractedNames = data.flatMap((group) => group.map((person) => person.name));
    setNames(extractedNames);
};

useEffect(() => {
    extractNames();
}, []);
const data = [
    [
        { name: 'John', age: 25 },
        { name: 'Alex', age: 35 }
        { name: 'Jane', age: 30 }
    ],
    [
        { name: 'Bob', age: 40 }
    ]
];

const flattenData = data.flat();
console.log(flattenData);
import ReactMarkdown from 'react-markdown';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');


    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };


    const reverseSentence = (sentence) => {
        const reversed = sentence.split(' ').reverse().join(' ');
        return reversed.charAt(0).toUpperCase() + reversed.slice(1);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <ReactMarkdown>{reverseSentence(markdown)}</ReactMarkdown>
        </div>
    );
};


export default MarkdownEditor;