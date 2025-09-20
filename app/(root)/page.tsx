import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'


const Home = () => {
  const loggedIn = {
    firstName: 'Musaib', lastName: "Xandra",
    email: "contact@musaibxandra.com"
  }

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox 
          accounts = {[]}
          totalBanks = {1}
          totalCurrentBalance = {1326.56}
          />
        </header>
        Recent transactions
      </div>
        <RightSidebar
          user={loggedIn}
          transactions={[]}
          banks={[{ currentBalance: 1323.55}, { currentBalance: 140.33}]}
          />
    </section>
  )
}

export default Home
