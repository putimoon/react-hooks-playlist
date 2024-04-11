import React, { useCallback } from 'react'
import Form from './Form'

function Product({ theme, productId, body }) {
    // just for test. this function in not complete. (post) does not exits.
    const handleSubmit = useCallback(() => {
        post("/product/" + productId, {
            body
        })
    }, [productId, body])
    // skip re-rendering in this section with useCallback and memo in <Form /> component.
    return (
        <div className={theme}>
            <Form onSubmit={handleSubmit} />
        </div>
    )
}

export default Product