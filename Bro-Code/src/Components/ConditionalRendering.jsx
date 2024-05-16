import React from 'react'

function ConditionalRendering(props) {

  const Welcome = <h2>
                  Welcome {props.username}
                  </h2>

  const TryAgain= <h2>
                  Please Log in  
                  </h2>              
  return (props.isLoggedin ? Welcome: TryAgain
    
  );
}

ConditionalRendering.defaultProps = {
  username : "Guest",
}

export default ConditionalRendering