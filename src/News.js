export default function News(props){


    return(
        <div className="news-box" >
            {
                (props.article.urlToImage)!== null?
                <img  src={props.article.urlToImage} />
                :
                <img src=" https://as2.ftcdn.net/v2/jpg/04/99/93/31/500_F_499933117_ZAUBfv3P1HEOsZDrnkbNCt4jc3AodArl.jpg"/>

                
            }
            
            <h4>{props.article.title}</h4>
            <p>{props.article.description?.substring(0,100).concat("...")}<a href={props.article.url} target="
            __blank">Read more</a></p>
            
        
        </div>
    )
}