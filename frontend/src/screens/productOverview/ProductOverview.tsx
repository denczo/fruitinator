import React, { useEffect, useState } from 'react';
import './ProductOverview.sass';
import Product from './components/product/Product';
import { AnimatePresence } from 'framer-motion';
import { AppDispatch, RootState } from '../../stores/ReduxStore.tsx';
import { useSelector, useDispatch } from 'react-redux'
import { fetchProductPage } from '../../features/productSlice.tsx';

const ProductOverview = () => {
    const dispatch = useDispatch<AppDispatch>();
    const items = useSelector((state: RootState) => state.product.mutatedItems)

    const [page, setPage] = useState(1);

    const paginationElement = (pages) => {
        const divs = [] as any[];

        for (let i = 0; i < pages; i++) {
            divs.push(<button key={i + 1} onClick={() => setPage(i + 1)}>{i}</button>);
        }
        return <div>{divs}</div>;
    }

    useEffect(() => {
        dispatch(fetchProductPage(page))
    }, [page]);

    return (<div className="Container">
        <div className="ProductOverview">
            <AnimatePresence>
                {items ?
                    items?.items?.map((product, index) =>
                        <Product key={index} data={product} />
                    ) : <h3>Nothing found</h3>}
            </AnimatePresence>

        </div>
    </div>);
}

export default ProductOverview;