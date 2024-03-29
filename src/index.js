import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            
            <ApprovalCard >
                <CommentDetail author="Sam" myImg={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail author="Dave" myImg={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail author="Steve" myImg={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));