//@ts-nocheck
import classes from './productsList.module.scss';
const ProductsList = ({ products }) => {
    const filteredProductsList = [...products];

    return (
        <div className={classes.productsList}>
            {filteredProductsList.map(({ id, name, imageUrl }) => (
                <div className={classes.productsListColumn}>
                    <div className={classes.productsListItem} key={id}>
                        <div className={classes.productsListItem__img}>
                            <img src={imageUrl} alt="еда" />
                        </div>
                        <div className={classes.productsListItem__name}>
                            {name}
                        </div>
                        <div className={classes.productsListItem__description}>
                            Цыпленок, моцарелла, сыры чеддер и пармезан, сырный
                            соус, томаты, соус альфредо, чеснок
                        </div>
                        <div className={classes.productsListItem__bottom}>
                            <div className={classes.productsListItem__price}>
                                от <span>477</span>
                            </div>
                            <div className={classes.productsListItem__add}>
                                Добавить
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductsList;
