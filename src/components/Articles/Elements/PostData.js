import React from 'react'
import '../articles.css'
const postData = (props) => {

    return (
        <div className="articlePostData">
            <div>
                Date:
                <strong>{props.data.date}</strong>
            </div>
            <div>
                Author:
                    <strong>{props.data.author}</strong>
            </div>

        </div>
    )
}

export default postData