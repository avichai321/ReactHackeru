
import React, { useState } from "react";



export function ShowAndAddTolist()
{
    let Urllist=    [  
        {url : 'https://www.youtube.com/watch?v=ON8xpczPZAU'},
        {url :'https://www.youtube.com/watch?v=V3r-YGGsKpk'},
        {url :'https://www.youtube.com/watch?v=yCX7y6M9RUg'},
        {url :'https://www.youtube.com/watch?v=yOykfhhXDXM&t=2261s'}          
    ]

    const [UrlLinkList, SetUrlLinkList] = useState([ {url : 'https://www.youtube.com/watch?v=ON8xpczPZAU'},
    {url :'https://www.youtube.com/watch?v=V3r-YGGsKpk'},
    {url :'https://www.youtube.com/watch?v=yCX7y6M9RUg'},
    {url :'https://www.youtube.com/watch?v=yOykfhhXDXM&t=2261s'}]);
                                

        const AddUrlClick = () => {
            SetUrlLinkList([...UrlLinkList, {url: ""}]);
          };
        const changeInputclick = (e, index) => {
            const { name , value} = e.target;
            const listurl = [...UrlLinkList];
            listurl[index][name] = value;
            SetUrlLinkList(listurl);
        };
        const RemoveUrlClick = index => {
            const listurl = [...UrlLinkList];
            listurl.splice(index, 1);
            SetUrlLinkList(listurl);
          };
            return (
            <div >
                {UrlLinkList.map((x,i) => {
                return (
                    <div>
                    <input name="url" value={x.url} placeholder="Enter url" onChange={e => changeInputclick(e,i)}/>
                    <div>
                        {UrlLinkList.length !== 1 && <button onClick={RemoveUrlClick}>Remove</button>}
                        {UrlLinkList.length - 1 === i && <button onClick={AddUrlClick} >Add</button>}
                    </div>
                    </div>
                );
                })}
                <div style={{ marginTop: 20 }}>{JSON.stringify(UrlLinkList)}</div>

            </div>

        


      );
    
     
};


  