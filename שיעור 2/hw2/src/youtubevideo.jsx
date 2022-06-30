import React from "react";

export function YoutubeVideoListComp()
{
 return ([
     {title : 'MID-YEAR ANIMASH 2022' , youtubeurl : 'https://www.youtube.com/embed/5Q9Jx_ybeYU' , width : 560, height : 315},
     {title : 'One Piece - Openings 1-24' , youtubeurl : 'https://www.youtube.com/embed/DPzEnJyIAiA' , width : 560, height : 315},
     {title : 'Naruto Shippuden Openings 1-20 ' , youtubeurl : 'https://www.youtube.com/embed/SHTXpNfK2R8' , width : 560, height : 315},
     {title : 'FAIRY TAIL : All Openings (1-26) ' , youtubeurl : 'https://www.youtube.com/embed/63EWW0WBVGk' , width : 560, height : 315}
 ]
     );
}
export function GetYoutubeVideos(){
    let video = YoutubeVideoListComp()
    return (
        video.map(v=> <YoutubeVideoComp title={v.title} youtubeurl={v.youtubeurl} width={v.width} height={v.height} >  </YoutubeVideoComp>)
    )
}
export function YoutubeVideoComp(props)
{
    return(
    <>
    <h3> {props.title}</h3>
    <iframe width={props.width} height={props.height} src={props.youtubeurl} title={props.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </>
 );
}


