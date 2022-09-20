import * as React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import './style.css';

export default function App() {
  const [ind, setInd] = React.useState(0);
  const [sel, setSel] = React.useState(null);
  const stars = new Array(5).fill(<AiOutlineStar />);

  const handlemouseenter = (i) => {
    setInd(i + 1);
  };
  const handlemouseleave = (i) => {
    setInd(0);
  };
  const handleSelect = (i) => {
    setSel(i + 1);
  };
  return (
    <div>
      <h1>react-stars</h1>
      {stars.length &&
        stars.map((item, index) => (
          <div
            style={{
              display: 'inline-flex',
              color: ind > index || sel > index ? 'red' : 'black',
            }}
            onMouseEnter={() => handlemouseenter(index)}
            onMouseLeave={() => handlemouseleave(index)}
            onClick={() => handleSelect(index)}
          >
            {item}
          </div>
        ))}
      <p> your rating is :{sel}</p>
    </div>
  );
}
