//@ts-nocheck
'use client';
import classes from './searchResult.module.scss';
import useProducts from '@/store/products.store';
import useUiActions from '@/store/uiActions.store';

const SearchResult = () => {
    const { products } = useProducts();
    const { blured } = useUiActions();

    if (blured) {
        if (products) {
            return (
                <div className={classes.searchResult}>
                    {!products.length
                        ? 'Нет'
                        : products.map(({ id, name, imageUrl }) => (
                              <div
                                  className={classes.searchResult__item}
                                  key={id}
                                  onClick={() => 'click'}
                              >
                                  <img src={imageUrl} alt={name} />
                                  {name}
                              </div>
                          ))}
                </div>
            );
        }
    }
};

export default SearchResult;
