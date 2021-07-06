export default function FooterGallery(props) {
  const imgs = props.local.footerImg;
  const view = imgs.map((img, index) => {
    return (
      <figure
        key={index}
        className={"gallery__item gallery__item--" + (index + 1).toString()}
      >
        <img src={img} className="gallery__img" alt="" />
      </figure>
    );
  });
  return <div className="gallery-footer">{view}</div>;
}
