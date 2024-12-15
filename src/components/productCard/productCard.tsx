//@ts-nocheck
import classes from './productCard.module.scss';

const ProductCard = ({ id, name, imageUrl, price }) => (
    <div className={classes.productCard} key={id}>
        <div className={classes.productCard__img}>
            <img src={imageUrl} alt="еда" />
        </div>
        <div className={classes.productCard__name}>{name}</div>
        <div className={classes.productCard__description}>
            Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты,
            соус альфредо, чеснок
        </div>
        <div className={classes.productCard__bottom}>
            <div className={classes.productCard__price}>
                от <span>{price}</span>
            </div>
            <div className={classes.productCard__add}>Добавить</div>
        </div>
    </div>
);

export default ProductCard;
