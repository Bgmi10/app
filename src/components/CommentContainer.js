import React from 'react'
import { Singlecomment } from './Singlecomment'

export const CommentContainer = () => {


    const dataa = [
            {
                username : "suashas",
                comments : 'siasdnasdsdlkkkkkkkkkkkkkalsdas',
                replies : [
                    {
                        username : 'subash',
                        comments : 'hello '
                    },
                    {
                        username : 'padikone',
                        comments : "ksasdadsa",
                        replies : [
                            {
                                username : 'usaej' ,
                                comments : 'asdiasdio',
                                replies :[
                                    {
                                        username : 'asidsd',
                                        comments : 'askdlasdasdalsd',
                                        replies : [
                                            {
                                                username : 'asdas',
                                                comments : 'sdaereroaeir'
                                            },
                                            {
                                                username : 'rajini',
                                                comments : 'hi'
                                            }
                                        ]
                                    },
                                    {
                                        username : 'vijay',
                                        comments : 'ho '
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
        {
            username : "suashas",
            comments : 'siasdnasdsdlkkkkkkkkkkkkkalsdas',
            replies : [
                {
                    username : 'subash',
                    comments : 'hello '
                },
                {
                    username : 'padikone',
                    comments : "ksasdadsa",
                    replies : [
                        {
                            username : 'usaej' ,
                            comments : 'asdiasdio',
                            replies :[
                                {
                                    username : 'asidsd',
                                    comments : 'askdlasdasdalsd',
                                    replies : [
                                        {
                                            username : 'asdas',
                                            comments : 'sdaereroaeir'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
  return (
    <div>
        <Singlecomment data={dataa} />
    </div>
  )
}


// what is DS 