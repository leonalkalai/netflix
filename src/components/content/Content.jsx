import './Content.css';
import RowData from '../../constants/URLS';
import Row from '../row/Row';


export default function Content() {
  return (
    <div className='content-wrapper'>
      {RowData.map((el,index) => {
        return  <Row key={index} title={el.title} url={el.url} />;
      })}
    </div>
  );
}