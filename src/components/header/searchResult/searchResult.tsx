//@ts-nocheck
'use client';
import classes from './searchResult.module.scss';
import useProducts from '@/store/products.store';
import useUiActions from '@/store/uiActions.store';

const SearchResult = () => {
    const { products, productsLoading } = useProducts();
    const { blured } = useUiActions();

    if (blured) {
        if (productsLoading) {
            return (
                <div className={classes.searchResult}>
                    <div className={classes.searchResult__skeleton}></div>
                </div>
            );
        }
        if (products) {
            return (
                <div className={classes.searchResult}>
                    {!products.length
                        ? 'Ничего не найдено... ):'
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
