import AppLayout from '../src/components/Layout/AppLayout';
import AddProductForm from '../src/components/AddProduct/AddProductForm';

function AddProduct() {
  return (
    <>
      <AppLayout>
        <div className='main-box'>
          <AddProductForm></AddProductForm>
        </div>
      </AppLayout>
    </>
  );
}

export default AddProduct;