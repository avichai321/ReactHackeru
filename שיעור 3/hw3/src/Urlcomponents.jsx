
import React from "react";

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
   
    }

    AddUrlClick() {
        let tempstate = [...this.state.urls,this.state.valuechange]
        if (this.state.valuechange === ""){
            return(
                alert("please Enter a Url")
            );
        }
        else{
            this.setState({urls: tempstate})
            this.state.valuechange = ""
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
 
   
    
    render() {
        return(
            <div>
                <h2>Url list</h2>
                <input type="text" value = {this.Urlvalue} placeholder="Enter url" onChange={this.handleInputUrlBoxChange}/>
                <button onClick={this.AddUrlClick}>add new url</button> 
                <button onClick={this.SortUrlList}>Sort url</button> 
            <div>               
            <ul>
                {this.state.urls.map((urls1,i) => {
                    return (<li key={urls1}>{urls1} {i} <span></span> 
                    <button value={urls1} onClick={this.RemoveUrlClick}>Remove Url</button> 
                    {this.state.EditClicked.includes(urls1) === false && <button name = {urls1} value = {i} onClick={this.EditUrlClick}>Edit Url</button>}
                    <div>
                        {this.state.EditClicked.includes(urls1) === true && <input value={this.state.valuechange} onChange={this.handleInputUrlBoxChange} type="text" placeholder="Enter New Url"></input> }
                        {this.state.EditClicked.includes(urls1) === true && <button value = {"urls1"} >Ok</button> }
                    </div>
                    </li>
                    )
                })}
            </ul>  
                
                {/* <button onClick={this.clearAll}>Erase everything</button> */}
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

//  function ShowAndAddTolist()
// {
   
//     const [UrlLinkList, SetUrlLinkList] = useState([ {url : 'https://www.youtube.com/watch?v=ON8xpczPZAU'},
//     {url :'https://www.youtube.com/watch?v=V3r-YGGsKpk'},
//     {url :'https://www.youtube.com/watch?v=yCX7y6M9RUg'},
//     {url :'https://www.youtube.com/watch?v=yOykfhhXDXM&t=2261s'}]);
                                

//         const AddUrlClick = () => {
//             SetUrlLinkList([...UrlLinkList, {url: ""}]);
//           };
//         const changeInputclick = (e, index) => {
//             const { name , value} = e.target;
//             const listurl = [...UrlLinkList];
//             listurl[index][name] = value;
//             SetUrlLinkList(listurl);
//         };
//         const RemoveUrlClick = index => {
//             const listurl = [...UrlLinkList];
//             listurl.splice(index, 1);
//             SetUrlLinkList(listurl);
//           };
//             return (
//             <div >

//                 {UrlLinkList.map((x,i) => {
//                 return (
//                     <div>
                        
//                     <input name="url" value={x.url} placeholder="Enter url" onChange={e => changeInputclick(e,i)}/>
//                     <div>
//                         {UrlLinkList.length !== 1 && <button onClick={RemoveUrlClick}>Remove</button>}
//                         {UrlLinkList.length - 1 === i && <button onClick={AddUrlClick} >Add</button>}
//                     </div>
//                     </div>
//                 );
//                 })}
//             </div>

        


//       );
    
     
// };


  