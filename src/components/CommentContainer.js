import React from 'react';
import { USER_LOGo } from '../utils/constant';

const CommentContainer = () => {

    const commentData = [{
        name: "Harshit Choudhary",
        comment: "What do you want???",
        replies: [
            {
                name: "Harshit Choudhary",
                comment: "What do you want???",
                replies: [],
            },
            {
                name: "Harshit Choudhary",
                comment: "What do you want???",
                replies: [
                    {
                        name: "Harshit Choudhary",
                        comment: "What do you want???",
                        replies: [
                            {
                                name: "Harshit Choudhary",
                                comment: "What do you want???",
                                replies: [],
                            },
                        ],
                    },
                    {
                        name: "Harshit Choudhary",
                        comment: "What do you want???",
                        replies: [
                            {
                                name: "Harshit Choudhary",
                                comment: "What do you want???",
                                replies: [],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: "Harshit Choudhary",
        comment: "What do you want???",
        replies: [
            {
                name: "Harshit Choudhary",
                comment: "What do you want???",
                replies: [],
            },
            {
                name: "Harshit Choudhary",
                comment: "What do you want???",
                replies: [
                    {
                        name: "Harshit Choudhary",
                        comment: "What do you want???",
                        replies: [],
                    },
                    {
                        name: "Harshit Choudhary",
                        comment: "What do you want???",
                        replies: [],
                    },
                    {
                        name: "Harshit Choudhary",
                        comment: "What do you want???",
                        replies: [],
                    },
                ],
            },
            {
                name: "Harshit Choudhary",
                comment: "What do you want???",
                replies: [],
            },
        ],
    },
    {
        name: "Harshit Choudhary",
        comment: "What do you want???",
        replies: [],
    },
    {
        name: "Harshit Choudhary",
        comment: "What do you want???",
        replies: [],
    },
    {
        name: "Harshit Choudhary",
        comment: "What do you want???",
        replies: [],
    },
    {
        name: "Harshit Choudhary",
        comment: "What do you want???",
        replies: [
            {
                name: "Harshit Choudhary",
                comment: "What do you want???",
                replies: [],
            },
        ],
    },
    {
        name: "Harshit Choudhary",
        comment: "What do you want???",
        replies: [],
    },
    {
        name: "Harshit Choudhary",
        comment: "What do you want???",
        replies: [],
    },
    {
        name: "Harshit Choudhary",
        comment: "What do you want???",
        replies: [
            {
                name: "Harshit Choudhary",
                comment: "What do you want???",
                replies: [],
            },
        ],
    },
    ]

    const ShowComment = ({user})=>{
        const {name, comment} = user;
        return (
            <div className='flex shadow-sm hover:bg-gray-200 m-2 rounded-lg'>
                <img className='h-12 w-12' alt='user' src={USER_LOGo} ></img>
                <div className='pl-4 '>
                    <h1 className='font-bold text-lg'>{name}</h1>
                    <h1 className='text-base'>{comment}</h1>
                </div>
            </div>
        )
    }

    const CommentList = ({comments})=>{
        return comments.map((comment, index)=> 
        <div key={index}>
            <ShowComment user={comment}/>
            <div className='pl-5 border border-l-black'>
                <CommentList comments={comment.replies} />
            </div>
        </div>
    );
    }

  return (
    <div className='bg-gray-50 rounded-lg'>
        <h1 className='text-2xl font-bold m-2 p-2'>Comments</h1>
        <div>
            <CommentList comments={commentData}/>
        </div>
    </div>
  )
}

export default CommentContainer