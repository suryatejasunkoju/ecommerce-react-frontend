import { useState } from "react";
import insuranceImg from '../assets/usp/insurance.png'
import deliveryTruckImg from '../assets/usp/delivery-truck.png'
import laughImg from '../assets/usp/laugh.png'
import messengerImg from '../assets/usp/messenger.png'

function Usp() {
  const uspImg = { "width": 70, "height": 70 };

    return (
         <section className="usp-section">
                <ul>
                  <li>
                    <div className='usp'>
                      <img src={deliveryTruckImg} width={uspImg.width} height={uspImg.height} />
                      Fast Shipping
                    </div>
                  </li>
                  <li>
                    <div className='usp'>
                      <img src={messengerImg} width={uspImg.width} height={uspImg.height} />
                      Customer Support
                    </div>
                  </li>
                  <li>
                    <div className='usp'>
                      <img src={insuranceImg} width={uspImg.width} height={uspImg.height} alt="" />
                      Secure Shopping
                    </div>
                  </li>
                  <li>
                    <div className='usp'>
                      <img src={laughImg} width={uspImg.width} height={uspImg.height} alt="" />
                      60,000+ Customers
                    </div>
                  </li>
                </ul>
              </section>
    );
}

export default Usp;