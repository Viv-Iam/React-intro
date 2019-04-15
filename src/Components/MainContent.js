import React from 'react'

const Content = (props) => (
    <div>
    <img src = {props.contact.imgUrl}  />
    <h1> {props.contact.name} </h1>
    <p> Phone: {props.contact.phone}</p>
    <p> Email: {props.contact.email}</p>
    </div>
)

const MainContent = () => (
    <div>
    <Content 
    contact = {{
      name: "Vivian",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhx__ky6R_8n9ey_cqjUBbYGw3zBzhX3h_mdwUbEI2Tflat3vo" , 
      phone: "0722821481",
      email: "vivian.opondoh@gmail.com"
    }}/>
    <Content 
    contact = {{
      name: "Sunday",
      imageUrl: "https://i.pinimg.com/236x/d2/71/37/d271376bde9a07209941cf1208e9c77a--african-beauty-african-women.jpg",  
      phone: "0733821481",
      email: "sunday@gmail.com"
    }}/>
    <Content 
    contact = {{
      name: "Hillary",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT40TG47gLMBiRxJBOykMfn7Xo3FbMKH88tH574IUroLAaM3Bpo",
      phone: "0744821481",
      email: "hillary@gmail.com"
    }}/>
    </div>
)


export default MainContent