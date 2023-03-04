import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';

import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../utils/helpers'

const Filters = () => {
    const refContainer = useRef(null);

    const {
        filters: {
            text,
            category,
            company,
            color,
            minPrice,
            price,
            maxPrice,
            shipping,
        },
        updateFilters,
        clearFilters,
        allProducts,
    } = useFilterContext();

    const categories = getUniqueValues(allProducts, "category");
    const companies = getUniqueValues(allProducts, "company");
    const colors = getUniqueValues(allProducts, "color");

    useEffect(() => {
        refContainer.current.focus();
    }, []);

    return (
        <Wrapper>
            <div className='content'>
                <form onSubmit={(e) => e.preventDefault()}>
                    {/* __Search and Filter__ */}
                    <div className='form-control'>
                        <input
                            ref={refContainer}
                            type='text'
                            name='text'
                            placeholder='search'
                            className='search-input'
                            value={text}
                            onChange={updateFilters}
                        />
                    </div>

                    {/* categories */}
                    <div className='form-control'>
                        <h5>category</h5>
                        <div>
                            {categories.map((c, index) => (
                                <button
                                    onClick={updateFilters}
                                    name='category'
                                    type='button'
                                    key={index}
                                    className={`${category === c.toLowerCase() ? "active" : null
                                        }`}
                                >
                                    {c}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className='form-control'>
                        <h5>company</h5>
                        <select
                            name='company'
                            id='company'
                            value={company}
                            onChange={updateFilters}
                            className='company'
                        >
                            {companies.map((c, index) => (
                                <option key={index} value={c}>
                                    {c}
                                </option>
                            ))}
                        </select>
                    </div>
                    {/* colors */}
                    <div className='form-control'>
                        <h5>colors</h5>
                        <div className='colors'>
                            {colors.map((c, index) => {
                                if (c === 'all') return (
                                    <button
                                        key={index}
                                        name='color'
                                        onClick={updateFilters}
                                        data-color='all'
                                        className={
                                            `${color === 'all' ? "all-btn active" : 'all-btn'}`}
                                    >
                                        all
                                    </button>
                                )
                                return (
                                    <button key={index}
                                        name='color'
                                        styled={{ background: c }}
                                        className={`${color === c ? 'active color-btn' : 'color-btn'
                                            }`}
                                        data-color={c}
                                        onClick={updateFilters}
                                    >
                                        {color === c ? <FaCheck /> : null}
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* Price range bar */}
                    <div className="form-control">
                        <h5>price</h5>
                        <p className='price'>{formatPrice(price)}</p>
                        <input
                            type='range'
                            name='price'
                            onChange={updateFilters}
                            min={minPrice}
                            max={maxPrice}
                            value={price}
                        />
                    </div>

                    <div className="form-control">
                        <label>Free shipping</label>
                        <input
                            type='checkbox'
                            name='shipping'
                            id='shipping'
                            checked={shipping}
                            onChange={updateFilters}
                        />
                    </div>
                </form>
                <button
                    type="button"
                    className='clear-btn'
                    onClick={clearFilters}
                >
                    Clear Filter
                </button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
`

export default Filters