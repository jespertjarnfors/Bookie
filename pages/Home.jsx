import AppLayout from '../src/components/Layout/AppLayout';
import { CardBar } from '../src/components/Inventory/CardBar';


function Home() {
  return (
    <>
      <AppLayout>
        <div className='main-box'>
          <CardBar></CardBar>
        </div>
      </AppLayout>
    </>
  );
}

export default Home;
