import React from 'react';

const Blogs = () => {
    return (
        <div className='container my-5'>
            <div className='my-2'>
                <h3>প্রশ্ন: Authentication vs Authorization?</h3>
                <p>উত্তর:
                    <br />
                    Authentication হচ্ছে এমন একটি প্রক্রিয়া যার মাধ্যমে ব্যবহাকারী বা প্রবেশকারী কে তা যাচাই করা হয়। এটি দ্বারা ব্যবহারকারী কে অথবা সে বৈধ কি না তা যাচাই করা হয়।
                    <br />
                    Authorization হচ্ছে এমন একটি প্রক্রিয়া যা নির্ধারণ করে কোন ব্যবহাকারী কোন রিসোর্স বা উপাদান গুলো অ্যাক্সেস করতে পারবে। এটির মাধ্যমে কোন ব্যবহার কারী কোন কোন রিসোর্স ব্যবহার করতে পারবে তার ক্ষমতা কে প্রকাশ করে।
                </p>
            </div>
            <hr />
            <div className='my-2'>
                <h3>প্রশ্ন: Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>উত্তর:
                    <br />
                    ফায়ারবেজ ব্যবহার করার কিছু কারণ:
                    <br />
                    ১. এটি রিয়েল টাইমে ডাটাবেসে ডাটা আদান প্রদান করে।
                    <br />
                    ২. Firebase রিয়েল টাইমে android, ios and web জুড়ে ডাটা syncing করতে পারবে।
                    <br />
                    ৩. তাছাড়া এটি রিয়েল টাইমে সাইটের অ্যানালাইসিস করে এবং error, crash and অ্যানালাইসিস রিপোর্ট প্রদান করে যা developer কে সাইট develop করতে ব্যাপক সহায়তা করে।

                    <br />
                    এছাড়াও আরো নানাবিধ সুবিধার কারণে আমরা firebase ব্যবহার করে থাকি।

                    <br />
                    <br />
                    ফায়ারবেজ এর বিকল্পসমূহ:
                    <br />
                    * Parse
                    <br />
                    * Back4App
                    <br />
                    * AWS Amplify etc.
                </p>
            </div>
            <hr />
            <div className='my-2'>
                <h3>প্রশ্ন: What other services does firebase provide other than authentication?</h3>
                <p>উত্তর:
                    <br />
                    Authentication ব্যতিত ফায়ারবেজ এর অন্যান্য সেবা গুলো:
                    <br />
                    1. Hosting
                    <br />
                    2. Google Analytics

                    <br />
                    3. Cloud Firestore


                    <br />
                    4. Cloud Messaging


                    <br />
                    5. Remote Config

                    <br />
                    6. Dynamic Links etc.
                </p>
            </div>
        </div>
    );
};

export default Blogs;