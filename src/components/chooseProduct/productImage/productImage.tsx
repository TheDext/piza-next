//@ts-nocheck
import classes from '@/components/chooseProduct/chooseProduct.module.scss';

const productImage = ({ imageUrl }) => {
    return (
        <div className={classes.product__img}>
            <div className={classes.contour}>
                <div className={classes.contour__l}></div>
                <div className={classes.contour__m}></div>
                <div className={classes.contour__s}></div>
            </div>

            <img src={imageUrl} alt="food" />
        </div>
    );
};

export default productImage;
