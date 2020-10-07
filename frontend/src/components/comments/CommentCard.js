import React from 'react'
import { Card } from 'react-bootstrap'

const CommentCard = ({ text, rating, owner }) => {
  return (
    <Card className='comment-view-card'>
      <Card.Body>
        <Card.Title> { owner.username } </Card.Title>
        <Card.Subtitle> { text } </Card.Subtitle>
        <p> {`I give this a ${rating} star rating!`} </p>
      </Card.Body>
    </Card>
  )
}

export default CommentCard

// import React from 'react'
// import { Card } from 'react-bootstrap'
// import { getSingleBeans } from '../../lib/api'

// class CommentCard extends React.Component {
//   state = {
//     comments: ['']
//   }

//   async componentDidMount() {
//     const commentId = this.props.match.params.id
//     // console.log(this.props.match.params.id)
//     const response = await getSingleBeans(commentId)
    
//     this.setState({
//       product: response.data
//     })
//   }
  
//   render() {
//     console.log(this.state)
//     const { product } = this.state
//     if (!product) return <div>Loading...</div>
//     return (
//       <Card classname='comment-view-card'>
//         <Card.body>
//           <Card.Title> { this.state.product.comments.owner } </Card.Title>
//           <Card.Subtitle> { this.state.product.comments.text } </Card.Subtitle>
//           <p> {`I give this a ${this.state.product.comments.rating} star rating!`} </p>
//         </Card.body>
//       </Card>
//     ) 
//   }
// }

// export default CommentCard
