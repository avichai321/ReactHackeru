
import React from "react";
import validator from "validator";

 class UrlList extends React.Component
{
    
    constructor(props){
        super(props)
        this.state = {urls: urlLinksList(),valuechange:"", EditClicked : []};
        this.handleInputUrlBoxChange = this.handleInputUrlBoxChange.bind(this)
        this.AddUrlClick = this.AddUrlClick.bind(this)
        this.SortUrlList = this.SortUrlList.bind(this)
        this.RemoveUrlClick =this.RemoveUrlClick.bind(this)
        this.EditUrlClick = this.EditUrlClick.bind(this)
        this.FinishUpdate= this.FinishUpdate.bind(this)
     
    }

    AddUrlClick() {
        let tempstate = [...this.state.urls,this.state.valuechange]
        if (this.state.valuechange === ""){
            return(
                alert("please Enter a Url")
            );
        }
        else{
            if (validator.isURL(this.state.valuechange))
                {
                    if (this.state.urls.includes(this.state.valuechange)){
                        alert("this url is already exist please enter other")
                    }
                    else{
                        this.setState({urls: tempstate , valuechange : "" , newaddUrl : ""})
                    }   
                }
            else
                {
                        alert("Please Enter Valid Address")
                }
               
        }
    };


    handleInputUrlBoxChange(e){
        let x = e.target.value
        this.setState({valuechange : x})
    }
    
    SortUrlList()
    {
            let tempsortlist =this.state.urls.sort((a,b) => {
                return a.urls > b.urls ? 1: -1
            })
            this.setState({urls : tempsortlist})
    }
        
    RemoveUrlClick(u){
       let tempurllist = this.state.urls.filter((tempUrl) => tempUrl !== u.target.value)
       this.setState({urls : tempurllist})
    }
    
    EditUrlClick(u){
            let i = u.target.name
            this.setState({EditClicked : [...this.state.EditClicked,  i]})
    }
    
    FinishUpdate(u){
        if (validator.isURL(this.state.valuechange)){
            let o = u.target.name
            let oi = u.target.value
            let newlist = this.state.urls.filter((tempUrl) => tempUrl !== o)
            newlist.splice(oi ,0 , this.state.valuechange)
            let neweditlist= this.state.EditClicked.filter(((tempUrl) => tempUrl !== o))
            console.log(neweditlist)
            this.setState({urls: newlist , valuechange : "" , EditClicked : neweditlist})
            console.log(this.state.EditClicked)
        }
        else{
            return (
                alert("Please Enter Valid Address")
            );
        }
 
    }
   
    
    render() {
        return(
            <div>
                <h2>Url list</h2>
                <input type="text" value = {this.AddUrlvalue} placeholder="Enter url" onChange={this.handleInputUrlBoxChange}/>
                <button onClick={this.AddUrlClick}>add new url</button> 
                <button onClick={this.SortUrlList}>Sort url</button> 
            <div>               
            <ul>
                {this.state.urls.map((urls1,i) => {
                    return (<li key={urls1}>{urls1} <span></span> 
                    <button value={urls1} onClick={this.RemoveUrlClick}>Remove Url</button> 
                    {this.state.EditClicked.includes(urls1) === false && <button name = {urls1} value = {i} onClick={this.EditUrlClick}>Edit Url</button>}
                    <div>
                        {this.state.EditClicked.includes(urls1) === true && <input value={this.NewUrl} onChange={this.handleInputUrlBoxChange} type="text" placeholder="Enter New Url"></input> }
                        {this.state.EditClicked.includes(urls1) === true && <button name= {urls1}  value = {i} onClick={this.FinishUpdate} >Ok</button> }
                    </div>
                    </li>
                    )
                })}
            </ul>  
                </div>
            </div>);
            };
    
    
}
export default UrlList

function urlLinksList(){
    return(  [  
        'https://www.youtube.com/watch?v=ON8xpczPZAU',
        'https://www.youtube.com/watch?v=V3r-YGGsKpk',
        'https://www.youtube.com/watch?v=yCX7y6M9RUg',
        'https://www.youtube.com/watch?v=yOykfhhXDXM&t=2261s'        
    ]
    )
}


  