import { Component } from 'react/cjs/react.production.min';
import InfiniteScroll from 'react-infinite-scroller';
import AuthContext from '../authContext';
import { Navigate } from 'react-router-dom';

class Contacts extends Component{
  static contextType = AuthContext;
  static defaultProps = {
    contactsList : [
      {profile:"https://www.w3schools.com/howto/img_avatar.png",name:"User1"},
      {profile:"https://www.w3schools.com/howto/img_avatar.png",name:"User2"},
      {profile:"https://www.w3schools.com/howto/img_avatar.png",name:"User3"},
      {profile:"https://www.w3schools.com/howto/img_avatar.png",name:"User4"},
      {profile:"https://www.w3schools.com/howto/img_avatar.png",name:"User5"},
      {profile:"https://www.w3schools.com/howto/img_avatar.png",name:"User6"},
      {profile:"https://www.w3schools.com/howto/img_avatar.png",name:"User7"},
      {profile:"https://www.w3schools.com/howto/img_avatar.png",name:"User8"},
      {profile:"https://www.w3schools.com/howto/img_avatar.png",name:"User9"},
      {profile:"https://www.w3schools.com/howto/img_avatar.png",name:"User10"},
      {profile:"https://www.w3schools.com/howto/img_avatar.png",name:"User11"},
      {profile:"https://www.w3schools.com/howto/img_avatar.png",name:"User12"},
      {profile:"https://www.w3schools.com/howto/img_avatar.png",name:"User13"},
      {profile:"https://www.w3schools.com/howto/img_avatar.png",name:"User14"},
      {profile:"https://www.w3schools.com/howto/img_avatar.png",name:"User15"},
      {profile:"https://www.w3schools.com/howto/img_avatar.png",name:"User16"},
      {profile:"https://www.w3schools.com/howto/img_avatar.png",name:"User17"},
      {profile:"https://www.w3schools.com/howto/img_avatar.png",name:"User18"},
      {profile:"https://www.w3schools.com/howto/img_avatar.png",name:"User19"},
      {profile:"https://www.w3schools.com/howto/img_avatar.png",name:"User20"}
    ]
  }
  state={
    auth:this.context.auth,
    contactsList:this.props.contactsList
  }
  handleLogout=()=>{
    this.context.auth=false;
    this.setState({
      auth:false
    })

  }
  loadItems=()=>{
    setTimeout(()=>{
      var contacts = this.state.contactsList;
      contacts = [...contacts,...contacts];
      console.log(contacts);
      this.setState({
        contactsList:contacts
      })  
    },1000);
  }
  render(){
    let loader;
    if(this.state.auth){
      var items = [];
      this.state.contactsList.map(elem=>{
        items.push(
          <div key="name">
            <img src={elem.profile}/>
            <p>{elem.name}</p>
          </div>
        );
      })
      loader = <div className="loader">Loading ...</div>;
    }
    else{
      return <Navigate to="/" />
    }
    return(
      <div>
        <button onClick={this.handleLogout}>Logout</button>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadItems}
          hasMore={true}
          loader={loader}>
          <div className="tracks">
            {items}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
export default Contacts;
