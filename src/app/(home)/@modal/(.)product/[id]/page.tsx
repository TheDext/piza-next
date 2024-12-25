//@ts-nocheck
import Modal from '@/components/modal/modal';
import { productService } from '@/services/product.service';
import ChooseProduct from '@/components/chooseProduct/chooseProduct';

const ProductModal = async ({ params }) => {
    const { id } = await params;
    const { data } = await productService.getById(id);

    return <Modal>{<ChooseProduct product={data} />}</Modal>;
};
export default ProductModal;
