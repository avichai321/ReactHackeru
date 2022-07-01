
import React, {useState} from "react";

 class UrlList extends React.Component
{
    
    constructor(props){
        super(props)
        this.state = {urls: urlLinksList(),valuechange:""};
        this.handleChange = this.handleChange.bind(this)
        this.AddUrlClick = this.AddUrlClick.bind(this)
        
    }

    AddUrlClick() {
        let tempstate = [...this.state.urls,this.state.valuechange]
        console.log(tempstate)
        this.setState({urls: tempstate})
    };


     handleChange(e){
        let x = e.target.value
        this.setState({valuechange : x})
       }
    
    render() {
        return(
            <div>
                <h2>Url list</h2>
                <input type="text" value = {this.Urlvalue} placeholder="Enter url" onChange={this.handleChange}/>
                <button onClick={this.AddUrlClick}>add new url</button> 
            <div>               
            <ul>
                {this.state.urls.map(urls1 => {
                    return <li key={urls1}>{urls1}</li>;
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


  