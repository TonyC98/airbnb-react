export default function Thumbnail() {
  let houses = [
    {
      image:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2002/house_02_01.png',
      title: 'Luxury Villa in Chaweng',
      price: 110,
      location: 'Koh Panghan',
      rooms: 3,
      reviews: 3,
      score: 1,
    },
    {
      image:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2003/house_03_01.png',
      title: 'Private Villa Lotus',
      price: 190,
      location: 'Koh Panghan',
      rooms: 5,
      reviews: 6,
      score: 1,
    },
    {
      image:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2004/house_04_01.png',
      title: 'Bungalow in Ban Tai',
      price: 70,
      location: 'Koh Panghan',
      rooms: 2,
      reviews: 2,
      score: 1,
    },
    {
      image:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2005/house_05_01.png',
      title: 'Cottage in Green Village',
      price: 180,
      location: 'Bali',
      rooms: 3,
      reviews: 3,
      score: 1,
    },
    {
      image:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2006/house_06_01.png',
      title: 'Villa Fede',
      price: 250,
      location: 'Koh Samui',
      rooms: 4,
      reviews: 10,
      score: 1,
    },
    {
      image:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2007/house_07_01.png',
      title: 'Resort in Haad Wai',
      price: 200,
      location: 'Koh Samui',
      rooms: 5,
      reviews: 5,
      score: 1,
    },
  ]
  return (
    <div className="container">
      <div className="row row-cols-4 g-4">
        {houses.map((house, index) => (
          <div className="col" key={index}>
            <div className="card">
              <img
                src={house.image}
                className="card-img-top"
                alt="airbnb-house"
              />
              <div className="card-body">
                <p>
                  <i className="bi bi-geo-alt-fill"></i>
                  <small>
                    {house.location}{' '}
                    <strong>
                      <i className="bi bi-dot"></i>
                    </strong>{' '}
                    {house.rooms}
                    <span> rooms</span>
                  </small>
                </p>
                <h4 className="h4">{house.title}</h4>
                <i
                  className="bi bi-hand-thumbs-up-fill"
                  style={{ color: `green` }}
                ></i>
                <span>{house.reviews}</span>
                <i className="fa-solid fa-location-dot"></i>
                <span className="float-end">
                  <span>$</span>
                  {house.price}
                  <span>/night</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
