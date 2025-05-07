import React, { } from 'react';

interface props {
  title: string;
  items: any;
  animation: string;
  background: string;
}

const SectionList: React.FC<props> = ({ title, items, animation, background }) => {
  return (
    <>
      <section className={`boxarea ${background}`}>
          <h2>{title}</h2>
          <div className="list">
            {items.map((item:any, index:any) => (
              <div key={index} data-aos={animation}>
                <img alt={item.label} src={item.img} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>
        </>
  )
}

export default SectionList