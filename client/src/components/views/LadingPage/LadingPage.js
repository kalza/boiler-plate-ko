import React, {useEffect} from 'react'
import axios from 'axios';

function LadingPage() {


    useEffect(() => {
        axios.get('http://localhost:5000/api/hello')
        .then(response => console.log(response.data))        
        }, [])

    return (
        <div>
            LadingPage 랜딩페이지
        </div>
    )
}

export default LadingPage
