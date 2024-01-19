import React,{Component} from 'react';
import Card from './card';
import image1 from '../assets/everest.jpg';
import image2 from '../assets/petra.jpg';
import image3 from '../assets/china.jpg';
import './cards.css';

const cards = [
  {
    id:1,
    title:"everest",
    image:image1,
    url:'https://co.images.search.yahoo.com/search/images;_ylt=Awrig63O96ZlkpAi2Hatcgx.;_ylu=c2VjA3NlYXJjaARzbGsDYnV0dG9u;_ylc=X1MDMjExNDc0NTAwNQRfcgMyBGZyA21jYWZlZQRmcjIDcDpzLHY6aSxtOnNiLXRvcARncHJpZANBQnVodFFFNlQ1eXFONS43NVUyeWNBBG5fcnNsdAMwBG5fc3VnZwMwBG9yaWdpbgNjby5pbWFnZXMuc2VhcmNoLnlhaG9vLmNvbQRwb3MDMARwcXN0cgMEcHFzdHJsAzAEcXN0cmwDMTEEcXVlcnkDZXZlcmVzdCUyMGpwZwR0X3N0bXADMTcwNTQ0MDgwNw--?p=everest+jpg&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&ei=UTF-8&x=wrt&type=E211CO714G0#id=19&iurl=https%3A%2F%2Ftriptins.com%2Fwp-content%2Fuploads%2F2020%2F10%2FViews-of-Mount-Everest-1536x1152.jpeg&action=close',
  },
  {
    id:2,
    title:"petra",
    image:image2,
    url:'https://co.images.search.yahoo.com/search/images;_ylt=AwrijgRe9aZlM94htkStcgx.;_ylu=c2VjA3NlYXJjaARzbGsDYnV0dG9u;_ylc=X1MDMjExNDc0NTAwNQRfcgMyBGZyA21jYWZlZQRmcjIDcDpzLHY6aSxtOnNiLXRvcARncHJpZAMxemlXOEpTdVFGU21ucG8yYTMxMFBBBG5fcnNsdAMwBG5fc3VnZwMwBG9yaWdpbgNjby5pbWFnZXMuc2VhcmNoLnlhaG9vLmNvbQRwb3MDMARwcXN0cgMEcHFzdHJsAzAEcXN0cmwDOQRxdWVyeQNwZXRyYSUyMGpwZwR0X3N0bXADMTcwNTQ0MDcyOQ--?p=petra+jpg&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&ei=UTF-8&x=wrt&type=E211CO714G0#id=74&iurl=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F9%2F9a%2FPetra_Jordan_BW_37.JPG&action=close'
  },
  {
    id:3,
    title:"muralla",
    image:image3,
    url:'https://co.images.search.yahoo.com/search/images;_ylt=AwrEuatW9aZlausOCY2tcgx.;_ylu=c2VjA3NlYXJjaARzbGsDYnV0dG9u;_ylc=X1MDMjExNDc0NTAwNQRfcgMyBGZyA21jYWZlZQRmcjIDcDpzLHY6aSxtOnNiLXRvcARncHJpZANjdVc4YXNxQ1RObWllRHFHQnNrREdBBG5fcnNsdAMwBG5fc3VnZwMwBG9yaWdpbgNjby5pbWFnZXMuc2VhcmNoLnlhaG9vLmNvbQRwb3MDMARwcXN0cgMEcHFzdHJsAzAEcXN0cmwDMTcEcXVlcnkDbXVyYWxsYSUyMGNoaW5hJTIwanBnBHRfc3RtcAMxNzA1NDQwMTA0?p=muralla+china+jpg&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&ei=UTF-8&x=wrt&type=E211CO714G0#id=10&iurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F9b%2Fdd%2F4d%2F9bdd4dcbc917bd48e551129c3bb219b1.jpg&action=click'
  }

]
export default class Cards extends Component{

render(){
  console.log(cards);
  return (
    <div className='container d-flex justify-content-center align-items-center'>
        <div className='row'>
          {
            cards.map(c=>(
              <div key={c.id} className='col-md-4'>
              <Card cards={c}/>
              </div> 
            ))
          }
            
        </div>
    </div>
  )
}

}
