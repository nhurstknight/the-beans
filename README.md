#  SEI-project-3 - The Beans

Due to technical issues with the deployment of this site has been delayed, a link will be available shortly.

![The Beans homepage](/homepage.png)

## Brief
The brief for this project was to build a full-stack MERN application.

The technical requirements were as follows:
- Build a full-stack application.
- Use an Express API to serve your data from a Mongo database.
- Consume your API with a separate front-end built with React.
- Be a complete product  with multiple relationships and CRUD functionality for at least 2 models.
- Have a visually impressive design.
- Be deployed online.

## Technologies & Tools

**Tech:** React, JavaScript, Node.js, Express, MongoDB, Mongoose, Sass, React-tostify, React-Bootstrap, Axios, React-router-dom

**Tools:** VSCode, Eslint, Git & GitHub, npm

## Contributors & Timeline
This was a group project that I developed with [Lewis Jones](https://github.com/LewisJones0) and [Shahab Khan](https://github.com/izzleshab). We were given 9 days in total to plan and build the application.

## Overview 
The beans is an e-commerce application that connects coffee bean roasters to consumers. The site allowed consumers to shop products sourced from multiple roasters based in London. It also allowed consumers to view the profiles of roasters to learn more about their profile and background.

**Examples of the finished website**

![The Beans shop with us page](/beans-index.png)

![The Beans product details page](/beans-show.png)

## Process
### Planning
Due to the scale of the project, myself and my course mates felt it was vital that we spent time planning the project. Once we had bounced a few ideas for the application, we settled on The Beans as we felt it would be a challenging and exciting project to build.

Communication during the project was key, so we agreed in the early stages to use Trello for our planning. This proved to be a very effective project management tool as we could easily track the progress of our project in real time, add any ideas we had during the build and note down any bugs that we needed to fix. We also felt it was vital to have wireframes to follow so we had a clear direction for the user journey when building the application.

### Build
Once we were happy with our plan and had signed it off with our course instructors, we moved onto setting up the repo and boilerplate for the project as a team. We also set up our models for beans and roasters as team so that we could each spend time populating seed data for our database.

After the group planning and set-up was complete, we divided the workload so that we could each had the opportunity to implement functionality of the website on the front-end and back-end. The features that I built included:

- Writing the back-end controllers for the products.
- Setting up the front-end React.
- writing the code for product components (BeansIndex, BeansCard, BeansShow).
- Writing the back-end models, views and controllers for the basket.
- Implementing the front-end API RESTful functions for the basket.
- Writing code for shop components.
- Refactoring code for all forms on The Beans to ensure a consistent front end layout.
- Implementing styling across The Beans.

## Wins & Challenges
On this project the biggest challenge and win for me was writing the code for the basket functionality. Initially we had planned to use a plugin for this feature, however, after researching documentation and trying to implement a plugin we went back to the drawing board. Following a discussion with the course instructors we decided to write the code for this section rather than using a plugin.

I started this process by building the back-end functionality:

**Code snippet of back-end controllers**
```js
async function basketIndex(req, res, next) {
  try {
    const userBasket = await User.findById(req.currentUser._id)
      .populate('basket.product')
    if (!userBasket) throw new Error(notFound)
    res.status(200).json(userBasket)
  } catch (err) {
    next(err)
  }
async function basketCreate(req, res, next) {
  try {
    const userBasket = await User.findById(req.currentUser._id)
    const basketItem = { ...req.body }
    if (!userBasket) throw new Error(notFound)
    userBasket.basket.push(basketItem)
    await userBasket.save()
    res.status(201).json(userBasket)
  } catch (err) {
    next(err)
  }
}
```

Once that was complete I wrote the front-end API requests, which could be called in the different components of the front-end as required.

**Code snippet of front-end API requests**
```js
export const getUserBasket = () => {
  return axios.get(`${baseUrl}/basket`, withHeaders())
}
export const addItem = product => {
  return axios.post(`${baseUrl}/basket`, { product }, withHeaders())
}
export const removeItem = (_id) => {
  console.log(_id)
  return axios.put(`${baseUrl}/basket/${_id}`, null, withHeaders())
}
export const deleteBasket = () => {
  return axios.delete(`${baseUrl}/basket`, withHeaders())
}
```

**Code snippet of basket component**
```js,xml
class Basket extends React.Component {
  state = {
    basket: []
  } 

  removeItemsToast = () => {
    toast.warn('Removed all items!', { position: toast.POSITION.BOTTOM_RIGHT })
  }
  
  async componentDidMount() {
    const response = await getUserBasket()
    console.log(response.data.basket)
    this.setState({
      basket: response.data.basket
    })
  }
  
  handleClick =  async () => {
    await deleteBasket()
    console.log('clicked')
    this.setState({
      basket: []
    })
    toast.success('Successfully removed all items from basket!', { position: toast.POSITION.BOTTOM_RIGHT })
    console.log(this.state.basket)
  }

  render() {
    return (
      <>
        {this.state.basket === [] ?
          <>
            <Container fluid className="beans-banner">
              <h1>Your basket</h1>
            </Container>
            <Container fluid className="empty-basket">
              <h1>Your basket is empty</h1>
              <Link to="/beans">
                <Button variant="Light" size="lg">Back to shop</Button>
              </Link>
            </Container>
          </>
          :
          <>
            <Container fluid className="beans-banner">
              <h1>Your basket</h1>
            </Container>
            <Container className="user-basket">
              <h4>Basket Summary</h4>
              { this.state.basket.map(item => (
                <BasketItem
                  key={item._id}
                  {...item} />
              )) }
              <Container fluid className="checkout-btn-group">
                <Button
                  onClick={this.handleClick}
                  className="delete-basket-btn"
                  variant="danger" 
                  type="submit"
                  block>
                  Remove all items
                </Button>
                <Button
                  className="checkout-btn"
                  variant="success"
                  type="submit"
                  block>
                  <Link to="/shipping">
                  Proceed to checkout
                  </Link> 
                </Button>
              </Container>
            </Container>
          </>
        }
      </>
    )
  }
}

export default Basket
```

I also built reusuable components for the basket functionality such as the AddItemButton so that could be used in muitple places on the site.

**Code snippet of AddItemButton**
```js,xml
class AddItemButton extends React.Component {
  state = {
    isConfirming: false
  }

  handleClick = () => {
    this.setState({ isConfirming: true })
  }

  cancel = () => {
    this.setState({ isConfirming: false })
  }

  sendRequest = async () => {
    await addItem(this.props.product)
    this.setState({ isConfirming: false })
    toast.success('Added to basket!', { position: toast.POSITION.BOTTOM_LEFT })
  }

  render() {
    return (
      <>
        {this.state.isConfirming ?
          <>
            <Button variant="success" className="basket-btns" onClick={this.sendRequest}>{confirm}</Button>
            <Button variant="danger" className="basket-btns" onClick={this.cancel}>{cancel}</Button>
          </>
          :
          <Button
            onClick={this.handleClick}
            variant="primary"
            type="submit"
            className="add-btn basket-btns">
            { basket }
          </Button>
        }
      </>
    )
  }
}

export default AddItemButton
```

The process of building this was really beneficial as it helped me to grasp the core concepts we had covered during class and understand how the back-end and front-end work together. 

## Future features
- Write a function that will calculate the basket total.
- Add search functionality on the nabber to search products and roasters.
- Update the UI for the shopping basket to a modal.
- Implement a media management service such as Cloudinary to manage image uploads.
- Implement maps using a service such as Mapbox on the roaster profile page.
- Display user profile image on user comments.
- Create an admin user profile with admin rights to Create, Update and Delete roasters and products from the website.

## Key Learnings
- Maintaining effective communication whilst colloborating on a group project.
- Building a back-end using a RESTful API framework.
- How to organise my codebase using the Model-View-Controller Pattern.
- Data modelling in MongoDB and the difference between embedded and referenced data. 
- How to utilise API endpoints to render the required data on the front-end.
-
