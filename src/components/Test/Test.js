import { useState } from "react"
import { useEffect } from "react/cjs/react.development"

export const Test = () => {
    const [bookData, setBookData] = useState([])

    useEffect(
        () => {
            fetch("https://www.googleapis.com/books/v1/volumes?q=discovery&AIzaSyBQtk7N-kKdKiRfzCU1dXdzKoWIVkoOjeo")
                .then(response => response.json())
                .then((data) => {
                    setBookData(data.items)
                }
                )
        }, []
    )

    

    return (
        <>
            {
                bookData.map(item => item.volumeInfo.title).join(", ")
            }
        </>
    )
}