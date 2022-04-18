import React from 'react';

const Blog = () => {
    return (
        <div className='container mt-5'>
            <h2>Difference between authorization and authentication?</h2>
            <p><strong>Answer:</strong>
                <ol>
                    <li>Authentication verifies the actual user, where authorization control user access.</li>
                    <li>Authentication works through use inputs like email address, password, finger print, OTP. On the overhand, authorization is controlled using setting defined by the organization.</li>
                    <li>Authorization is the first step of a secured well managed system where authentication is placed after authorization.</li>
                    <li>Authentication is visible and partially changed by the user. Authorization is not visible or changeable by user.</li>
              
                </ol>
            </p>
            <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p><strong>Answer:  </strong>
                There are multiple purpose of using firebase. We can build login system, can host and get realtime database. Below are the alternate to firebase:
                
                <ul>
                    <li>Auth0</li>
                    <li>MongoDB</li>
                    <li>Passport</li>
                    <li>Okta</li>
                    <li>JSON web token</li>
                    <li>Amazon cognito</li>
                    <li>Keycloak</li>
                </ul>
            </p>
            <h2>What other services does firebase provide other than authentication?</h2>
            <p><strong>Answer: </strong>
                Firebase provide below services other thant authentication:
                <ul>
                    <li>Realtime Database</li>
                    <li>Hosting</li>
                    <li>Test lab</li>
                    <li>Notifications</li>
                    <li>Cloud Firestore</li>
                    <li>Cloud function</li>
                    <li>Cloud storage</li>
                    <li>Google analytics</li>
                    <li>Predictions</li>
                    <li>Cloud messaging</li>
                    <li>Dynamic lins</li>
                    <li>Remote config</li>
                </ul>
            </p>
        </div>
    );
};

export default Blog;