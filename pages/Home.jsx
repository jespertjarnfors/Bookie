import AppLayout from '../src/components/Layout/AppLayout';
import { CardBar } from '../src/components/Home/Cards/CardBar';
import ProductList from '../src/components/Home/ProductList';


function Home() {
  return (
    <>
      <AppLayout>
        <div className='main-box'>
          <CardBar></CardBar>
          <ProductList></ProductList>
        </div>
      </AppLayout>
    </>
  );
}

export default Home;
