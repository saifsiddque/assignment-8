import React from 'react';

const Blog = () => {
    return (
        <div>
            <br /><br />
            <h1 className='text-center'>Blog</h1>
            <div>
                <h3>How does react work?</h3>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</p>
            </div>
            <div>
                <h3>Props vs State</h3>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
            </div>
            <div>
                <h3>Usestate Uses</h3>
                <p>What is useState() in React ? The useState() is a Hook that allows you to have state variables in functional components . so basically useState is the ability to encapsulate local state in a functional component.</p>
            </div>
        </div>
    );
};

export default Blog;