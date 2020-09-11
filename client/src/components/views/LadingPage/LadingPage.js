import React, {useEffect} from 'react'
import axios from 'axios';

function LadingPage() {
    useEffect(() => {
        axios.get('/api/hello')
            .then(response => { console.log(response) })
    }, [])

    return (
        <div>
            LadingPage 랜딩페이지
        </div>
    )
}

export default LadingPage
