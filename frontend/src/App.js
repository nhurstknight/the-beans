import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/common/navbar'
import Home from './components/common/home'
import Footer from './components/common/footer'

import BeansShow from './components/beans/BeansShow'
import BeansIndex from './components/beans/BeansIndex'

import RoasterShow from './components/roasters/RoasterShow'
import RoasterIndex from './components/roasters/RoasterIndex'

import Basket from './components/shop/basket'
import Checkout from './components/shop/Checkout'
import Payment from './components/shop/Payment'

import Register from './components/auth/Register'
import Login from './components/auth/Login'

import ProfilePage from './components/userprofile/ProfilePage'
import AccountEdit from './components/userprofile/AccountEdit'
import AddressEdit from './components/userprofile/AddressEdit'
import OrderConfirmation from './components/shop/OrderConfirmation'

class App extends React.Component {
  

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/beans/:id" component={BeansShow}/>
          <Route path="/beans" component={BeansIndex}/>
          <Route path="/roasters/:id" component={RoasterShow}/>
          <Route path="/roasters" component={RoasterIndex}/>
          <Route path="/basket" component={Basket}/>
          <Route path="/shipping" component={Checkout}/>
          <Route path="/payment" component={Payment}/>
          <Route path="/order" component={OrderConfirmation}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/profile/account" component={AccountEdit}/>
          <Route path="/profile/address" component={AddressEdit}/>
          <Route path="/profile" component={ProfilePage}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    )
  }
}
export default App