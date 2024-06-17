import AccountView from '../src/components/Account/AccountView';
import AppLayout from '../src/components/Layout/AppLayout';

function Account() {
  return (
    <>
      <AppLayout>
        <div className='main-box'>
         <AccountView></AccountView>
        </div>
      </AppLayout>
    </>
  );
}

export default Account;